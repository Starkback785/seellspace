'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'

// Mock cart data
const initialCart = [
  {
    id: '1',
    name: 'Digital Marketing Guide',
    slug: 'digital-marketing-guide',
    price: 29.99,
    quantity: 1,
    variant: 'eBook',
    image: '/api/placeholder/100x100',
    store: 'amazing-digital'
    storeName: 'Amazing Digital Store'
  },
  {
    id: '2',
    name: 'WordPress Theme Bundle',
    slug: 'wordpress-theme-bundle',
    price: 49.99,
    quantity: 2,
    variant: 'Premium',
    image: '/api/placeholder/100x100',
    store: 'creative-assets',
    storeName: 'Creative Assets Hub'
  },
  {
    id: '3',
    name: 'SEO Course',
    slug: 'seo-course',
    price: 99.99,
    quantity: 1,
    variant: 'Video Course',
    image: '/api/placeholder/100x100',
    store: 'learn-academy',
    storeName: 'Learn Academy'
  }
]

export default function CartPage() {
  const [cart, setCart] = useState(initialCart)
  const [couponCode, setCouponCode] = useState('')
  const [couponApplied, setCouponApplied] = useState(false)
  const [email, setEmail] = useState('')

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    ))
  }

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'SAVE10') {
      setCouponApplied(true)
    } else {
      alert('Invalid coupon code')
    }
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const discount = couponApplied ? subtotal * 0.1 : 0
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal - discount + tax

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Your Items ({cart.length})</CardTitle>
                <CardDescription>Review your items before checkout</CardDescription>
              </CardHeader>
              <CardContent>
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-6xl text-gray-300 mb-4">🛒</div>
                    <p className="text-gray-600 mb-8">Your cart is empty</p>
                    <Button variant="brand" size="lg" asChild>
                      <Link href="/stores">Browse Stores</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex space-x-4 bg-white p-4 rounded-lg border">
                        <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center">
                          <span className="text-2xl text-gray-400">📁</span>
                        </div>
                        <div className="flex-1">
                          <div>
                            <Link href={`/${item.store}/products/${item.slug}`} className="font-medium text-blue-600 hover:text-blue-800">
                              {item.name}
                            </Link>
                            <p className="text-sm text-gray-600">
                              from {item.storeName}
                            </p>
                          </div>
                          <div className="text-lg font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </Button>
                              <Input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                className="w-20 text-center"
                              />
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </Button>
                            </div>
                            <div className="text-sm text-gray-600">
                              {item.variant && `• ${item.variant}`}
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Coupon Code */}
                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <Label htmlFor="coupon">Coupon Code</Label>
                  <div className="flex space-x-3">
                    <Input
                      id="coupon"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter coupon code"
                      disabled={couponApplied}
                      className="flex-1"
                    />
                    <Button
                      onClick={applyCoupon}
                      disabled={couponApplied || !couponCode}
                      variant={couponApplied ? "default" : "outline"}
                    >
                      {couponApplied ? 'Applied ✓' : 'Apply'}
                    </Button>
                  </div>
                  {couponApplied && (
                    <p className="text-green-600 text-sm mt-2">
                      10% discount applied! You saved ${discount.toFixed(2)}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Checkout Summary */}
          <div className="space-y-6">
            {/* Customer Info */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Information</CardTitle>
                <CardDescription>Enter your details for checkout</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>Review your order total</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                {couponApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (10%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-bold text-blue-600">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-600 mt-4">
                  Prices in USD • 0% fees • Instant digital delivery
                </div>
              </CardContent>
            </Card>

            {/* Checkout Button */}
            <Button
              className="w-full text-lg py-4"
              disabled={cart.length === 0 || !email}
              asChild
            >
              <Link href="/checkout">
                Proceed to Checkout →
              </Link>
            </Button>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Secure Checkout</span> • SSL encrypted • 100% payment protection
              </p>
              <div className="flex justify-center space-x-4 text-sm">
                <span>🔒 Secure</span>
                <span>💳 Stripe</span>
                <span>₿ Bitcoin</span>
                <span>Ł Litecoin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}