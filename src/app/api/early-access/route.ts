"use server";

import { NextResponse } from "next/server";

export interface EarlyAccessParams {
  email: string;
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

    // Send data to N8N webhook
    const webhookResponse = await fetch('https://n8n.karhuno.info/webhook/getready', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: body.email,
        timestamp: new Date().toISOString(),
        source: 'early-access-form'
      }),
    });

    if (!webhookResponse.ok) {
      throw new Error(`Webhook failed with status: ${webhookResponse.status}`);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'You are in the list' 
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