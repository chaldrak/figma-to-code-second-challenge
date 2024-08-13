"use client"

import React, { useState } from "react"
import clsx from "clsx"

const QuantityButtons = () => {
  const [quantity, setQuantity] = useState(1)
  return (
    <div className="flex max-w-fit items-center gap-3 rounded-full bg-gray-100 p-2 md:gap-5 md:p-3">
      <button
        disabled={quantity === 1}
        className={clsx(
          "flex size-4 items-center justify-center rounded-full border border-gray-900 text-center font-medium text-gray-900 disabled:border-gray-300 disabled:text-gray-300 md:size-6",
          quantity === 1 ? "cursor-not-allowed" : "cursor-pointer hover:bg-gray-900 hover:text-white"
        )}
        onClick={() => setQuantity((v) => v - 1)}
      >
        <span className="text-xs md:text-base">-</span>
      </button>
      <span className="text-sm font-medium text-gray-900">{quantity}</span>
      <button
        className="flex size-4 items-center justify-center rounded-full border border-gray-900 text-center text-gray-900 hover:bg-gray-900 hover:text-white md:size-6"
        onClick={() => setQuantity((v) => v + 1)}
      >
        <span className="text-xs md:text-base">+</span>
      </button>
    </div>
  )
}

export default QuantityButtons
