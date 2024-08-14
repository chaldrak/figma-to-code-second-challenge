"use client"

import React from "react"
import Image from "next/image"

import TrashIcon from "@/assets/icons/trash.svg"
import TrashBlackIcon from "@/assets/icons/trash-black.svg"

import QuantityButtons from "./QuantityButtons"

const CartDetails = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h3 className="font-chillax text-lg font-semibold text-gray-900 md:text-2xl">Cart(3)</h3>
        <button className="flex shrink-0 items-center gap-1 rounded-full bg-gray-100 px-3 py-2 text-gray-300 hover:bg-red-300">
          <Image src={TrashIcon} alt="Trash Icon" width={500} height={500} className="size-4" />
          <span className="text-xs font-medium md:text-sm">Clear Cart</span>
        </button>
      </div>

      <table className="mt-5 w-full">
        <thead>
          <tr>
            <th className="w-1/3 border-b border-gray-100 py-3 text-left text-xs font-medium text-gray-300 md:w-auto">
              Product
            </th>
            <th className="border-b border-gray-100 text-center text-xs font-medium text-gray-300 md:w-auto">
              Quantity
            </th>
            <th className="border-b border-gray-100 text-right text-xs font-medium text-gray-300 md:w-auto">Price</th>
          </tr>
        </thead>
        <tbody>
          {Array(3)
            .fill(0)
            .map((_, idx) => (
              <tr key={idx}>
                <td className="border-b border-gray-100 py-5 text-left">
                  <div className="flex items-center gap-3">
                    <Image
                      src="https://started-bucket.s3.us-east-2.amazonaws.com/figma-to-code/challenge-2/JORDAN-TATUM.png"
                      width={500}
                      height={500}
                      alt=""
                      className="lg:size-18 size-[45px] shrink-0 rounded-lg object-cover md:size-[70px]"
                    />
                    <div className="w-2/3 md:w-full md:space-y-1">
                      <span className="block truncate whitespace-nowrap text-xs font-semibold text-gray-900 md:text-sm">
                        Tatum 2 &quot;Red Cement&quot;
                      </span>
                      <span className="block whitespace-nowrap text-xs font-medium text-gray-300">Size: 15</span>
                      <span className="block text-xs font-semibold text-gray-900 md:text-sm">$100</span>
                    </div>
                  </div>
                </td>
                <td className="border-b border-gray-100 py-5 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <QuantityButtons />
                    <button className="max-w-fit shrink-0 rounded-full bg-gray-100 p-2 hover:bg-red-300 md:p-3">
                      <Image
                        src={TrashBlackIcon}
                        width={500}
                        height={500}
                        alt="Trash Icon"
                        className="size-4 md:size-6"
                      />
                    </button>
                  </div>
                </td>
                <td className="border-b border-gray-100 py-5 text-right">
                  <span className="text-xs font-semibold text-gray-900 md:text-sm">$250.00</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default CartDetails
