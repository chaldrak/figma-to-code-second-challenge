import React from "react"
import Image, { StaticImageData } from "next/image"
import clsx from "clsx"

type BaseRadioProps = {
  label: string
  value: string
  description?: string
  price?: string
  checked?: boolean
  icon?: StaticImageData
  onChange: React.Dispatch<React.SetStateAction<string | undefined>>
  mode: "shipping" | "payment"
}

const BaseRadio = ({ label, mode, icon, value, onChange, description, price }: BaseRadioProps) => {
  if (mode === "payment")
    return (
      <div
        className={clsx(
          "h-fit w-full cursor-pointer rounded-xl border px-3 py-4 transition-colors",
          label === value ? "border-gray-900" : "border-gray-200 hover:bg-gray-100/30"
        )}
        onClick={() => onChange(label)}
      >
        <Image src={icon as StaticImageData} alt="payment icon" width={500} height={500} className="size-5" />
        <span className="mt-2 block text-xs font-medium text-gray-900">{label}</span>
      </div>
    )
  return (
    <div
      className={clsx(
        "flex w-full cursor-pointer items-center justify-between rounded-xl border p-3",
        label === value ? "" : "border-gray-200 hover:bg-gray-100/30"
      )}
      onClick={() => onChange(label)}
    >
      <div className="flex items-center gap-3">
        <div className="flex size-[14px] shrink-0 items-center justify-center rounded-full border md:size-5">
          <div className={clsx("size-2 rounded-full md:size-3", label === value ? "bg-gray-900" : "bg-white")}></div>
        </div>
        <div>
          <span className="block text-xs font-medium text-gray-900 md:text-sm">{label}</span>
          <span className="text-xs text-gray-300">{description}</span>
        </div>
      </div>

      <span className="block text-xs font-medium text-gray-900 md:text-sm">{price}</span>
    </div>
  )
}

export default BaseRadio
