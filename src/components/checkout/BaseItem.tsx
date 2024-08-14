import React from "react"
import Image from "next/image"

const BaseItem = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[10px]">
        <Image
          src="https://started-bucket.s3.us-east-2.amazonaws.com/figma-to-code/challenge-2/MN-K-SOLO-SWSH-SS-HW-TOP1.png"
          width={500}
          height={500}
          alt=""
          className="lg:size-18 size-11 rounded-lg object-cover md:size-[70px]"
        />
        <p className="">
          <span className="block text-xs font-semibold text-gray-900 md:text-sm">T-Shirt</span>
          <span className="block text-xs font-medium text-gray-300">Color: Green - Size: Large</span>
        </p>
      </div>
      <span className="text-xs font-semibold text-gray-900 md:text-sm">$174.00</span>
    </div>
  )
}

export default BaseItem
