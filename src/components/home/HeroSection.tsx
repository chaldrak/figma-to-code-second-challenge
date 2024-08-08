import React from "react"
import Image from "next/image"

import ArrowIcon from "@/assets/icons/arrow.svg"

const HeroSection = () => {
  return (
    <section className="relative mt-10 flex h-fit w-full flex-col items-center overflow-hidden rounded-[52px] bg-gray-200 bg-[url('https://started-bucket.s3.us-east-2.amazonaws.com/figma-to-code/challenge-2/jordan-essentials-chicago-mens-jacket.png')] bg-cover bg-center bg-no-repeat px-[78px] py-24 text-white">
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 mb-4 flex items-center gap-3">
        <div className="h-[0.5px] w-[66px] bg-gray-200" />
        <h3 className="text-sm">We bring new fashion to the world</h3>
        <div className="h-[0.5px] w-[66px] bg-gray-200" />
      </div>

      <h3 className="relative z-10 mb-4 max-w-5xl py-4 text-center font-chillax text-5xl font-black">
        DISCOVER THE LATEST FASHION TRENDS HERE
      </h3>

      <p className="relative z-10 mb-[52px] max-w-2xl text-center font-archivo text-base">
        Discover a world of fashion with our meticulously curated outfits. Shop now to update your wardrobe with chic
        and stylish outfits.
      </p>

      <div className="relative z-10 flex items-center">
        <button className="rounded-full bg-white px-5 py-3 font-archivo text-sm font-semibold text-gray-900">
          Start shopping
        </button>
        <button className="rounded-full bg-white p-3">
          <Image src={ArrowIcon} alt="Arrow Icon" width={500} height={500} className="size-5" />
        </button>
      </div>
    </section>
  )
}

export default HeroSection
