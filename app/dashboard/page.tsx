import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function DashboardPage() {
  // Mock data for demonstration
  const stats = [
    {
      title: "Total Revenue",
      value: "$2,456.89",
      change: "+12.5%",
      changeType: "positive"
    },
    {
      title: "Total Orders",
      value: "48",
      change: "+8.2%",
      changeType: "positive"
    },
    {
      title: "Active Products",
      value: "12",
      change: "+2",
      changeType: "positive"
    },
    {
      title: "Total Customers",
      value: "156",
      change: "+15.3%",
      changeType: "positive"
    }
  ]

  const recentOrders = [
    {
      id: "#ORD-001",
      customer: "john@example.com",
      amount: "$49.99",
      status: "Completed",
      date: "2 hours ago"
    },
    {
      id: "#ORD-002",
      customer: "sarah@gmail.com",
      amount: "$29.99",
      status: "Processing",
      date: "5 hours ago"
    },
    {
      id: "#ORD-003",
      customer: "mike@yahoo.com",
      amount: "$89.99",
      status: "Completed",
      date: "1 day ago"
    }
  ]

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your store.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <svg className="h-4 w-4 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={`inline-flex items-center ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.changeType === 'positive' ? '↑' : '↓'} {stat.change}
                </span>
                {' '}from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Orders & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Your latest customer orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.amount}</p>
                    <p className={`text-sm ${
                      order.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
                    }`}>
                      {order.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/orders">View All Orders</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks to manage your store</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start" variant="outline" asChild>
              <Link href="/dashboard/products/new">
                ➕ Add New Product
              </Link>
            </Button>
            <Button className="w-full justify-start" variant="outline" asChild>
              <Link href="/dashboard/customize">
                🎨 Customize Store
              </Link>
            </Button>
            <Button className="w-full justify-start" variant="outline" asChild>
              <Link href="/dashboard/analytics">
                📊 View Analytics
              </Link>
            </Button>
            <Button className="w-full justify-start" variant="outline" asChild>
              <Link href="/dashboard/settings">
                ⚙️ Store Settings
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}