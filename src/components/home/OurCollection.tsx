"use client"

import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import ArrowIcon from "@/assets/icons/arrow.svg"

const OurCollection = () => {
  const router = useRouter()
  return (
    <section className="mt-[72px]">
      <h3 className="text-center font-chillax text-4xl font-semibold uppercase text-gray-900">OUR COLLECTION</h3>

      <p className="text-center text-lg font-medium text-gray-300">
        Our latest collection, where classic and contemporary styles converge in perfect harmony.
      </p>

      <div className="mt-9 w-full px-[102px]">
        <div className="grid grid-cols-3 gap-4">
          <div className="relative h-[446px] w-full overflow-hidden rounded-[32px] bg-gray-200">
            <Image
              src="https://started-bucket.s3.us-east-2.amazonaws.com/figma-to-code/challenge-2/tech-mens-fleece-shack.png"
              alt="Techs men fleece"
              width={500}
              height={500}
              className="size-full object-cover"
            />
            <div className="absolute inset-0 z-0 bg-black/20" />
            <div className="absolute bottom-6 z-10 w-full text-center">
              <button
                className="mx-auto flex items-center gap-[6px] rounded-full bg-white px-[21px] py-3 hover:bg-white/50"
                onClick={() => router.push("/product-id")}
              >
                <span className="text-sm font-semibold uppercase text-gray-900">Learn more</span>
                <Image src={ArrowIcon} width={500} height={500} alt="arrow icon" className="size-5" />
              </button>
            </div>
          </div>
          <div className="relative col-span-2 flex h-[446px] w-full items-center justify-center overflow-hidden rounded-[32px] bg-gray-200 bg-[url('https://started-bucket.s3.us-east-2.amazonaws.com/figma-to-code/challenge-2/abraham-george.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 z-0 bg-black/20" />
            <div className="relative z-10">
              <h3 className="text-shadow-outline-white bg-clip-text text-center font-chillax text-5xl font-bold uppercase text-black/50">
                Classic men
              </h3>
              <p className="text-center text-lg text-white">We’re changing the way things get made</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurCollection
