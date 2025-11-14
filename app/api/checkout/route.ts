import { NextRequest, NextResponse } from 'next/server'
import { createCheckoutSession } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { items, customer } = await request.json()

    if (!items || !customer) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create checkout session
    const session = await createCheckoutSession(items, customer.email)

    // Save order to database
    const order = await prisma.order.create({
      data: {
        orderNumber: `ORD-${Date.now()}`,
        total: items.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0),
        subtotal: items.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0),
        customerEmail: customer.email,
        customerName: customer.name,
        paymentIntentId: session.id,
        status: 'PENDING',
        paymentStatus: 'PENDING',
        storeId: 'default-store', // This would come from product data
        items: {
          create: items.map((item: any) => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.price,
            total: item.price * item.quantity,
            variantId: item.variant || null
          }))
        }
      }
    })

    return NextResponse.json({
      sessionId: session.id,
      orderId: order.id,
      url: session.url
    })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}