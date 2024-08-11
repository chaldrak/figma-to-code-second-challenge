"use client"

import React, { useState } from "react"

import ArrowRightIcon from "@/assets/icons/arrow-right.svg"
import LockIcon from "@/assets/icons/lock.svg"
import { payments } from "@/constants/methods"

import BaseButton from "../common/BaseButton"
import BaseInput from "../common/BaseInput"
import BaseRadio from "../common/BaseRadio"
import BaseSelect from "../common/BaseSelect"

const CheckoutRightSide = () => {
  const [method, setMethod] = useState(payments.at(0)?.label)
  return (
    <form className="h-fit w-[488px]">
      <div>
        <h3 className="text-sm font-semibold text-gray-900">Payment details</h3>
        <p className="text-xs font-medium text-gray-300">Complete your purchase by providing your payment details.</p>
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-900">Shipping address</h3>
        <div className="mt-3 grid w-full grid-cols-2 gap-x-3 gap-y-2">
          <BaseInput label="First name" placeholder="Enter your first name" type="text" />
          <BaseInput label="Last name" placeholder="Enter your last name" type="text" />
          <BaseInput label="Email address" placeholder="Enter your email address" type="text" />
          <BaseInput label="Phone number" placeholder="Enter your phone number" type="text" />
          <BaseInput label="Address" placeholder="Enter your address" type="text" />
          <BaseInput label="City" placeholder="city" type="text" />
          <BaseSelect label="Region" placeholder="Select region" />
          <BaseInput label="Postal code" placeholder="Enter your postal code" type="text" />
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold text-gray-900">Select payment method</h3>
        <div className="mt-3 grid grid-cols-2 gap-5">
          {payments.map((item) => (
            <BaseRadio
              mode="payment"
              icon={item.icon}
              key={item.label}
              label={item.label}
              value={method as string}
              onChange={setMethod}
            />
          ))}
        </div>

        <div className="mt-[22px] grid w-full grid-cols-2 gap-x-3 gap-y-2">
          <BaseInput placeholder="Card number" type="text" rightIcon={LockIcon} className="col-span-2" />
          <BaseInput placeholder="Expiration Date (MM/YY)" type="text" />
          <BaseInput placeholder="Security code" type="text" />
        </div>

        <div className="mt-3 flex items-center gap-1">
          <input type="checkbox" name="checkbox" id="checkbox" className="size-[18px] checked:bg-gray-600" />
          <label htmlFor="checkbox" className="text-xs text-gray-900">
            Use shipping address as billing address
          </label>
        </div>
      </div>

      <div className="mt-6 px-[86px]">
        <BaseButton
          title="Pay $524.00"
          rightIcon={ArrowRightIcon}
          className="flex w-full bg-gray-900 py-3 text-white"
        />
      </div>
    </form>
  )
}

export default CheckoutRightSide
