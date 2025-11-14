'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { generateCryptoPayment, verifyCryptoPayment } from '@/lib/crypto'

export default function CryptoCheckoutPage() {
  const router = useRouter()
  const [selectedCrypto, setSelectedCrypto] = useState<'BTC' | 'LTC'>('BTC')
  const [paymentInfo, setPaymentInfo] = useState<any>(null)
  const [timeLeft, setTimeLeft] = useState(900) // 15 minutes
  const [isVerifying, setIsVerifying] = useState(false)
  const [verified, setVerified] = useState(false)

  const amount = 29.99 // Mock cart total

  useEffect(() => {
    const payment = generateCryptoPayment(amount, selectedCrypto)
    setPaymentInfo(payment)

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push('/checkout')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [selectedCrypto, amount, router])

  useEffect(() => {
    // Auto-verify after 5 seconds for demo
    const verifyTimer = setTimeout(() => {
      if (paymentInfo) {
        setIsVerifying(true)
        setTimeout(() => {
          const isPaid = verifyCryptoPayment(paymentInfo.address, paymentInfo.amount, selectedCrypto)
          setVerified(isPaid)
          setIsVerifying(false)

          if (isPaid) {
            setTimeout(() => {
              router.push('/success?session_id=crypto-payment')
            }, 2000)
          }
        }, 3000)
      }
    }, 5000)

    return () => clearTimeout(verifyTimer)
  }, [paymentInfo, selectedCrypto, router])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (!paymentInfo) return <div>Loading...</div>

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Cryptocurrency Payment</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Instructions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {selectedCrypto === 'BTC' ? '₿' : 'Ł'} Pay with {selectedCrypto}
                </CardTitle>
                <CardDescription>
                  Send the exact amount to the address below
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-red-700">IMPORTANT:</span>
                    <span className="text-red-600 font-mono">{formatTime(timeLeft)}</span>
                  </div>
                  <p className="text-red-800 text-sm">
                    Payment must be received within 15 minutes or the order will be cancelled.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount to Send:
                  </label>
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3">
                    <div className="text-2xl font-bold text-blue-800">
                      {paymentInfo.amount.toFixed(8)} {selectedCrypto}
                    </div>
                    <div className="text-sm text-blue-600">
                      ≈ ${amount.toFixed(2)} USD
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Send to Address:
                  </label>
                  <div className="bg-gray-100 border border-gray-300 rounded-lg p-3 font-mono text-sm break-all">
                    {paymentInfo.address}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => navigator.clipboard.writeText(paymentInfo.address)}
                  >
                    📋 Copy Address
                  </Button>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Payment Verification</h4>
                  <p className="text-yellow-700 text-sm">
                    After sending payment, we'll automatically verify the transaction on the blockchain.
                    This typically takes 10-30 minutes for Bitcoin and 2-5 minutes for Litecoin.
                  </p>
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedCrypto(selectedCrypto === 'BTC' ? 'LTC' : 'BTC')}
                  >
                    Switch to {selectedCrypto === 'BTC' ? 'Litecoin' : 'Bitcoin'}
                  </Button>
                  <Button variant="outline" onClick={() => router.push('/checkout')}>
                    Back to Checkout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* QR Code */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>QR Code</CardTitle>
                <CardDescription>
                  Scan with your crypto wallet app
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200 inline-block">
                  {/* QR Code Placeholder - in production use actual QR generation */}
                  <div className="w-64 h-64 bg-gray-200 rounded flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">
                        {selectedCrypto === 'BTC' ? '₿' : 'Ł'}
                      </div>
                      <div className="text-sm text-gray-600">
                        {paymentInfo.amount.toFixed(8)} {selectedCrypto}
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        Scan QR Code
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Most crypto wallets can scan this QR code to auto-fill the payment details.
                </p>
              </CardContent>
            </Card>

            {/* Verification Status */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Status</CardTitle>
              </CardHeader>
              <CardContent>
                {!isVerifying && !verified && (
                  <div className="text-center py-4">
                    <div className="animate-pulse bg-yellow-100 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <div className="text-yellow-600">⏳</div>
                    </div>
                    <p className="text-gray-600">Awaiting payment...</p>
                    <p className="text-sm text-gray-500 mt-2">
                      We're monitoring the blockchain for your transaction
                    </p>
                  </div>
                )}

                {isVerifying && (
                  <div className="text-center py-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-3"></div>
                    <p className="text-blue-600">Verifying payment...</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Checking blockchain confirmation
                    </p>
                  </div>
                )}

                {verified && (
                  <div className="text-center py-4">
                    <div className="bg-green-100 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <div className="text-green-600">✓</div>
                    </div>
                    <p className="text-green-600 font-semibold">Payment Confirmed!</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Redirecting to success page...
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}