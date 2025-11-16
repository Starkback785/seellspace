import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function OrdersPage() {
  // Mock orders data
  const orders = [
    {
      id: "#ORD-001",
      customer: "john@example.com",
      customerName: "John Doe",
      total: "$49.99",
      status: "Completed",
      paymentMethod: "Stripe",
      paymentStatus: "Completed",
      items: 2,
      date: "2024-01-15 14:30",
      products: ["Digital Marketing Guide", "SEO Templates"]
    },
    {
      id: "#ORD-002",
      customer: "sarah@gmail.com",
      customerName: "Sarah Smith",
      total: "$29.99",
      status: "Processing",
      paymentMethod: "Bitcoin",
      paymentStatus: "Confirmed",
      items: 1,
      date: "2024-01-15 12:15",
      products: ["WordPress Theme"]
    },
    {
      id: "#ORD-003",
      customer: "mike@yahoo.com",
      customerName: "Mike Johnson",
      total: "$89.99",
      status: "Shipped",
      paymentMethod: "Litecoin",
      paymentStatus: "Completed",
      items: 3,
      date: "2024-01-14 18:45",
      products: ["Complete Course Bundle"]
    },
    {
      id: "#ORD-004",
      customer: "emma@outlook.com",
      customerName: "Emma Wilson",
      total: "$19.99",
      status: "Pending",
      paymentMethod: "Stripe",
      paymentStatus: "Pending",
      items: 1,
      date: "2024-01-15 09:20",
      products: ["Email Templates"]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800'
      case 'Processing': return 'bg-yellow-100 text-yellow-800'
      case 'Shipped': return 'bg-blue-100 text-blue-800'
      case 'Pending': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPaymentIcon = (method: string) => {
    switch (method) {
      case 'Stripe': return '🔒'
      case 'Bitcoin': return '₿'
      case 'Litecoin': return 'Ł'
      default: return '💳'
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
          <p className="text-gray-600">Manage customer orders and fulfillment</p>
        </div>
        <div className="flex gap-3">
          <Input placeholder="Search orders..." className="max-w-xs" />
          <Button variant="outline">Export</Button>
          <Button variant="outline">Filters</Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,567.89</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Need attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">91% completion rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>Customer orders with payment details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Order #</th>
                  <th className="text-left py-3 px-4">Customer</th>
                  <th className="text-left py-3 px-4">Items</th>
                  <th className="text-left py-3 px-4">Total</th>
                  <th className="text-left py-3 px-4">Payment</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="font-medium">{order.id}</div>
                      <div className="text-xs text-gray-500">{order.date}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium">{order.customerName}</div>
                        <div className="text-sm text-gray-600">{order.customer}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm">
                        {order.items} item{order.items > 1 ? 's' : ''}
                      </div>
                      <div className="text-xs text-gray-500">
                        {order.products.slice(0, 2).join(', ')}
                        {order.products.length > 2 && ` +${order.products.length - 2} more`}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium">{order.total}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <span>{getPaymentIcon(order.paymentMethod)}</span>
                        <div>
                          <div className="text-sm font-medium">{order.paymentMethod}</div>
                          <div className={`text-xs ${
                            order.paymentStatus === 'Completed' ? 'text-green-600' :
                            order.paymentStatus === 'Confirmed' ? 'text-blue-600' : 'text-yellow-600'
                          }`}>
                            {order.paymentStatus}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600 text-sm">
                      {order.date}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">View</Button>
                        {order.status === 'Pending' && (
                          <Button variant="outline" size="sm">Fulfill</Button>
                        )}
                        <Button variant="outline" size="sm">Track</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing 1-4 of 156 orders
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}