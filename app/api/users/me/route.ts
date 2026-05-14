import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // TODO: Verify JWT token and return user data

    return NextResponse.json({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+91 XXXXX XXXXX'
    })
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
}
