import React from "react"

import LockIcon from "@/assets/icons/lock.svg"

import BaseInput from "../common/BaseInput"
import BaseSelect from "../common/BaseSelect"

const CheckoutRightSide = () => {
  return (
    <div className="h-fit w-[488px]">
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
          <div className="boder-gray-300 h-[76px] w-full rounded-xl border px-3 py-4 peer-checked:border-gray-900">
            <input type="radio" id="creditCard" name="paymentMethod" value="creditCard" className="peer" />
            <label htmlFor="creditCard" className="text-xs font-medium text-gray-900">
              Debit / Credit Card
            </label>
          </div>
          <div className="boder-gray-300 h-[76px] w-full rounded-xl border">
            <input type="radio" id="paypal" name="paymentMethod" value="paypal" className="mr-2" />
            <label htmlFor="paypal" className="text-sm font-medium text-gray-900">
              PayPal
            </label>
          </div>
        </div>

        <div className="mt-[22px] grid w-full grid-cols-2 gap-x-3 gap-y-2">
          <BaseInput placeholder="Card number" type="text" rightIcon={LockIcon} className="col-span-2" />
          <BaseInput placeholder="Expiration Date (MM/YY)" type="text" />
          <BaseInput placeholder="Security code" type="text" />
        </div>
      </div>
    </div>
  )
}

export default CheckoutRightSide
