import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

// Mock stores data
const stores = [
  {
    id: '1',
    name: 'Amazing Digital Store',
    subdomain: 'amazing-digital',
    description: 'Premium digital products for creators and entrepreneurs',
    products: 45,
    category: 'templates',
    rating: 4.8,
    theme: { primaryColor: '#0ea5e9' }
  },
  {
    id: '2',
    name: 'Creative Assets Hub',
    subdomain: 'creative-assets',
    description: 'High-quality graphics and design resources',
    products: 128,
    category: 'graphics',
    rating: 4.9,
    theme: { primaryColor: '#10b981' }
  },
  {
    id: '3',
    name: 'Learn Academy',
    subdomain: 'learn-academy',
    description: 'Online courses and educational content',
    products: 23,
    category: 'courses',
    rating: 4.6,
    theme: { primaryColor: '#8b5cf6' }
  },
  {
    id: '4',
    name: 'DevTools Pro',
    subdomain: 'devtools-pro',
    description: 'Professional development tools and scripts',
    products: 67,
    category: 'software',
    rating: 4.7,
    theme: { primaryColor: '#f59e0b' }
  },
  {
    id: '5',
    name: 'Music Marketplace',
    subdomain: 'music-marketplace',
    description: 'Digital music, samples, and audio assets',
    products: 89,
    category: 'music',
    rating: 4.9,
    theme: { primaryColor: '#dc2626' }
  },
  {
    id: '6',
    name: 'Video Creators Store',
    subdomain: 'video-creators',
    description: 'Video templates and editing resources',
    products: 156,
    category: 'video',
    rating: 5.0,
    theme: { primaryColor: '#059669' }
  }
]

const categories = ['all', 'templates', 'graphics', 'courses', 'software', 'music', 'video']

export default function StoresPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('popular')

  const filteredStores = stores.filter(store => {
    const matchesCategory = selectedCategory === 'all' || store.category === selectedCategory
    const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         store.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubdomain = store.subdomain.includes(searchTerm.toLowerCase())
    return matchesCategory && (matchesSearch || matchesSubdomain)
  })

  const sortedStores = [...filteredStores].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return (b.products * b.rating) - (a.products * a.rating)
      case 'rating':
        return b.rating - a.rating
      case 'newest':
        return b.id - a.id
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Amazing Stores
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse thousands of digital marketplaces on SellSpace
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <Input
              placeholder="Search stores or products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
              <option value="name">Alphabetical</option>
            </select>
            <Button variant="brand" asChild>
              <Link href="/signin">Create Your Store</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Store Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedStores.map(store => (
            <Card key={store.id} className="hover:shadow-xl transition-shadow cursor-pointer group">
              <Link href={`/${store.subdomain}`}>
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: store.theme.primaryColor }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl text-white mb-2">🏪</div>
                      <div className="text-white font-bold text-xl">{store.name}</div>
                      <div className="text-white text-sm opacity-90">{store.description}</div>
                    </div>
                  </div>
                </div>
              </Link>

              <CardContent className="pt-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full capitalize">
                      {store.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <div className="text-yellow-400">⭐</div>
                      <span className="text-sm font-medium">{store.rating}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {store.products} products
                  </div>
                </div>

                <Button className="w-full" variant="outline" asChild>
                  <Link href={`/${store.subdomain}`}>
                    Visit Store →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Stores
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 bg-brand-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lg mb-1">Active Stores</div>
                <div className="text-sm opacity-75">Growing daily</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-lg mb-1">Digital Products</div>
                <div className="text-sm opacity-75">Across all categories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$2.5M+</div>
                <div className="text-lg mb-1">Revenue Generated</div>
                <div className="text-sm opacity-75">For store owners</div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Join the SellSpace Community</h3>
              <p className="text-lg mb-6">
                Start selling your digital products in minutes. No fees, no hassle.
              </p>
              <div className="space-x-4">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/features">Learn More</Link>
                </Button>
                <Button size="lg" asChild>
                  <Link href="/auth/signin">Get Started Free</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}