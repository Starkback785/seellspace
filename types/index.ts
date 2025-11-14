import { User, Store, Product, Order, Customer, Analytics } from '@prisma/client'

export type {
  User,
  Store,
  Product,
  Order,
  Customer,
  Analytics,
  ProductStatus,
  OrderStatus,
  PaymentStatus,
  CouponType
} from '@prisma/client'

// Enhanced types with relationships
export type StoreWithProducts = Store & {
  products: Product[]
  _count: {
    products: number
    orders: number
  }
}

export type ProductWithStore = Product & {
  store: Store
  variants: ProductVariant[]
  files: ProductFile[]
}

export type ProductWithVariant = Product & {
  store: Store
  variants: ProductVariant[]
}

export type OrderWithItems = Order & {
  items: OrderItem[]
  store: Store
}

export type OrderItemWithProduct = OrderItem & {
  product: Product
  variant?: ProductVariant | null
}

export type ProductVariant = {
  id: string
  productId: string
  name: string
  value: string
  priceAdjust: number
  inventory: number
  sku?: string | null
}

export type ProductFile = {
  id: string
  productId: string
  name: string
  url: string
  size: number
  type: string
  isActive: boolean
}

export type StoreTheme = {
  id: string
  storeId: string
  primaryColor: string
  secondaryColor: string
  backgroundColor: string
  textColor: string
  logo?: string | null
  favicon?: string | null
  backgroundImage?: string | null
  customCSS?: string | null
}

export type StoreSettings = {
  id: string
  storeId: string
  currency: string
  allowCoupons: boolean
  enableGuestCheckout: boolean
  emailNotifications: boolean
  supportEmail?: string | null
  socialLinks?: Record<string, string> | null
  seo?: Record<string, string> | null
}

// API Response types
export type ApiResponse<T> = {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export type PaginatedResponse<T> = ApiResponse<{
  items: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}>

// Form types
export type CreateStoreData = {
  name: string
  slug: string
  subdomain: string
  description?: string
}

export type CreateProductData = {
  name: string
  slug: string
  description?: string
  price: number
  comparePrice?: number
  category?: string
  tags?: string[]
  variants?: Omit<ProductVariant, 'id' | 'productId' | 'createdAt' | 'updatedAt'>[]
  files?: Omit<ProductFile, 'id' | 'productId' | 'createdAt' | 'updatedAt'>[]
}

export type UpdateProductData = Partial<CreateProductData> & {
  id: string
}

export type CheckoutData = {
  items: {
    productId: string
    variantId?: string
    quantity: number
  }[]
  customer: {
    email: string
    name?: string
  }
  couponCode?: string
}

// Dashboard analytics types
export type DashboardStats = {
  revenue: {
    total: number
    change: number
  }
  orders: {
    total: number
    change: number
  }
  customers: {
    total: number
    change: number
  }
  products: {
    total: number
    change: number
  }
}

export type ChartData = {
  date: string
  revenue: number
  orders: number
  customers: number
}