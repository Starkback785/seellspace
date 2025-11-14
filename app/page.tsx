import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              SellSpace
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Your Digital Marketplace Platform with 0% Fees
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Create your customizable online store, sell digital products, and keep 100% of your earnings.
              No hidden fees, no commissions, just pure profit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="brand" size="lg" asChild>
                <Link href="/auth/signin">
                  Start Selling
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/checkout">
                  🛒 Quick Demo Checkout
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/features">
                  Browse Features
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Sell Digital Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From customizable stores to automated delivery, we've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle>0% Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Keep all your earnings with zero transaction fees. No commissions, no hidden costs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <CardTitle>Customizable Stores</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Create a store that matches your brand perfectly with custom colors, logos, and designs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <CardTitle>Digital Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automated delivery of digital products to customers immediately after purchase.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <CardTitle>Multiple Payment Gateways</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Accept payments from all major credit cards, PayPal, and cryptocurrency wallets.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <CardTitle>Analytics & Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Track your sales, revenue, and customer growth with detailed analytics dashboard.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <CardTitle>API & Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  RESTful API with documentation to integrate SellSpace with your existing tools.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-brand-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Selling?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who trust SellSpace to sell their digital products.
          </p>
          <Button variant="brand" size="lg" asChild>
            <Link href="/auth/signin">
              Create Your Free Store
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}