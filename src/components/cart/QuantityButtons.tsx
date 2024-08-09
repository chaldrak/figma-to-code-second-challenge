"use client"

import React, { useState } from "react"
import clsx from "clsx"

const QuantityButtons = () => {
  const [quantity, setQuantity] = useState(1)
  return (
    <div className="flex max-w-fit items-center gap-5 rounded-full bg-gray-100 p-3">
      <button
        disabled={quantity === 1}
        className={clsx(
          "size-6 rounded-full border border-gray-900 text-center font-medium text-gray-900 disabled:border-gray-300 disabled:text-gray-300",
          quantity === 1 ? "cursor-not-allowed" : "cursor-pointer hover:bg-gray-900 hover:text-white"
        )}
        onClick={() => setQuantity((v) => v - 1)}
      >
        -
      </button>
      <span className="text-sm font-medium text-gray-900">{quantity}</span>
      <button
        className="size-6 rounded-full border border-gray-900 text-center text-gray-900 hover:bg-gray-900 hover:text-white"
        onClick={() => setQuantity((v) => v + 1)}
      >
        +
      </button>
    </div>
  )
}

export default QuantityButtons
