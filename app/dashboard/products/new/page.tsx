'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function NewProductPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    price: '',
    category: '',
    tags: '',
    status: 'draft',
    featured: false
  })

  const [files, setFiles] = useState<File[]>([])
  const [variants, setVariants] = useState([
    { name: 'Size', value: 'Medium' }
  ])

  const handleSave = () => {
    // Save product logic here
    console.log('Saving product:', { formData, files, variants })
    router.push('/dashboard/products')
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const addVariant = () => {
    setVariants([...variants, { name: '', value: '' }])
  }

  const updateVariant = (index: number, field: string, value: string) => {
    const updatedVariants = [...variants]
    updatedVariants[index] = { ...updatedVariants[index], [field]: value }
    setVariants(updatedVariants)
  }

  const removeVariant = (index: number) => {
    setVariants(variants.filter((_, i) => i !== index))
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">New Product</h1>
          <p className="text-gray-600">Add a new digital product to your store</p>
        </div>
        <div className="space-x-3">
          <Button variant="outline" onClick={() => router.push('/dashboard/products')}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-brand-500 hover:bg-brand-600">
            Create Product
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Product Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Essential details about your product</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="name">Product Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Digital Marketing Guide"
                  required
                />
              </div>

              <div>
                <Label htmlFor="slug">URL Slug *</Label>
                <div className="flex space-x-3">
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData({...formData, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-')})}
                    placeholder="digital-marketing-guide"
                    required
                  />
                  <div className="flex items-center text-sm text-gray-500">
                    /product
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Unique identifier for your product URL
                </p>
              </div>

              <div>
                <Label htmlFor="price">Price *</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    placeholder="29.99"
                    className="pl-8"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="">Select a category</option>
                  <option value="templates">Templates</option>
                  <option value="courses">Courses</option>
                  <option value="ebooks">Ebooks</option>
                  <option value="software">Software</option>
                  <option value="graphics">Graphics</option>
                  <option value="music">Music</option>
                  <option value="video">Video</option>
                </select>
              </div>

              <div>
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData({...formData, tags: e.target.value})}
                  placeholder="marketing, seo, digital"
                />
                <p className="text-xs text-gray-600 mt-1">
                  Separate tags with commas
                </p>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Describe your product in detail..."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 h-32"
                />
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                  className="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                />
                <Label htmlFor="featured" className="text-sm font-medium">
                  Featured Product
                </Label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* File Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Product Files</CardTitle>
              <CardDescription>Upload your digital files</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    accept=".pdf,.zip,.rar,.jpg,.png,.mp4,.mp3"
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="space-y-2">
                      <div className="text-4xl text-gray-400">📁</div>
                      <div className="text-lg font-medium text-gray-900">
                        Click to upload files
                      </div>
                      <div className="text-sm text-gray-600">
                        PDF, ZIP, images, video, audio files
                      </div>
                    </div>
                  </label>
                </div>

                {files.length > 0 && (
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Uploaded Files:</Label>
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                        <div className="text-sm">
                          <div className="font-medium">{file.name}</div>
                          <div className="text-gray-600">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setFiles(files.filter((_, i) => i !== index))
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Product Variants */}
          <Card>
            <CardHeader>
              <CardTitle>Product Variants</CardTitle>
              <CardDescription>Options like size, color, etc.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {variants.map((variant, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex space-x-3">
                      <Input
                        placeholder="Option name (e.g., Size)"
                        value={variant.name}
                        onChange={(e) => updateVariant(index, 'name', e.target.value)}
                        className="flex-1"
                      />
                      <Input
                        placeholder="Value (e.g., Medium)"
                        value={variant.value}
                        onChange={(e) => updateVariant(index, 'value', e.target.value)}
                        className="flex-1"
                      />
                      {variants.length > 1 && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeVariant(index)}
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                  </div>
                ))}

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={addVariant}
                >
                  Add Variant
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}