"use server";

import { NextResponse } from "next/server";

export interface SendEmailParams {
  to: string;
  ICP: string;
  moreDetails: string;
  company: string;
  name: string;
}

export async function POST(req: Request) {
  try {
    const body: SendEmailParams = await req.json();

    // Send data to N8N webhook for processing
    const webhookResponse = await fetch('https://n8n.karhuno.info/webhook/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: body.to,
        ICP: body.ICP,
        moreDetails: body.moreDetails,
        company: body.company,
        name: body.name,
        timestamp: new Date().toISOString(),
        source: 'contact-form'
      }),
    });

    if (!webhookResponse.ok) {
      throw new Error(`Webhook failed with status: ${webhookResponse.status}`);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}