import React from "react"
import Image from "next/image"
import Link from "next/link"

const CheckoutLeftSide = () => {
  return (
    <div className="w-[600px]">
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
              <div className="flex items-center justify-between" key={idx}>
                <div className="flex items-center gap-[10px]">
                  <Image
                    src="https://started-bucket.s3.us-east-2.amazonaws.com/figma-to-code/challenge-2/MN-K-SOLO-SWSH-SS-HW-TOP1.png"
                    width={500}
                    height={500}
                    alt=""
                    className="size-[72px] rounded-lg object-cover"
                  />
                  <p className="">
                    <span className="block text-sm font-semibold text-gray-900">T-Shirt</span>
                    <span className="block text-xs font-medium text-gray-300">Color: Green - Size: Large</span>
                  </p>
                </div>
                <span className="text-sm font-semibold text-gray-900">$174.00</span>
              </div>
            ))}
        </div>

        <div className="mt-6 text-xs font-medium text-gray-900">
          <span className="mb-1 block">Discount Code</span>
          <input
            type="text"
            placeholder="Add discount code"
            className="placeholder:text-medium w-1/2 rounded-full border border-gray-900 bg-white p-[14px] placeholder:text-xs placeholder:text-gray-900"
          />
          <button className="ml-2 w-fit rounded-full border bg-gray-900 px-5 py-[14px] font-semibold text-white">
            Apply
          </button>
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
            <span>Subtotal</span>
            <span>$524.00</span>
          </p>
        </div>

        <div className="mt-6 space-y-[14px]">
          <h3 className="text-sm font-semibold text-gray-900">Shipping method</h3>
          <div className="mt-[14px] space-y-4">
            {/* <div className="group relative w-full cursor-pointer rounded-xl border border-gray-100 bg-white p-3 text-gray-900">
              <input
                type="radio"
                name="method"
                id="1"
                className="peer size-[18px] appearance-none rounded-full border border-gray-300"
              />
              <label htmlFor="1" className="absolute inset-0 left-12 top-1/2 border peer-checked:border-red-600">
                Label
              </label>
            </div> */}

            <div className="grid gap-2 sm:grid-cols-2">
              <div className="block" />
              <input
                type="radio"
                name="radio-in-form"
                className="hidden checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                id="radio-in-form-1"
              />
              <label
                htmlFor="radio-in-form-1"
                className="flex w-full rounded-md border border-gray-200 bg-white p-3 text-sm"
              >
                <span className="mr-2 mt-0.5 size-4 rounded-full border border-gray-300"></span>
                <h5 className="text-sm text-gray-500">Default radio</h5>
              </label>
            </div>

            <div className="block">
              <input
                type="radio"
                name="radio-in-form"
                className="hidden checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                id="radio-in-form-2"
                // checked
              />
              <label
                htmlFor="radio-in-form-2"
                className="flex w-full rounded-md border border-gray-200 bg-white p-3 text-sm"
              >
                <span className="mr-2 mt-0.5 size-4 rounded-full border border-gray-300"></span>
                <h5 className="text-sm text-gray-500">Checked radio</h5>
              </label>
            </div>

            {/* <label
              htmlFor="2"
              className="group relative block w-full cursor-pointer rounded-xl border border-gray-100 bg-white p-3 text-gray-900 peer-checked:border-gray-900"
            >
              <input
                type="radio"
                name="method"
                id="2"
                className="peer size-[18px] appearance-none rounded-full border border-gray-300 checked:bg-black"
              />
              {/* <label htmlFor="2" className="absolute inset-0 left-12 top-1/2 border peer-checked:border-red-600">
                Label
              </label>
            </label> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutLeftSide
