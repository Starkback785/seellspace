'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

// Mock product data
const product = {
  id: '1',
  name: 'Digital Marketing Guide',
  slug: 'digital-marketing-guide',
  price: 29.99,
  description: 'Master digital marketing with our comprehensive guide. Learn SEO, social media, content marketing, and paid advertising strategies that actually work. Perfect for entrepreneurs, marketers, and business owners looking to grow their online presence.',
  image: '/api/placeholder/600x400',
  category: 'templates',
  tags: ['marketing', 'seo', 'digital'],
  featured: true,
  files: [
    { name: 'main-guide.pdf', size: '12.4 MB' },
    { name: 'cheat-sheet.pdf', size: '2.1 MB' },
    { name: 'resources.zip', size: '8.7 MB' }
  ],
  variants: [
    { name: 'Format', options: ['PDF', 'eBook', 'Video Course'] },
    { name: 'License', options: ['Personal', 'Commercial', 'Extended'] }
  ],
  createdAt: '2024-01-15'
}

// Mock store data
const store = {
  name: 'Amazing Digital Store',
  theme: {
    primaryColor: '#0ea5e9',
    backgroundColor: '#ffffff',
    textColor: '#1e293b'
  }
}

export default function ProductPage() {
  const params = useParams()
  const [selectedVariant, setSelectedVariant] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [showCheckoutModal, setShowCheckoutModal] = useState(false)

  const handleAddToCart = () => {
    // Add to cart logic
    console.log('Adding to cart:', { product, quantity, variant: selectedVariant })
    setShowCheckoutModal(true)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: store.theme.backgroundColor, color: store.theme.textColor }}>
      {/* Store Header */}
      <header className="border-b" style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold hover:opacity-80">
                SellSpace
              </Link>
              <Link href={`/${params.store}`} className="hover:opacity-80">
                <span className="text-sm opacity-75">• {store.name}</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href={`/${params.store}/products`} className="hover:opacity-80">
                Products
              </Link>
              <Link href={`/cart`} className="hover:opacity-80">
                🛒 Cart
              </Link>
              <Link href="/signin">
                <Button variant="outline" size="sm">Sign In</Button>
              </Link>
            </div>
          </div>
        </header>
      </header>

      {/* Product Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image & Basic Info */}
          <div className="space-y-6">
            <div className="aspect-w-16 aspect-h-10 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  {product.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                      ⭐ Featured
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>{product.category}</span>
                  <span>•</span>
                  <span>{new Date(product.createdAt).toLocaleDateString()}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">{product.description}</p>

                <div className="flex flex-wrap gap-2">
                  {product.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-center py-4">
                  <div className="text-4xl font-bold" style={{ color: store.theme.primaryColor }}>
                    ${product.price}
                  </div>
                  <p className="text-sm text-gray-600">One-time payment</p>
                </div>
              </CardContent>
            </Card>

            {/* Product Files */}
            <Card>
              <CardHeader>
                <CardTitle>📁 What You'll Get</CardTitle>
                <CardDescription>Instant digital download after purchase</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {product.files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-brand-100 rounded flex items-center justify-center">
                          <span className="text-brand-600 text-sm">📄</span>
                        </div>
                        <div>
                          <div className="font-medium">{file.name}</div>
                          <div className="text-sm text-gray-600">{file.size}</div>
                        </div>
                      </div>
                      <div className="text-green-600 text-sm font-medium">
                        ✓ Included
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Purchase Options */}
          <div className="space-y-6">
            {/* Variants */}
            <Card>
              <CardHeader>
                <CardTitle>🎯 Options</CardTitle>
                <CardDescription>Customize your purchase</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {product.variants.map(variant => (
                  <div key={variant.name} className="space-y-2">
                    <Label className="font-medium">{variant.name}</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {variant.options.map(option => (
                        <button
                          key={option}
                          onClick={() => setSelectedVariant({...selectedVariant, [variant.name]: option})}
                          className={`p-3 border rounded-md text-left transition-colors ${
                            selectedVariant[variant.name] === option
                              ? 'border-brand-500 bg-brand-50 text-brand-900'
                              : 'border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quantity */}
            <Card>
              <CardHeader>
                <CardTitle>📦 Quantity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <Input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-20 text-center"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Add to Cart */}
            <Card>
              <CardContent className="pt-6">
                <Button
                  onClick={handleAddToCart}
                  className="w-full text-lg py-4"
                  style={{ backgroundColor: store.theme.primaryColor }}
                >
                  🛒 Add to Cart - ${(product.price * quantity).toFixed(2)}
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Instant access • No account required • 30-day money back guarantee
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Related Products</CardTitle>
            <CardDescription>You might also like these</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="text-center">
                  <div className="aspect-w-16 aspect-h-10 bg-gray-200 rounded-lg mb-3"></div>
                  <div className="text-sm font-medium">Related Product {i}</div>
                  <div className="text-lg font-bold">$19.99</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}