import Link from "next/link"
import { Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container px-4 py-6 md:py-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">All Products</h1>
            <div className="flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Filter className="h-4 w-4" />
                    <span className="hidden sm:inline">Filters</span>
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Narrow down products by applying filters</SheetDescription>
                  </SheetHeader>
                  <div className="py-6 space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Categories</h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div key={category.id} className="flex items-center space-x-2">
                            <Checkbox id={`category-${category.id}`} />
                            <label
                              htmlFor={`category-${category.id}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {category.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">Price Range</h3>
                        <span className="text-sm text-gray-500">$0 - $200</span>
                      </div>
                      <Slider defaultValue={[0, 200]} max={200} step={1} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Ratings</h3>
                      <div className="space-y-2">
                        {ratings.map((rating) => (
                          <div key={rating.value} className="flex items-center space-x-2">
                            <Checkbox id={`rating-${rating.value}`} />
                            <label
                              htmlFor={`rating-${rating.value}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {rating.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline">Reset</Button>
                      <Button>Apply Filters</Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input type="search" placeholder="Search products..." className="w-full pl-8 md:w-[300px]" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id} className="group">
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                    {product.badge && (
                      <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-xs font-medium rounded">
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <div className="font-bold">${product.price.toFixed(2)}</div>
                    <Button variant="secondary" size="sm">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" disabled>
                <span className="sr-only">Previous page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                4
              </Button>
              <Button variant="outline" size="sm">
                5
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">Next page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample data - in a real app, this would come from an API or database
const allProducts = [
  {
    id: "1",
    name: "Wireless Earbuds",
    description: "Premium wireless earbuds with noise cancellation and long battery life.",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "Track your fitness, receive notifications, and more with this stylish smart watch.",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: "New",
  },
  {
    id: "3",
    name: "Phone Holder",
    description: "Universal phone holder for car dashboard with strong suction cup.",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: null,
  },
  {
    id: "4",
    name: "Portable Charger",
    description: "10,000mAh portable charger with fast charging capability for all devices.",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: null,
  },
  {
    id: "5",
    name: "Laptop Backpack",
    description: "Water-resistant backpack with USB charging port and anti-theft design.",
    price: 59.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Popular",
  },
  {
    id: "6",
    name: "Bluetooth Speaker",
    description: "Waterproof bluetooth speaker with 24-hour battery life and deep bass.",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: null,
  },
  {
    id: "7",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with adjustable DPI and silent clicks.",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: null,
  },
  {
    id: "8",
    name: "LED Desk Lamp",
    description: "Adjustable LED desk lamp with multiple brightness levels and color temperatures.",
    price: 34.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: null,
  },
  {
    id: "9",
    name: "Fitness Tracker",
    description: "Waterproof fitness tracker with heart rate monitor and sleep tracking.",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: null,
  },
  {
    id: "10",
    name: "Wireless Keyboard",
    description: "Slim wireless keyboard with backlit keys and long battery life.",
    price: 44.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: null,
  },
  {
    id: "11",
    name: "Phone Case",
    description: "Shockproof phone case with card holder for iPhone and Samsung models.",
    price: 14.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: null,
  },
  {
    id: "12",
    name: "Wireless Charger",
    description: "Fast wireless charger compatible with all Qi-enabled devices.",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: null,
  },
]

const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Home & Kitchen" },
  { id: 3, name: "Fashion" },
  { id: 4, name: "Beauty & Health" },
  { id: 5, name: "Sports & Outdoors" },
]

const ratings = [
  { value: 4, label: "4 Stars & Up" },
  { value: 3, label: "3 Stars & Up" },
  { value: 2, label: "2 Stars & Up" },
  { value: 1, label: "1 Star & Up" },
]
