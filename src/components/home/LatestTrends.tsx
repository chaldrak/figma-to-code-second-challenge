"use client"

import React, { useState } from "react"

import Categories from "./Categories"
import ListTrends from "./ListTrends"

const LatestTrends = () => {
  const [category, setCategory] = useState("")
  return (
    <section className="mt-18 w-full text-gray-900">
      <h1 className="mb-18 text-center font-chillax text-xl font-semibold md:text-2xl lg:text-3xl">
        Discover the latest trends in summer fashion. Shop now and refresh your wardrobe with our stylish summer shirts.
      </h1>

      <Categories category={category} setCategory={setCategory} />

      <ListTrends />
    </section>
  )
}

export default LatestTrends
