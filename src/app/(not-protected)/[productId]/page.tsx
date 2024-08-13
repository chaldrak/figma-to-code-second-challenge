import React from "react"

import HeaderLayout from "@/components/layouts/HeaderLayout"
import ListProducts from "@/components/product/ListProducts"
import ProductDetails from "@/components/product/ProductDetails"

const ProductPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeaderLayout>
        <div className="mx-5 mb-24 mt-[76px] max-w-7xl md:mx-[46px] lg:mx-auto">
          <ProductDetails />
          <ListProducts />
        </div>
      </HeaderLayout>
    </main>
  )
}

export default ProductPage
