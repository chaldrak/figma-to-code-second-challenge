"use client"

import React, { useState } from "react"
import Image from "next/image"

import BaseButton from "../common/BaseButton"

import ButtonColor from "./ButtonColor"
import ButtonSize from "./ButtonSize"

const colors = [
  {
    label: "Green",
    code: "#2D5C43",
  },
  {
    label: "Purple",
    code: "#393158",
  },
  {
    label: "Teal",
    code: "#2A5259",
  },
  {
    label: "Gold",
    code: "#706947",
  },
]

export type ColorType = (typeof colors)[0]

const ProductDetails = () => {
  const [color, setColor] = useState<{
    label: string
    code: string
  }>(colors[0])

  const [size, setSize] = useState("xs")

  return (
    <section className="grid grid-cols-1 gap-11 lg:grid-cols-2">
      <div className="aspect-square w-full overflow-hidden rounded-[32px] bg-gray-300">
        <Image
          src="https://started-bucket.s3.us-east-2.amazonaws.com/figma-to-code/challenge-2/Argentina_1994_Away_Jersey_Blue_IS0266_HM1.png"
          width={500}
          height={500}
          alt=""
          className="size-full object-cover"
        />
      </div>

      <div className="size-full space-y-5 text-gray-900">
        <h3 className="font-chillax text-3xl font-semibold md:text-5xl">Badacore Tshirt</h3>

        <p className="text-2xl font-semibold md:text-4xl">CAD $80 </p>

        <div>
          <p className="text-xl font-medium md:text-3xl">Color:{color.label}</p>
          <div className="mt-3.5 space-x-3">
            {colors.map((item, idx) => (
              <ButtonColor color={color} item={item} key={idx} setColor={setColor} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-medium">Size:</h3>
          <div className="mt-3.5 space-x-3">
            {["xs", "s", "m", "l", "xl"].map((item, idx) => (
              <ButtonSize item={item} setSize={setSize} size={size} key={idx} />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3.5">
          <BaseButton
            submit={() => null}
            title="Buy now"
            className="w-full bg-gray-900 py-3 text-sm font-semibold uppercase text-white hover:bg-black/80 md:py-6"
          />

          <BaseButton
            submit={() => null}
            title="Add to cart"
            className="w-full border border-gray-900 bg-white py-3 text-sm font-semibold uppercase text-gray-900 hover:bg-gray-900 hover:text-white md:py-[22px]"
          />
        </div>

        <div>
          <h3 className="font-chillax text-2xl font-medium md:text-3xl">Description</h3>
          <p className="mt-3.5 text-sm text-gray-300 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur tempus urna at turpis condimentum lobortis.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
