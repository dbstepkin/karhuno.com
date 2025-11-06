import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

type EarlyAccessBody = {
  email: string
  companyType?: string
  news?: string
  location?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  try {
    const body: EarlyAccessBody = await req.json()
    const email = (body?.email || '').trim()

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ success: false, error: 'Invalid email' }, { status: 400 })
    }

    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'early-access-emails.json')

    try {
      await fs.mkdir(dataDir, { recursive: true })
    } catch {
      // ignore
    }

    let existing: Array<{ email: string; timestamp: string; companyType?: string; news?: string; location?: string }> = []
    try {
      const file = await fs.readFile(filePath, 'utf-8')
      existing = JSON.parse(file)
      if (!Array.isArray(existing)) existing = []
    } catch {
      existing = []
    }

    const entry = {
      email,
      timestamp: new Date().toISOString(),
      companyType: body.companyType,
      news: body.news,
      location: body.location
    }
    existing.push(entry)
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2), 'utf-8')

    // Send data to webhook
    try {
      const webhookUrl = new URL('/api/webhook', req.url).toString()
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          companyType: body.companyType,
          news: body.news,
          location: body.location,
        }),
      }).catch((error) => {
        // Log webhook error but don't fail the request
        console.error('Error sending to webhook:', error)
      })
    } catch (webhookError) {
      // Log webhook error but don't fail the request
      console.error('Error sending to webhook:', webhookError)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}


