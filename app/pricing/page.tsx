import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started with digital sales",
      features: [
        "Up to 10 products",
        "1 store",
        "Basic analytics",
        "Email support",
        "SellSpace branding",
        "Standard themes"
      ],
      notIncluded: [
        "Custom domains",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom CSS",
        "White label"
      ],
      highlighted: false,
      cta: "Start Free"
    },
    {
      name: "Professional",
      price: "$29",
      pricePeriod: "/month",
      description: "For growing creators and businesses",
      features: [
        "Unlimited products",
        "3 stores",
        "Advanced analytics",
        "Priority email support",
        "Custom domains",
        "Premium themes",
        "API access",
        "Custom CSS"
      ],
      notIncluded: [
        "White label",
        "Dedicated support",
        "Custom integrations"
      ],
      highlighted: true,
      cta: "Start Pro Trial"
    },
    {
      name: "Enterprise",
      price: "$99",
      pricePeriod: "/month",
      description: "For large businesses and agencies",
      features: [
        "Everything in Pro",
        "Unlimited stores",
        "White label option",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "Custom contracts",
        "Priority processing"
      ],
      notIncluded: [],
      highlighted: false,
      cta: "Contact Sales"
    }
  ]

  const faq = [
    {
      question: "Do you charge transaction fees?",
      answer: "No! SellSpace never charges transaction fees. You keep 100% of your sales revenue. The only fees you pay are payment processor fees (typically 2.9% + $0.30 for credit cards)."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences in billing."
    },
    {
      question: "What payment methods do you support?",
      answer: "We support all major credit cards, PayPal, Stripe, Apple Pay, Google Pay, and cryptocurrency including Bitcoin and Litecoin."
    },
    {
      question: "Is there a limit on file storage?",
      answer: "Free plans include 1GB of storage. Professional plans include 10GB, and Enterprise plans include unlimited storage with fair use policy."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! All paid plans start with a 14-day free trial. No credit card required to start."
    },
    {
      question: "Can I use my own domain?",
      answer: "Custom domains are available on Professional and Enterprise plans. Free plans use a subdomain (yourstore.sellspace.com)."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-50 to-blue-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your digital business. No hidden fees, no surprises.
          </p>
          <div className="mt-8 flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-gray-700">0% Transaction Fees</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-gray-700">Cancel Anytime</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-gray-700">14-Day Free Trial</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative h-full ${plan.highlighted ? 'ring-2 ring-brand-500 shadow-xl scale-105' : 'hover:shadow-lg'}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.pricePeriod && (
                      <span className="text-gray-600 text-lg">{plan.pricePeriod}</span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}

                    {plan.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start opacity-60">
                        <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full mt-8"
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link href="/auth/signin">
                      {plan.cta}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faq.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-brand-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Selling?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of creators who trust SellSpace to sell their digital products with 0% fees.
          </p>
          <div className="space-x-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/auth/signin">
                Start Free Trial
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-600" asChild>
              <Link href="/features">
                View Features
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}