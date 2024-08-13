"use client"

import React from "react"
import { useRouter } from "next/navigation"

const BasketOrder = () => {
  const router = useRouter()

  return (
    <div className="mx-auto h-fit w-full rounded-xl border border-gray-100 px-6 py-4 md:w-[374px] lg:w-1/3">
      <h3 className="text-lg font-semibold text-gray-900">Order summary</h3>

      <div className="mt-4 space-y-1 border-b border-gray-100 pb-3 text-sm font-medium text-gray-300">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span>$524.00</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Discount</span>
          <span>$0</span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between py-1 font-semibold text-gray-900">
        <span className="text-sm">Order total</span>
        <span className="text-base font-extrabold">$524.00</span>
      </div>

      <button
        className="mt-2 w-full rounded-full bg-gray-900 py-3 text-sm font-semibold text-white"
        type="button"
        onClick={() => router.push("/checkout")}
      >
        Checkout now
      </button>
    </div>
  )
}

export default BasketOrder
