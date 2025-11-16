import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AnalyticsPage() {
  // Mock analytics data
  const revenueData = [
    { date: 'Jan 1', revenue: 456, orders: 12, customers: 8 },
    { date: 'Jan 2', revenue: 789, orders: 18, customers: 14 },
    { date: 'Jan 3', revenue: 623, orders: 15, customers: 11 },
    { date: 'Jan 4', revenue: 892, orders: 22, customers: 17 },
    { date: 'Jan 5', revenue: 1234, orders: 28, customers: 23 },
    { date: 'Jan 6', revenue: 967, orders: 19, customers: 16 },
    { date: 'Jan 7', revenue: 1456, orders: 34, customers: 28 },
  ]

  const topProducts = [
    { name: 'Digital Marketing Guide', sales: 45, revenue: '$1,349.55', growth: '+12%' },
    { name: 'WordPress Theme Bundle', sales: 23, revenue: '$1,149.77', growth: '+8%' },
    { name: 'SEO Course', sales: 18, revenue: '$1,799.82', growth: '+25%' },
    { name: 'Email Templates', sales: 15, revenue: '$299.85', growth: '-3%' },
    { name: 'Social Media Templates', sales: 12, revenue: '$359.88', growth: '+15%' }
  ]

  const recentActivity = [
    { type: 'sale', message: 'New order #ORD-001 - Digital Marketing Guide', time: '2 hours ago', amount: '+$29.99' },
    { type: 'customer', message: 'New customer registered', time: '3 hours ago', amount: '' },
    { type: 'sale', message: 'Order #ORD-002 completed - WordPress Theme', time: '5 hours ago', amount: '+$49.99' },
    { type: 'sale', message: 'Bitcoin payment received - SEO Course', time: '6 hours ago', amount: '+$99.99' },
    { type: 'refund', message: 'Refund processed for order #ORD-099', time: '1 day ago', amount: '-$19.99' }
  ]

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600">Track your store performance and growth</p>
        </div>
        <div className="flex space-x-3">
          <select className="border border-gray-300 rounded-md px-3 py-2">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last year</option>
          </select>
          <Button variant="outline">Export Report</Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <div className="text-green-600">📈</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$7,417</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+18.2%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <div className="text-blue-600">🛒</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">148</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12.5%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <div className="text-purple-600">👥</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+28.4%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <div className="text-orange-600">🎯</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">-0.5%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Revenue Chart */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Daily revenue over the last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between space-x-2">
              {revenueData.map((day, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div
                    className="bg-brand-500 w-full rounded-t"
                    style={{ height: `${(day.revenue / 1456) * 100}%` }}
                  ></div>
                  <div className="text-xs text-gray-500 mt-2">
                    {day.date.split(' ')[1]}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-600 text-center">
              Peak: $1,456 on Jan 7
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest events in your store</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-64 overflow-y-auto">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 pb-3 border-b last:border-0">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    activity.type === 'sale' ? 'bg-green-500' :
                    activity.type === 'customer' ? 'bg-blue-500' : 'bg-red-500'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm">
                      <span className={`font-medium ${
                        activity.type === 'sale' ? 'text-green-700' :
                        activity.type === 'customer' ? 'text-blue-700' : 'text-red-700'
                      }`}>
                        {activity.type === 'sale' ? '💰' :
                         activity.type === 'customer' ? '👤' : '↩️'} {activity.message}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-gray-500">{activity.time}</span>
                      {activity.amount && (
                        <span className={`text-sm font-semibold ${
                          activity.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {activity.amount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Products</CardTitle>
            <CardDescription>Best selling products this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium text-sm">{product.name}</div>
                    <div className="text-xs text-gray-500">{product.sales} sales</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-sm">{product.revenue}</div>
                    <div className={`text-xs font-semibold ${
                      product.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {product.growth}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Revenue by payment method</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">🔒</span>
                  <span>Credit/Debit Cards</span>
                </div>
                <div className="text-right">
                  <div className="font-medium">$4,567.89</div>
                  <div className="text-xs text-gray-500">61.6%</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">₿</span>
                  <span>Bitcoin</span>
                </div>
                <div className="text-right">
                  <div className="font-medium">$1,845.23</div>
                  <div className="text-xs text-gray-500">24.9%</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">Ł</span>
                  <span>Litecoin</span>
                </div>
                <div className="text-right">
                  <div className="font-medium">$1,003.88</div>
                  <div className="text-xs text-gray-500">13.5%</div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t">
                <div className="font-medium">Total Revenue</div>
                <div className="font-bold text-lg">$7,417.00</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}