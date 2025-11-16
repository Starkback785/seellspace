import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ApiDocsPage() {
  const endpoints = [
    {
      category: 'Shops',
      methods: [
        {
          method: 'GET',
          endpoint: '/api/v1/shops',
          description: 'List all user shops',
          example: `curl -H "Authorization: Bearer YOUR_TOKEN" https://api.sellspace.com/api/v1/shops`
        },
        {
          method: 'POST',
          endpoint: '/api/v1/shops',
          description: 'Create new shop',
          example: `curl -X POST -H "Authorization: Bearer YOUR_TOKEN" -H "Content-Type: application/json" -d '{"name":"My Store","subdomain":"my-store"}' https://api.sellspace.com/api/v1/shops`
        }
      ]
    },
    {
      category: 'Products',
      methods: [
        {
          method: 'GET',
          endpoint: '/api/v1/products',
          description: 'List products with pagination',
          example: `curl -H "Authorization: Bearer YOUR_TOKEN" https://api.sellspace.com/api/v1/products?page=1&limit=20`
        },
        {
          method: 'POST',
          endpoint: '/api/v1/products',
          description: 'Create new product',
          example: `curl -X POST -H "Authorization: Bearer YOUR_TOKEN" -H "Content-Type: application/json" -d '{"name":"My Product","price":29.99}' https://api.sellspace.com/api/v1/products`
        },
        {
          method: 'PUT',
          endpoint: '/api/v1/products/{id}',
          description: 'Update existing product',
          example: `curl -X PUT -H "Authorization: Bearer YOUR_TOKEN" -H "Content-Type: application/json" -d '{"price":39.99}' https://api.sellspace.com/api/v1/products/123`
        },
        {
          method: 'DELETE',
          endpoint: '/api/v1/products/{id}',
          description: 'Delete product',
          example: `curl -X DELETE -H "Authorization: Bearer YOUR_TOKEN" https://api.sellspace.com/api/v1/products/123`
        }
      ]
    },
    {
      category: 'Orders',
      methods: [
        {
          method: 'GET',
          endpoint: '/api/v1/orders',
          description: 'List orders with filters',
          example: `curl -H "Authorization: Bearer YOUR_TOKEN" https://api.sellspace.com/api/v1/orders?status=completed`
        },
        {
          method: 'GET',
          endpoint: '/api/v1/orders/{id}',
          description: 'Get order details',
          example: `curl -H "Authorization: Bearer YOUR_TOKEN" https://api.sellspace.com/api/v1/orders/ORD-123`
        }
      ]
    },
    {
      category: 'Analytics',
      methods: [
        {
          method: 'GET',
          endpoint: '/api/v1/analytics/revenue',
          description: 'Get revenue analytics',
          example: `curl -H "Authorization: Bearer YOUR_TOKEN" https://api.sellspace.com/api/v1/analytics/revenue?period=30d`
        },
        {
          method: 'GET',
          endpoint: '/api/v1/analytics/orders',
          description: 'Get order analytics',
          example: `curl -H "Authorization: Bearer YOUR_TOKEN" https://api.sellspace.com/api/v1/analytics/orders?period=30d`
        }
      ]
    }
  ]

  const webhooks = [
    {
      event: 'order.created',
      description: 'Fired when a new order is created',
      payload: {
        order_id: 'string',
        customer_email: 'string',
        total: 'number',
        items: 'array'
      }
    },
    {
      event: 'order.completed',
      description: 'Fired when an order payment is confirmed',
      payload: {
        order_id: 'string',
        payment_method: 'string',
        transaction_id: 'string'
      }
    },
    {
      event: 'product.created',
      description: 'Fired when a new product is added',
      payload: {
        product_id: 'string',
        name: 'string',
        price: 'number'
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SellSpace API Documentation</h1>
          <p className="text-xl text-gray-600">
            Complete RESTful API for building your digital marketplace
          </p>
        </div>

        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🚀 Getting Started</CardTitle>
            <CardDescription>Authentication, base URL, and rate limits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Authentication</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-mono bg-gray-100 px-3 py-1 rounded">Authorization: Bearer YOUR_TOKEN</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Include your API token in the Authorization header for all requests.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Base URL</h4>
                  <span className="font-mono bg-gray-100 px-3 py-1 rounded">https://api.sellspace.com</span>
                  <p className="text-sm text-gray-600 mt-1">
                    All API requests should be made to this base URL.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6 mt-6">
              <h4 className="font-medium mb-3">Rate Limits</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Requests per minute:</span>
                  <span className="font-semibold">1000</span>
                </div>
                <div className="flex justify-between">
                  <span>Requests per hour:</span>
                  <span className="font-semibold">60,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Requests per day:</span>
                  <span className="font-semibold">1,440,000</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Rate limits reset at the beginning of each day (00:00 UTC).
              </p>
            </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <Button variant="outline" asChild>
                <a href="#endpoints">View Endpoints</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#webhooks">View Webhooks</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* API Endpoints */}
        <Card id="endpoints" className="mb-8">
          <CardHeader>
            <CardTitle>📡 API Endpoints</CardTitle>
            <CardDescription>Complete list of available API endpoints</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {endpoints.map((category, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-xl font-semibold text-brand-600">{category.category}</h3>
                  <div className="space-y-3">
                    {category.methods.map((method, methodIndex) => (
                      <div key={methodIndex} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                              {method.method}
                            </span>
                            <span className="ml-2 font-medium">{method.endpoint}</span>
                          </div>
                          <Button variant="outline" size="sm">
                            Copy
                          </Button>
                        </div>
                        <p className="text-gray-700 mb-3">{method.description}</p>
                        <div className="bg-gray-900 rounded-md p-4 overflow-x-auto">
                          <pre className="text-green-400 text-sm">
                            <code>{method.example}</code>
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Webhooks */}
        <Card id="webhooks" className="mb-8">
          <CardHeader>
            <CardTitle>🪝 Webhooks</CardTitle>
            <CardDescription>Real-time events sent to your server</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Webhook Events</h3>
                <div className="space-y-4">
                  {webhooks.map((webhook, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-brand-600">{webhook.event}</span>
                        <span className="text-sm text-gray-600">POST</span>
                      </div>
                      <p className="text-gray-700 mb-3">{webhook.description}</p>
                      <div className="bg-gray-900 rounded-md p-4">
                        <div className="text-gray-600 text-sm space-y-2">
                          <div><strong>Event:</strong> {webhook.event}</div>
                          <div><strong>Endpoint:</strong> Your configured webhook URL</div>
                          <div><strong>Authentication:</strong> Sent as POST request with JSON body</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6 mt-6">
                <h3 className="text-lg font-semibold mb-4">Setup Instructions</h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <ol className="space-y-3 text-gray-700">
                    <li>1. Go to your store settings in the dashboard</li>
                    <li>2. Navigate to "Integrations" & "Webhooks"</li>
                    <li>3. Enter your webhook URL and select events to receive</li>
                    <li>4. Save and test your webhook configuration</li>
                  </ol>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Code Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>💻 Code Examples</CardTitle>
            <CardDescription>Sample implementations in popular languages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">JavaScript/Node.js</h4>
                <div className="bg-gray-900 rounded-md p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{`// SellSpace API Client
const apiKey = 'YOUR_API_KEY'

const createOrder = async (orderData) => {
  const response = await fetch('https://api.sellspace.com/api/v1/orders', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${apiKey}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderData)
  })

  const result = await response.json()
  return result
}

// Create new order
const order = await createOrder({
  customer_email: 'customer@example.com',
  total: 29.99,
  items: [
    { product_id: '123', quantity: 1 }
  ]
})`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Python</h4>
                <div className="bg-gray-900 rounded-md p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{`import requests
import json

# SellSpace API Client
class SellSpaceAPI:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = 'https://api.sellspace.com'
        self.headers = {
            'Authorization': f'Bearer {self.api_key}',
            'Content-Type': 'application/json'
        }

    def create_product(self, product_data):
        response = requests.post(
            f'{self.base_url}/api/v1/products',
            headers=self.headers,
            json=product_data
        )
        return response.json()

# Create new product
client = SellSpaceAPI('YOUR_API_KEY')
product = client.create_product({
    'name': 'My Digital Product',
    'price': 29.99,
    'description': 'Amazing product description'
})`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">PHP</h4>
                <div className="bg-gray-900 rounded-md p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{`<?php
// SellSpace API Client
class SellSpaceAPI {
    private $api_key;
    private $base_url = 'https://api.sellspace.com';

    public function __construct($api_key) {
        $this->api_key = $api_key;
    }

    public function createProduct($product_data) {
        $ch = curl_init($this->base_url . '/api/v1/products');

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($product_data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Authorization: Bearer ' . $this->api_key,
            'Content-Type: application/json'
        ]);

        $response = curl_exec($ch);
        curl_close($ch);

        return json_decode($response);
    }
}

// Create new product
$client = new SellSpaceAPI('YOUR_API_KEY');
$product = $client->createProduct([
    'name' => 'My Digital Product',
    'price' => 29.99,
    'description' => 'Amazing product description'
]);`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testing */}
        <Card>
          <CardHeader>
            <CardTitle>🧪 API Testing</CardTitle>
            <CardDescription>Interactive API testing tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">🔧 API Playground</h4>
                  <p className="text-yellow-700">
                    Test API endpoints directly in your browser with our interactive playground.
                  </p>
                  <Button variant="outline" className="mt-3">
                    Open API Playground
                  </Button>
                </div>

                <div className="border-t pt-6 mt-6">
                  <h4 className="font-semibold text-yellow-800 mb-2">📋 Test API Key</h4>
                  <p className="text-yellow-700">
                    Generate and test API keys for development and production.
                  </p>
                  <Button variant="outline" className="mt-3">
                    Generate API Key
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}