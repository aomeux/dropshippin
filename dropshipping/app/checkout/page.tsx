"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, CreditCard, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

export default function CheckoutPage() {
  const [isProcessing, setIsProcessing] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      toast({
        title: "Order placed successfully!",
        description: "You will receive a confirmation email shortly.",
      })
    }, 2000)
  }

  // Sample cart data - in a real app, this would come from your cart state
  const cartItems = [
    {
      id: "1",
      name: "Wireless Earbuds",
      price: 49.99,
      quantity: 1,
    },
    {
      id: "5",
      name: "Laptop Backpack",
      price: 59.99,
      quantity: 1,
    },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 35 ? 0 : 5.99
  const tax = subtotal * 0.07 // 7% tax rate
  const total = subtotal + shipping + tax

  return (
    <div className="container px-4 py-6 md:py-8">
      <div className="mb-4">
        <Link
          href="/cart"
          className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Cart
        </Link>
      </div>

      <h1 className="text-2xl font-bold tracking-tight">Checkout</h1>

      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              {/* Shipping Information */}
              <div>
                <h2 className="text-xl font-semibold">Shipping Information</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required className="mt-1" />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="state">State / Province</Label>
                    <Input id="state" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input id="postalCode" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" required className="mt-1" />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required className="mt-1" />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Shipping Method */}
              <div>
                <h2 className="text-xl font-semibold">Shipping Method</h2>
                <RadioGroup defaultValue="standard" className="mt-4 space-y-3">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="standard" id="standard" />
                      <Label htmlFor="standard" className="font-normal">
                        Standard Shipping (3-5 business days)
                      </Label>
                    </div>
                    <div>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="express" id="express" />
                      <Label htmlFor="express" className="font-normal">
                        Express Shipping (1-2 business days)
                      </Label>
                    </div>
                    <div>$12.99</div>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              {/* Payment Method */}
              <div>
                <h2 className="text-xl font-semibold">Payment Method</h2>
                <Tabs defaultValue="card" className="mt-4">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="card">Credit Card</TabsTrigger>
                    <TabsTrigger value="paypal">PayPal</TabsTrigger>
                  </TabsList>
                  <TabsContent value="card" className="mt-4 space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" required className="mt-1" />
                      </div>
                      <div className="sm:col-span-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <div className="mt-1 flex items-center rounded-md border">
                          <Input id="cardNumber" placeholder="0000 0000 0000 0000" required className="border-0" />
                          <div className="flex items-center space-x-2 px-3">
                            <CreditCard className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="expiration">Expiration Date</Label>
                        <Input id="expiration" placeholder="MM/YY" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" required className="mt-1" />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="paypal" className="mt-4">
                    <div className="rounded-lg border p-4 text-center">
                      <p>You will be redirected to PayPal to complete your purchase securely.</p>
                      <Button className="mt-4" type="button">
                        Continue with PayPal
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your payment information is secure. We use encryption to protect your data.
                </p>
              </div>

              <div className="md:hidden">
                <Button className="w-full" type="submit" disabled={isProcessing}>
                  {isProcessing ? "Processing..." : `Pay $${total.toFixed(2)}`}
                </Button>
              </div>
            </div>
          </form>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>
                {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit" form="checkout-form" disabled={isProcessing}>
                {isProcessing ? "Processing..." : `Pay $${total.toFixed(2)}`}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
