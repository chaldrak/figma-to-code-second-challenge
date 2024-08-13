import React from "react"

import CheckoutLeftSide from "@/components/checkout/CheckoutLeftSide"
import CheckoutRightSide from "@/components/checkout/CheckoutRightSide"
import HeaderLayout from "@/components/layouts/HeaderLayout"

const CheckoutPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeaderLayout>
        <div className="mx-5 max-w-7xl pb-[104px] pt-[62px] md:mx-[46px] lg:mx-auto">
          <h3 className="mb-5 font-chillax text-lg font-semibold text-gray-900 md:text-2xl">Checkout</h3>
          <div className="flex size-full flex-col items-start justify-between gap-10 lg:flex-row">
            <CheckoutLeftSide />
            <CheckoutRightSide />
          </div>
        </div>
      </HeaderLayout>
    </main>
  )
}

export default CheckoutPage
