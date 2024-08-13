import React from "react"

import BasketOrder from "@/components/cart/BasketOrder"
import CartDetails from "@/components/cart/CartDetails"
import HeaderLayout from "@/components/layouts/HeaderLayout"

const ProductPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeaderLayout>
        <div className="mx-5 max-w-7xl pb-[104px] pt-[62px] md:mx-[46px] lg:mx-auto">
          <div className="flex size-full flex-col gap-14 lg:flex-row lg:gap-10">
            <CartDetails />
            <BasketOrder />
          </div>
        </div>
      </HeaderLayout>
    </main>
  )
}

export default ProductPage
