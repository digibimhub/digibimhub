import { NextResponse } from 'next/server'

const courses = [
  { id: 1, title: 'Junior BIM Modeler', level: 1, price: 15000 },
  { id: 2, title: 'BIM Modeler – MEP', level: 2, price: 25000 },
  { id: 3, title: 'BIM Coordinator – MEP', level: 3, price: 35000 },
  { id: 4, title: 'Senior BIM Modeler – MEP', level: 4, price: 40000 },
  { id: 5, title: 'BIM Manager – MEP', level: 5, price: 50000 },
]

export async function GET() {
  return NextResponse.json(courses)
}
