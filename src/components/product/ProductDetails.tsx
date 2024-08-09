"use client"

import React, { useState } from "react"
import Image from "next/image"
import clsx from "clsx"

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

const ProductDetails = () => {
  const [color, setColor] = useState<{
    label: string
    code: string
  }>(colors[0])

  const [size, setSize] = useState("xs")

  return (
    <section className="grid grid-cols-2 gap-11">
      <div className="h-[600px] w-full overflow-hidden rounded-[32px]">
        <Image
          src="https://started-bucket.s3.us-east-2.amazonaws.com/figma-to-code/challenge-2/Argentina_1994_Away_Jersey_Blue_IS0266_HM1.png"
          width={500}
          height={500}
          alt=""
          className="size-full object-cover"
        />
      </div>

      <div className="size-full space-y-5 text-gray-900">
        <h3 className="font-chillax text-5xl font-semibold">Badacore Tshirt</h3>

        <p className="text-4xl font-semibold">CAD $80 </p>

        <div>
          <p className="text-3xl font-medium">Color:Green</p>
          <div className="mt-[14px] space-x-3">
            {colors.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setColor(item)}
                className={clsx(
                  "size-7 rounded-full transition-transform",
                  color?.code === item.code ? `scale-75` : "scale-100"
                )}
                style={{
                  backgroundColor: item.code,
                  boxShadow: color?.code === item.code ? `0px 0px 5px ${item.code}` : "",
                }}
              ></button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-medium">Size:</h3>
          <div className="mt-[14px] space-x-3">
            {["xs", "s", "m", "l", "xl"].map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSize(item)}
                className={clsx(
                  "h-[50px] w-[73px] rounded-full border border-gray-900 text-2xl font-medium uppercase transition-colors hover:bg-gray-900 hover:text-white",
                  item === size ? "bg-gray-900 text-white" : ""
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-[14px]">
          <button className="w-full rounded-full bg-gray-900 py-6 text-sm font-semibold uppercase text-white hover:bg-black/80">
            Buy now
          </button>
          <button className="w-full rounded-full border border-gray-900 bg-white py-[22px] text-sm font-semibold uppercase text-gray-900 hover:bg-gray-900 hover:text-white">
            Add to cart
          </button>
        </div>

        <div>
          <h3 className="font-chillax text-3xl font-medium">Description</h3>
          <p className="mt-[14px] text-lg text-gray-300">
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
