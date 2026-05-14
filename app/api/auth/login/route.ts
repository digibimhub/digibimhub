import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // TODO: Connect to MongoDB and verify credentials
    // For now, return mock token

    return NextResponse.json({
      token: 'mock_jwt_token',
      user: { email }
    })
  } catch (error) {
    return NextResponse.json({ error: 'Login failed' }, { status: 401 })
  }
}
