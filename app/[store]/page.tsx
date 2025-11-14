import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

// Mock store data - in real app this would come from database
const store = {
  name: 'Amazing Digital Store',
  description: 'Premium digital products for creators and entrepreneurs',
  theme: {
    primaryColor: '#0ea5e9',
    backgroundColor: '#ffffff',
    textColor: '#1e293b'
  }
}

// Mock products for this store
const products = [
  {
    id: '1',
    name: 'Digital Marketing Guide',
    slug: 'digital-marketing-guide',
    price: 29.99,
    description: 'Complete guide to mastering digital marketing strategies',
    image: '/api/placeholder/300x200',
    category: 'templates'
  },
  {
    id: '2',
    name: 'WordPress Theme Bundle',
    slug: 'wordpress-theme-bundle',
    price: 49.99,
    description: 'Premium WordPress themes for any niche',
    image: '/api/placeholder/300x200',
    category: 'themes'
  },
  {
    id: '3',
    name: 'SEO Course',
    slug: 'seo-course',
    price: 99.99,
    description: 'Master SEO with our comprehensive course',
    image: '/api/placeholder/300x200',
    category: 'courses'
  },
  {
    id: '4',
    name: 'Email Template Pack',
    slug: 'email-template-pack',
    price: 19.99,
    description: 'Professional email templates for business',
    image: '/api/placeholder/300x200',
    category: 'templates'
  },
  {
    id: '5',
    name: 'Social Media Templates',
    slug: 'social-media-templates',
    price: 39.99,
    description: 'Ready-to-use social media templates',
    image: '/api/placeholder/300x200',
    category: 'templates'
  },
  {
    id: '6',
    name: 'Video Editing Assets',
    slug: 'video-editing-assets',
    price: 79.99,
    description: 'Professional video editing tools and assets',
    image: '/api/placeholder/300x200',
    category: 'tools'
  }
]

const categories = ['all', 'templates', 'themes', 'courses', 'tools']

export default function StorePage({ params }: { params: { store: string } }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [cartCount, setCartCount] = useState(0)

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen" style={{ backgroundColor: store.theme.backgroundColor, color: store.theme.textColor }}>
      {/* Store Header */}
      <header className="border-b" style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold hover:opacity-80">
                {params.store}
              </Link>
              <span className="text-sm opacity-75">• {store.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64"
              />
              <Link href="/cart" className="relative">
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  🛒
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
              </Link>
              <Link href="/signin">
                <Button variant="outline" size="sm">Sign In</Button>
              </Link>
            </div>
          </div>
        </header>
      </header>

      {/* Store Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle style={{ color: store.theme.primaryColor }}>Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-md capitalize transition-colors ${
                      selectedCategory === category
                        ? 'text-white'
                        : 'hover:bg-gray-100'
                    }`}
                    style={{
                      backgroundColor: selectedCategory === category ? store.theme.primaryColor : 'transparent',
                      color: selectedCategory === category ? 'white' : store.theme.textColor
                    }}
                  >
                    {category}
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Store Info */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>About Store</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">{store.description}</p>
                <div className="space-y-2">
                  <Button className="w-full" style={{ backgroundColor: store.theme.primaryColor }} asChild>
                    <Link href={`/${params.store}/products`}>
                      Browse All Products
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl opacity-75">No products found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <div className="aspect-w-16 aspect-h-10 bg-gray-200 rounded-t-lg flex items-center justify-center">
                      <span className="text-4xl text-gray-400">📁</span>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold">${product.price}</span>
                        <span className="text-sm opacity-75">{product.category}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          className="flex-1"
                          style={{ backgroundColor: store.theme.primaryColor }}
                          asChild
                        >
                          <Link href={`/${params.store}/products/${product.slug}`}>
                            View Details
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => setCartCount(cartCount + 1)}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Store Footer */}
      <footer className="border-t mt-12" style={{ backgroundColor: store.theme.primaryColor, color: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">About {params.store}</h4>
              <p className="text-sm opacity-90">
                {store.description}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <div><Link href="/" className="opacity-90 hover:opacity-100">Browse Stores</Link></div>
                <div><Link href={`/stores/create`} className="opacity-90 hover:opacity-100">Create Your Store</Link></div>
                <div><Link href="/help" className="opacity-90 hover:opacity-100">Help Center</Link></div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">SellSpace</h4>
              <div className="text-sm opacity-90">
                <p>Powered by SellSpace - Your Digital Marketplace Platform</p>
                <p>0% fees • Multiple payment methods • Global reach</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}