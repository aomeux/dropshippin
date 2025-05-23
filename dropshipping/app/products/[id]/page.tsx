"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Heart, Minus, Plus, Share2, ShoppingCart, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const { toast } = useToast()

  // In a real app, you would fetch the product data based on the ID
  // For this example, we'll use a mock product
  const product = {
    id: params.id,
    name: "Wireless Earbuds Pro",
    description:
      "Premium wireless earbuds with active noise cancellation, transparency mode, and up to 24 hours of battery life with the charging case.",
    price: 49.99,
    rating: 4.8,
    reviewCount: 256,
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    colors: ["Black", "White", "Blue"],
    features: [
      "Active Noise Cancellation",
      "Transparency Mode",
      "24-hour Battery Life",
      "Sweat and Water Resistant",
      "Touch Controls",
      "Voice Assistant Compatible",
    ],
    specifications: {
      "Battery Life": "Up to 6 hours (earbuds) / 24 hours (with case)",
      Connectivity: "Bluetooth 5.2",
      Charging: "USB-C and Wireless Charging",
      Weight: "5.4g per earbud, 45g charging case",
      Compatibility: "iOS, Android, Windows, macOS",
    },
    stock: 15,
    shipping: "Free shipping on orders over $35",
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart`,
    })
  }

  return (
    <div className="container px-4 py-6 md:py-8">
      <div className="mb-4">
        <Link
          href="/products"
          className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Products
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-white dark:bg-gray-950">
            <img
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg border bg-white dark:bg-gray-950">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div>
            <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">In stock: {product.stock} units</p>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 text-sm font-medium">Color</h3>
            <div className="flex space-x-2">
              {product.colors.map((color) => (
                <Button key={color} variant="outline" size="sm">
                  {color}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium">Quantity</h3>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" onClick={decreaseQuantity} disabled={quantity <= 1}>
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={increaseQuantity} disabled={quantity >= product.stock}>
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <Button className="flex-1" onClick={addToCart}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex items-center">
              <Truck className="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm">{product.shipping}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <div className="mt-4 rounded-lg border p-6">
            <TabsContent value="description">
              <h3 className="text-lg font-medium">Product Description</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{product.description}</p>
            </TabsContent>
            <TabsContent value="features">
              <h3 className="text-lg font-medium">Key Features</h3>
              <ul className="mt-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="specifications">
              <h3 className="text-lg font-medium">Technical Specifications</h3>
              <div className="mt-2 space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-1 gap-1 sm:grid-cols-3">
                    <div className="font-medium">{key}</div>
                    <div className="text-gray-700 dark:text-gray-300 sm:col-span-2">{value}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews">
              <h3 className="text-lg font-medium">Customer Reviews</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                This product has {product.reviewCount} reviews with an average rating of {product.rating} out of 5
                stars.
              </p>
              {/* In a real app, you would display actual reviews here */}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
