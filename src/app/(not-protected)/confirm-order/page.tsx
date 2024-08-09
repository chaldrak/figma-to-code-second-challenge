import React from "react"
import Image from "next/image"

import CheckCircleIcon from "@/assets/icons/check.svg"
import HeaderLayout from "@/components/layouts/HeaderLayout"

const ProductPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeaderLayout>
        <div className="mx-auto max-w-7xl pt-[146px]">
          <div className="flex size-full flex-col items-center justify-center text-center">
            <Image src={CheckCircleIcon} alt="Check Icon" width={500} height={500} className="size-12" />
            <p className="font-gray-900 mt-[10px] text-lg font-semibold text-gray-900">Thanks for your order !</p>
            <p className="text-xs font-medium text-gray-300">
              The order confirmation has been sent to johndoe@gmail.com
            </p>
          </div>
        </div>
      </HeaderLayout>
    </main>
  )
}

export default ProductPage
