"use client"

import React from "react"
import clsx from "clsx"

import { categories } from "@/constants/categories"

type ICategoriesProps = {
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

const Categories = ({ category, setCategory }: ICategoriesProps) => {
  return (
    <div className="mb-9 w-full space-x-[10px] text-center">
      {categories.map((item, idx) => (
        <button
          key={idx}
          className={clsx(
            "space-x-2 rounded-full border border-gray-900 px-[14px] py-[10px] text-base font-medium transition-colors duration-500",
            item.value === category ? "bg-gray-900 text-white" : "bg-white hover:bg-gray-900 hover:text-white"
          )}
          type="button"
          onClick={() => setCategory(item.value)}
        >
          <span className="text-xl">{item.label}</span>
          <span className="text-base">{item.count}</span>
        </button>
      ))}
    </div>
  )
}

export default Categories
