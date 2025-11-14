// Crypto payment integration for Bitcoin and Litecoin
export interface CryptoPayment {
  currency: 'BTC' | 'LTC'
  amount: number
  address: string
  qrCode: string
  expiresIn: number
}

export function generateCryptoPayment(amount: number, currency: 'BTC' | 'LTC'): CryptoPayment {
  // In production, this would integrate with real crypto APIs
  const addresses = {
    BTC: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    LTC: 'LMaT7yYC7MZXG1HQgHgKzShy5n9vJ9q'
  }

  const rates = {
    BTC: 43250, // 1 BTC = $43,250 USD
    LTC: 72.5   // 1 LTC = $72.50 USD
  }

  const cryptoAmount = amount / rates[currency]

  // Generate QR code URL (in production, use actual QR code generation)
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${addresses[currency]}?amount=${cryptoAmount}`

  return {
    currency,
    amount: cryptoAmount,
    address: addresses[currency],
    qrCode: qrCodeUrl,
    expiresIn: 900 // 15 minutes
  }
}

export function verifyCryptoPayment(address: string, expectedAmount: number, currency: 'BTC' | 'LTC'): boolean {
  // In production, this would check blockchain for transactions
  // For demo purposes, we'll simulate verification
  return Math.random() > 0.3 // 70% success rate for demo
}

export function getCryptoRates() {
  return {
    BTC: 43250,
    LTC: 72.5
  }
}