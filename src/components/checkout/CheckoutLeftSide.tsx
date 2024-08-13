"use client"

import React, { useState } from "react"
import Link from "next/link"

import { shippings } from "@/constants/methods"

import BaseButton from "../common/BaseButton"
import BaseRadio from "../common/BaseRadio"

import BaseItem from "./BaseItem"

const CheckoutLeftSide = () => {
  const [shipping, setShipping] = useState(shippings.at(0)?.label)
  return (
    <div className="w-full lg:w-[600px]">
      <div>
        <h3 className="text-sm font-semibold text-gray-900">Your Order</h3>

        <p className="text-xs font-medium text-gray-300">
          By placing your order, you agree to Ballamas{" "}
          <Link href="#" className="text-gray-900 underline">
            Privacy
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-gray-900 underline">
            Policy
          </Link>
          .
        </p>

        <div className="mt-4 space-y-3">
          {Array(3)
            .fill(0)
            .map((_, idx) => (
              <BaseItem key={idx} />
            ))}
        </div>

        <div className="mt-6 text-xs font-medium text-gray-900">
          <span className="mb-1 block">Discount Code</span>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Add discount code"
              className="placeholder:text-medium w-full rounded-full border border-gray-900 bg-white p-[14px] placeholder:text-xs placeholder:text-gray-900 md:w-1/2"
            />
            <BaseButton
              title="Apply"
              className="inline-block w-fit bg-gray-900 px-5 py-[14px] font-semibold text-white"
              submit={() => null}
            />
          </div>
          <p className="mt-2 text-xs font-medium text-gray-300">
            <Link href="#" className="font-semibold text-gray-600">
              New customer? <span className="underline">Signup</span>
            </Link>{" "}
            to get better offer
          </p>
        </div>

        <div className="mt-6 space-y-1">
          <p className="flex items-center justify-between text-sm font-medium text-gray-300">
            <span>Subtotal</span>
            <span>$524.00</span>
          </p>
          <p className="flex items-center justify-between border-b border-gray-100 pb-3 text-sm font-medium text-gray-300">
            <span>Discount</span>
            <span>$0</span>
          </p>

          <p className="flex items-center justify-between pt-4 text-sm font-semibold text-gray-900">
            <span>Order total</span>
            <span>$524.00</span>
          </p>
        </div>

        <div className="mt-6 space-y-[14px]">
          <h3 className="text-sm font-semibold text-gray-900">Shipping method</h3>
          <div className="mt-[14px] space-y-4">
            {shippings.map((item) => (
              <BaseRadio
                mode="shipping"
                label={item.label}
                value={shipping as string}
                description={item.description}
                price={item.price}
                onChange={setShipping}
                key={item.label}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutLeftSide
