import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

type EarlyAccessBody = {
  email: string
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

    let existing: Array<{ email: string; timestamp: string }> = []
    try {
      const file = await fs.readFile(filePath, 'utf-8')
      existing = JSON.parse(file)
      if (!Array.isArray(existing)) existing = []
    } catch {
      existing = []
    }

    existing.push({ email, timestamp: new Date().toISOString() })
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2), 'utf-8')

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}


