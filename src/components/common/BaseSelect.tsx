"use client"

import React, { useState } from "react"
import clsx from "clsx"

type BaseSelectProps = {
  label: string
  placeholder: string
  className?: string
  disabled?: boolean
}

const BaseSelect = ({ label, placeholder, className, disabled }: BaseSelectProps) => {
  const [value, setValue] = useState("")
  return (
    <div className="w-full">
      <label htmlFor="" className="block pb-2 text-xs font-medium text-gray-900">
        {label}
      </label>
      <select
        disabled={disabled}
        className={clsx(
          "block w-full rounded-full border border-gray-900 bg-white p-4 text-xs text-gray-900",
          className
        )}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="">{placeholder}</option>
        <option value="region 1">region 1</option>
        <option value="region 2">region 2</option>
        <option value="region 3">region 3</option>
      </select>
    </div>
  )
}

export default BaseSelect
