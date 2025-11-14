'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general')
  const [storeSettings, setStoreSettings] = useState({
    name: 'My Digital Store',
    subdomain: 'my-store',
    description: 'Amazing digital products for creators and entrepreneurs',
    currency: 'USD',
    supportEmail: 'support@mystore.com',
    allowCoupons: true,
    enableGuestCheckout: true,
    emailNotifications: true
  })

  const [theme, setTheme] = useState({
    primaryColor: '#0ea5e9',
    secondaryColor: '#64748b',
    backgroundColor: '#ffffff',
    textColor: '#1e293b'
  })

  const handleSave = () => {
    // Save settings logic here
    console.log('Saving settings:', { storeSettings, theme })
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Store Settings</h1>
        <p className="text-gray-600">Manage your store configuration and customization</p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {['general', 'theme', 'payments', 'seo', 'advanced'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                activeTab === tab
                  ? 'border-brand-500 text-brand-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* General Settings */}
      {activeTab === 'general' && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Basic information about your store</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="storeName">Store Name</Label>
                <Input
                  id="storeName"
                  value={storeSettings.name}
                  onChange={(e) => setStoreSettings({...storeSettings, name: e.target.value})}
                  placeholder="My Digital Store"
                />
              </div>

              <div>
                <Label htmlFor="subdomain">Subdomain</Label>
                <div className="flex">
                  <Input
                    id="subdomain"
                    value={storeSettings.subdomain}
                    onChange={(e) => setStoreSettings({...storeSettings, subdomain: e.target.value})}
                    placeholder="my-store"
                    className="rounded-r-none"
                  />
                  <div className="flex items-center rounded-r-md bg-gray-100 px-3 text-gray-600 border border-l-0">
                    .sellspace.com
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  This will be your store URL: {storeSettings.subdomain}.sellspace.com
                </p>
              </div>

              <div>
                <Label htmlFor="description">Store Description</Label>
                <textarea
                  id="description"
                  value={storeSettings.description}
                  onChange={(e) => setStoreSettings({...storeSettings, description: e.target.value})}
                  placeholder="Describe what makes your store special..."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 h-20"
                />
              </div>

              <div>
                <Label htmlFor="supportEmail">Support Email</Label>
                <Input
                  id="supportEmail"
                  type="email"
                  value={storeSettings.supportEmail}
                  onChange={(e) => setStoreSettings({...storeSettings, supportEmail: e.target.value})}
                  placeholder="support@mystore.com"
                />
              </div>

              <div>
                <Label htmlFor="currency">Default Currency</Label>
                <select
                  id="currency"
                  value={storeSettings.currency}
                  onChange={(e) => setStoreSettings({...storeSettings, currency: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="CAD">CAD - Canadian Dollar</option>
                  <option value="AUD">AUD - Australian Dollar</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Checkout Settings</CardTitle>
              <CardDescription>Configure how customers purchase from your store</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">Allow Guest Checkout</Label>
                  <p className="text-xs text-gray-600">Let customers purchase without creating an account</p>
                </div>
                <button
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    storeSettings.enableGuestCheckout ? 'bg-brand-600' : 'bg-gray-200'
                  }`}
                  onClick={() => setStoreSettings({...storeSettings, enableGuestCheckout: !storeSettings.enableGuestCheckout})}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      storeSettings.enableGuestCheckout ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">Allow Coupon Codes</Label>
                  <p className="text-xs text-gray-600">Enable discount codes for promotions</p>
                </div>
                <button
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    storeSettings.allowCoupons ? 'bg-brand-600' : 'bg-gray-200'
                  }`}
                  onClick={() => setStoreSettings({...storeSettings, allowCoupons: !storeSettings.allowCoupons})}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      storeSettings.allowCoupons ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">Email Notifications</Label>
                  <p className="text-xs text-gray-600">Send order confirmations to customers</p>
                </div>
                <button
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    storeSettings.emailNotifications ? 'bg-brand-600' : 'bg-gray-200'
                  }`}
                  onClick={() => setStoreSettings({...storeSettings, emailNotifications: !storeSettings.emailNotifications})}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      storeSettings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Theme Settings */}
      {activeTab === 'theme' && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Store Theme</CardTitle>
              <CardDescription>Customize your store's appearance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="primaryColor">Primary Color</Label>
                  <div className="flex space-x-3">
                    <Input
                      id="primaryColor"
                      type="color"
                      value={theme.primaryColor}
                      onChange={(e) => setTheme({...theme, primaryColor: e.target.value})}
                      className="h-10 w-20"
                    />
                    <Input
                      value={theme.primaryColor}
                      onChange={(e) => setTheme({...theme, primaryColor: e.target.value})}
                      placeholder="#0ea5e9"
                      className="flex-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="secondaryColor">Secondary Color</Label>
                  <div className="flex space-x-3">
                    <Input
                      id="secondaryColor"
                      type="color"
                      value={theme.secondaryColor}
                      onChange={(e) => setTheme({...theme, secondaryColor: e.target.value})}
                      className="h-10 w-20"
                    />
                    <Input
                      value={theme.secondaryColor}
                      onChange={(e) => setTheme({...theme, secondaryColor: e.target.value})}
                      placeholder="#64748b"
                      className="flex-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="backgroundColor">Background Color</Label>
                  <div className="flex space-x-3">
                    <Input
                      id="backgroundColor"
                      type="color"
                      value={theme.backgroundColor}
                      onChange={(e) => setTheme({...theme, backgroundColor: e.target.value})}
                      className="h-10 w-20"
                    />
                    <Input
                      value={theme.backgroundColor}
                      onChange={(e) => setTheme({...theme, backgroundColor: e.target.value})}
                      placeholder="#ffffff"
                      className="flex-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="textColor">Text Color</Label>
                  <div className="flex space-x-3">
                    <Input
                      id="textColor"
                      type="color"
                      value={theme.textColor}
                      onChange={(e) => setTheme({...theme, textColor: e.target.value})}
                      className="h-10 w-20"
                    />
                    <Input
                      value={theme.textColor}
                      onChange={(e) => setTheme({...theme, textColor: e.target.value})}
                      placeholder="#1e293b"
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>

              {/* Theme Preview */}
              <div className="mt-8">
                <Label>Theme Preview</Label>
                <div className="mt-3 border border-gray-200 rounded-lg p-6" style={{ backgroundColor: theme.backgroundColor }}>
                  <div className="space-y-4">
                    <div style={{ color: theme.primaryColor }} className="text-lg font-bold">
                      Sample Store Title
                    </div>
                    <div style={{ color: theme.textColor }} className="text-sm">
                      This is how your store will look with the selected theme colors.
                    </div>
                    <button
                      className="px-4 py-2 rounded text-white text-sm font-medium"
                      style={{ backgroundColor: theme.primaryColor }}
                    >
                      Buy Now for $29.99
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Label htmlFor="customCSS">Custom CSS</Label>
                <textarea
                  id="customCSS"
                  placeholder="Add custom CSS to override default styles..."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 h-32 font-mono text-sm"
                />
                <p className="text-xs text-gray-600 mt-1">
                  Add custom CSS for advanced customization. Leave blank to use default styles.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Save Button */}
      <div className="mt-8">
        <Button onClick={handleSave} className="bg-brand-500 hover:bg-brand-600">
          Save Settings
        </Button>
      </div>
    </div>
  )
}