import React from "react"

import HeaderLayout from "@/components/layouts/HeaderLayout"
import ListProducts from "@/components/product/ListProducts"

const ProductPage = ({ params: { productId } }: { params: { productId: string } }) => {
  return (
    <main className="min-h-screen bg-white">
      <HeaderLayout>
        <div className="mx-auto mb-24 mt-[76px] max-w-7xl">
          <h1 className="text-4xl font-bold text-gray-900">Product {productId}</h1>
          <ListProducts />
        </div>
      </HeaderLayout>
    </main>
  )
}

export default ProductPage
