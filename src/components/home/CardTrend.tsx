"use client"

import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import clsx from "clsx"

import CartIcon from "@/assets/icons/cart.svg"
const CardTrend = ({ className }: { className?: string }) => {
  const router = useRouter()
  return (
    <div className={clsx("group h-fit w-full cursor-pointer", className)}>
      <div className="relative h-[405px] w-full overflow-hidden rounded-[32px] bg-gray-300">
        <Image
          src="https://started-bucket.s3.us-east-2.amazonaws.com/figma-to-code/challenge-2/M%2BNSW%2BSW%2BAIR%2BCREW%2BFLC%2BBB.png"
          width={500}
          height={500}
          className="size-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 z-0 transition-colors group-hover:bg-black/20" />
        <span className="absolute left-5 top-5 block rounded-full bg-white px-[10px] py-2 text-xs font-semibold text-gray-900">
          Get off 20%
        </span>
        <div className="absolute bottom-5 hidden w-full items-center gap-1 px-5 group-hover:flex">
          <button className="flex w-1/2 items-center justify-center gap-1 rounded-full bg-white py-3 text-sm font-semibold uppercase text-gray-900 hover:bg-white/50">
            <Image src={CartIcon} width={500} height={500} className="size-5 shrink-0" alt="" />
            <span>Add to cart</span>
          </button>
          <button
            className="w-1/2 rounded-full border border-white py-[10px] text-sm font-semibold uppercase text-white hover:bg-white/50"
            onClick={() => router.push("/product-id")}
          >
            Buy now
          </button>
        </div>
      </div>
      <h3 className="mt-4 text-2xl font-semibold uppercase text-gray-900 lg:text-3xl">Summer shirt</h3>
      <p className="mt-1 text-xl font-semibold text-gray-300 lg:text-2xl">$99</p>
    </div>
  )
}

export default CardTrend
