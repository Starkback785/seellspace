'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'crypto'>('stripe')
  const [cryptoCurrency, setCryptoCurrency] = useState<'BTC' | 'LTC'>('BTC')
  const [customerInfo, setCustomerInfo] = useState({
    email: '',
    name: '',
    address: ''
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()

  // Mock cart data - in real app this would come from context/API
  const cartItems = [
    {
      id: '1',
      name: 'Digital Marketing Guide',
      price: 29.99,
      quantity: 1,
      description: 'Complete guide to digital marketing'
    }
  ]

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const handleStripeCheckout = async () => {
    setIsProcessing(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cartItems,
          customer: customerInfo
        })
      })

      const { url } = await response.json()
      window.location.href = url
    } catch (error) {
      console.error('Checkout error:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  const handleCryptoCheckout = () => {
    // This would generate actual crypto payment details
    router.push('/checkout/crypto')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
                    </div>
                    <div className="font-medium">${item.price}</div>
                  </div>
                ))}

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment & Customer Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Information */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Information</CardTitle>
                <CardDescription>Enter your details for order processing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    placeholder="John Doe"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Choose your preferred payment method</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      value="stripe"
                      checked={paymentMethod === 'stripe'}
                      onChange={() => setPaymentMethod('stripe')}
                      className="text-brand-600"
                    />
                    <div className="flex-1">
                      <div className="font-medium">Credit/Debit Card</div>
                      <div className="text-sm text-gray-600">Visa, Mastercard, American Express, Apple Pay, Google Pay</div>
                    </div>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      value="crypto"
                      checked={paymentMethod === 'crypto'}
                      onChange={() => setPaymentMethod('crypto')}
                      className="text-brand-600"
                    />
                    <div className="flex-1">
                      <div className="font-medium">Cryptocurrency</div>
                      <div className="text-sm text-gray-600">Bitcoin, Litecoin</div>
                    </div>
                  </label>
                </div>

                {paymentMethod === 'crypto' && (
                  <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                    <Label>Currency Selection</Label>
                    <select
                      value={cryptoCurrency}
                      onChange={(e) => setCryptoCurrency(e.target.value as 'BTC' | 'LTC')}
                      className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2"
                    >
                      <option value="BTC">Bitcoin (BTC)</option>
                      <option value="LTC">Litecoin (LTC)</option>
                    </select>
                    <p className="text-xs text-yellow-800 mt-2">
                      Crypto payments require manual verification. Transaction will be confirmed once payment is detected on the blockchain.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Place Order Button */}
            <Button
              onClick={paymentMethod === 'stripe' ? handleStripeCheckout : handleCryptoCheckout}
              disabled={isProcessing || !customerInfo.email}
              className="w-full bg-brand-500 hover:bg-brand-600 text-lg py-6"
              size="lg"
            >
              {isProcessing ? 'Processing...' : (
                <>
                  {paymentMethod === 'stripe' ? '🔒 Pay with Card' : '₿ Pay with Crypto'} - ${total.toFixed(2)}
                </>
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              By completing this purchase you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}