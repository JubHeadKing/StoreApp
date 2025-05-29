import { Mail, Phone, MapPin, ShoppingBag } from "lucide-react"
import Image from "next/image"

// Easy to add more products - just add objects to this array
const products = [
  {
    id: 1,
    name: "Classic Leather Handbag",
    price: 0.00,
    category: "Accessories",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Vintage Denim Jacket",
    price: 65.0,
    category: "Clothes",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Gold Chain Necklace",
    price: 45.5,
    category: "Accessories",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Cotton Summer Dress",
    price: 55.99,
    category: "Clothes",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Silk Scarf",
    price: 32.0,
    category: "Accessories",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Wool Sweater",
    price: 78.5,
    category: "Clothes",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 7,
    name: "Silver Bracelet",
    price: 28.99,
    category: "Accessories",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 8,
    name: "Casual T-Shirt",
    price: 24.99,
    category: "Clothes",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function StorePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8" />
              <h1 className="text-2xl font-bold">StyleHub</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#products" className="hover:text-gray-300 transition-colors">
                Products
              </a>
              <a href="#contact" className="hover:text-gray-300 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Discover Your Style</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Premium accessories and clothing for the modern lifestyle. Quality pieces that make a statement.
          </p>
          <a
            href="#products"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Collection</h2>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square relative">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">{product.category}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get in Touch</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">hello@stylehub.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">123 Fashion Street, Style City, SC 12345</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Store Hours</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>12:00 PM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xl font-bold">StyleHub</span>
          </div>
          <p className="text-gray-400">
            © 2024 StyleHub. All rights reserved. | Quality fashion and accessories for everyone.
          </p>
        </div>
      </footer>
    </div>
  )
}
