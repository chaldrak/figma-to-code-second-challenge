"use client"

import React, { useState } from "react"

import Categories from "./Categories"

const LatestTrends = () => {
  const [category, setCategory] = useState("")
  return (
    <section className="mt-[72px] w-full text-gray-900">
      <h1 className="font-chillax mb-[72px] text-center text-3xl font-semibold">
        Discover the latest trends in summer fashion. Shop now and refresh your wardrobe with our stylish summer shirts.
      </h1>

      <Categories category={category} setCategory={setCategory} />

      <div className="mb-10 h-96 w-full border"></div>
    </section>
  )
}

export default LatestTrends
