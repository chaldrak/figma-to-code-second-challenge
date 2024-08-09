import React from "react"

import HeaderLayout from "@/components/layouts/HeaderLayout"
import ListProducts from "@/components/product/ListProducts"
import ProductDetails from "@/components/product/ProductDetails"

const ProductPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeaderLayout>
        <div className="mx-auto mb-24 mt-[76px] max-w-7xl">
          <ProductDetails />
          <ListProducts />
        </div>
      </HeaderLayout>
    </main>
  )
}

export default ProductPage
