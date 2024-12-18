import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const response = await fetch(`${process.env.HUBSPOT_API_URL}/crm/v3/objects/contacts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: {
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          phone: data.phone,
          message: data.message,
          contact_type: data.type,
        },
      }),
    })
    const result = await response.json()

    if (response?.status !== 201 && response?.status !== 409) {
      throw new Error('Failed to submit contact form')
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return NextResponse.json({ error: 'Failed to submit contact form' }, { status: 500 })
  }
}
