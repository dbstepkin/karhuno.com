"use server";

import { Resend } from "resend";
import KarhunoEarlyAccessEmail from "../../../../emails/early-access";
import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import { writeFile, readFile } from "fs/promises";
import { join } from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EarlyAccessParams {
  email: string;
}

// Simple file-based storage for early access emails
const EARLY_ACCESS_FILE = join(process.cwd(), 'data', 'early-access-emails.json');

async function saveEmailToFile(email: string) {
  try {
    // Ensure data directory exists
    const fs = require('fs');
    const dataDir = join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing emails or create empty array
    let emails: { email: string; timestamp: string }[] = [];
    try {
      const fileContent = await readFile(EARLY_ACCESS_FILE, 'utf-8');
      emails = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist or is empty, start with empty array
      emails = [];
    }

    // Check if email already exists
    const emailExists = emails.some(entry => entry.email === email);
    if (emailExists) {
      return { success: true, message: 'Email already registered' };
    }

    // Add new email with timestamp
    emails.push({
      email,
      timestamp: new Date().toISOString()
    });

    // Save back to file
    await writeFile(EARLY_ACCESS_FILE, JSON.stringify(emails, null, 2));
    return { success: true, message: 'Email saved successfully' };
  } catch (error) {
    console.error('Error saving email:', error);
    return { success: false, error: 'Failed to save email' };
  }
}

export async function POST(req: Request) {
  try {
    const body: EarlyAccessParams = await req.json();
    
    if (!body.email || !body.email.includes('@')) {
      return NextResponse.json({ 
        success: false, 
        error: 'Valid email address is required' 
      }, { status: 400 });
    }

    // Save email to file
    const saveResult = await saveEmailToFile(body.email);
    if (!saveResult.success) {
      return NextResponse.json({ 
        success: false, 
        error: saveResult.error 
      }, { status: 500 });
    }

    // If email already exists, don't send another confirmation
    if (saveResult.message === 'Email already registered') {
      return NextResponse.json({ 
        success: true, 
        message: 'Email already registered, no confirmation sent' 
      }, { status: 200 });
    }

    // Render confirmation email
    const confirmationHtml = await render(KarhunoEarlyAccessEmail());

    // Send confirmation email to user
    const { data, error } = await resend.emails.send({
      from: "Karhuno Team <team@karhuno.com>",
      to: body.email,
      subject: "🎉 Welcome to Karhuno AI Early Access!",
      html: confirmationHtml,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ 
        success: false, 
        error: error.message 
      }, { status: 500 });
    }

    // Send notification to admin
    await resend.emails.send({
      from: "Early Access <noreply@karhuno.com>",
      to: "dstepkin@gmail.com",
      subject: "🎯 New Early Access Signup - Karhuno AI",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #6A0DAD; margin-bottom: 20px;">🎯 New Early Access Signup</h2>
          <div style="background: #f8f4ff; padding: 20px; border-radius: 8px; border-left: 4px solid #6A0DAD;">
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${body.email}</p>
            <p style="margin: 0 0 10px 0;"><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
            <p style="margin: 0;"><strong>Total signups:</strong> Check data/early-access-emails.json for full list</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ 
      success: true, 
      data,
      message: 'Email saved and confirmation sent successfully' 
    }, { status: 200 });

  } catch (error) {
    console.error('Early access API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
} 