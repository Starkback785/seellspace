import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

export default function ProductsPage() {
  // Mock products data
  const products = [
    {
      id: "1",
      name: "Digital Marketing Guide",
      price: "$29.99",
      status: "Active",
      sales: 45,
      revenue: "$1,349.55",
      created: "2 weeks ago"
    },
    {
      id: "2",
      name: "WordPress Theme Bundle",
      price: "$49.99",
      status: "Active",
      sales: 23,
      revenue: "$1,149.77",
      created: "1 month ago"
    },
    {
      id: "3",
      name: "SEO Course",
      price: "$99.99",
      status: "Draft",
      sales: 0,
      revenue: "$0.00",
      created: "3 days ago"
    }
  ]

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600">Manage your digital products</p>
        </div>
        <Button className="bg-brand-500 hover:bg-brand-600" asChild>
          <Link href="/dashboard/products/new">Add Product</Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,499.32</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-6">
        <Input placeholder="Search products..." className="max-w-sm" />
        <select className="border border-gray-300 rounded-md px-3 py-2">
          <option>All Status</option>
          <option>Active</option>
          <option>Draft</option>
          <option>Archived</option>
        </select>
      </div>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>Your digital products catalog</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Product Name</th>
                  <th className="text-left py-3 px-4">Price</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Sales</th>
                  <th className="text-left py-3 px-4">Revenue</th>
                  <th className="text-left py-3 px-4">Created</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="font-medium">{product.name}</div>
                    </td>
                    <td className="py-3 px-4">{product.price}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        product.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{product.sales}</td>
                    <td className="py-3 px-4">{product.revenue}</td>
                    <td className="py-3 px-4 text-gray-600">{product.created}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}