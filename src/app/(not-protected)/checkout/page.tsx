import React from "react"

import CheckoutLeftSide from "@/components/checkout/CheckoutLeftSide"
import CheckoutRightSide from "@/components/checkout/CheckoutRightSide"
import HeaderLayout from "@/components/layouts/HeaderLayout"

const CheckoutPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeaderLayout>
        <div className="mx-auto max-w-7xl pb-[104px] pt-[62px]">
          <h3 className="mb-5 font-chillax text-2xl font-semibold text-gray-900">Checkout</h3>
          <div className="flex size-full items-start justify-between gap-10">
            <CheckoutLeftSide />
            <CheckoutRightSide />
          </div>
        </div>
      </HeaderLayout>
    </main>
  )
}

export default CheckoutPage
