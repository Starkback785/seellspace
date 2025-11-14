import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            SellSpace
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your Digital Marketplace Platform with 0% Fees
          </p>
          <div className="space-x-4">
            <Button variant="brand" size="lg">
              Start Selling
            </Button>
            <Button variant="outline" size="lg">
              Browse Stores
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <CardTitle>0% Fees</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Keep all your earnings with no transaction fees
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Customizable Stores</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Create a store that matches your brand perfectly
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Digital Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Automated delivery of digital products to customers
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}