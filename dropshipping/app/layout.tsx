import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ShoppingCart, User, Menu } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BBI4 - Premium Online Shopping",
  description: "Shop the latest products with fast shipping and excellent customer service.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2 md:gap-4">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0">
                      <div className="px-7">
                        <Link href="/" className="flex items-center">
                          <span className="font-bold text-xl">BBI4</span>
                        </Link>
                      </div>
                      <nav className="flex flex-col gap-4 px-2 mt-6">
                        <Link href="/" className="block px-3 py-2 text-lg font-medium">
                          Home
                        </Link>
                        <Link href="/products" className="block px-3 py-2 text-lg font-medium">
                          Products
                        </Link>
                      </nav>
                    </SheetContent>
                  </Sheet>
                  <Link href="/" className="flex items-center space-x-2">
                    <span className="hidden font-bold sm:inline-block text-xl">BBI4</span>
                  </Link>
                </div>
                <nav className="hidden md:flex items-center gap-6 text-sm">
                  <Link href="/" className="font-medium transition-colors hover:text-primary">
                    Home
                  </Link>
                  <Link href="/products" className="font-medium transition-colors hover:text-primary">
                    Products
                  </Link>
                </nav>
                <div className="flex items-center gap-2">
                  <Link href="/cart">
                    <Button variant="ghost" size="icon" className="relative">
                      <ShoppingCart className="h-5 w-5" />
                      <span className="sr-only">Cart</span>
                      <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                        0
                      </span>
                    </Button>
                  </Link>
                  <Link href="/account">
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                      <span className="sr-only">Account</span>
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button variant="outline" size="sm" className="hidden md:flex">
                      Login
                    </Button>
                  </Link>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-10">
              <div className="container flex flex-col gap-4 md:flex-row md:gap-8">
                <div className="flex-1 space-y-4">
                  <div className="text-xl font-bold">BBI4</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Premium online shopping with fast shipping and excellent customer service.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Company</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/about"
                          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/careers"
                          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        >
                          Careers
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Help</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/faq"
                          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        >
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shipping"
                          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        >
                          Shipping
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/returns"
                          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        >
                          Returns
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Legal</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/privacy"
                          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        >
                          Privacy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/terms"
                          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        >
                          Terms
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="container mt-6 md:mt-8">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  © {new Date().getFullYear()} BBI4. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
