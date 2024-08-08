"use client"

import React, { useState } from "react"

import Categories from "./Categories"
import ListTrends from "./ListTrends"

const LatestTrends = () => {
  const [category, setCategory] = useState("")
  return (
    <section className="mt-[72px] w-full text-gray-900">
      <h1 className="mb-[72px] text-center font-chillax text-3xl font-semibold">
        Discover the latest trends in summer fashion. Shop now and refresh your wardrobe with our stylish summer shirts.
      </h1>

      <Categories category={category} setCategory={setCategory} />

      <ListTrends />
    </section>
  )
}

export default LatestTrends
