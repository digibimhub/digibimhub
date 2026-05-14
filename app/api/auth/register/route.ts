import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, password } = await request.json()

    // TODO: Connect to MongoDB and create user
    // For now, return success response

    return NextResponse.json({ message: 'Registration successful' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 })
  }
}
