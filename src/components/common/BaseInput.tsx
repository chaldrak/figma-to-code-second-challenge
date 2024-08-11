import React from "react"
import Image from "next/image"
import clsx from "clsx"

type BaseInputProps = {
  label?: string
  placeholder: string
  type: string
  className?: string
  disabled?: boolean
  rightIcon?: string
}

const BaseInput = ({ type, label, placeholder, className, disabled, rightIcon }: BaseInputProps) => {
  return (
    <div className={clsx("relative w-full", className)}>
      {label && (
        <label htmlFor="" className="block pb-2 text-xs font-medium text-gray-900">
          {label}
        </label>
      )}
      <input
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={clsx(
          "w-full rounded-full border border-gray-900 p-3 text-gray-900 placeholder:text-xs placeholder:text-gray-900",
          className
        )}
      />
      {rightIcon && (
        <Image
          src={rightIcon}
          width={500}
          height={500}
          className="absolute right-3 top-1/2 size-5 -translate-y-1/2"
          alt="Lock Icon"
        />
      )}
    </div>
  )
}

export default BaseInput
