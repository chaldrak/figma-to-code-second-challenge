import React from "react"
import Image, { StaticImageData } from "next/image"
import clsx from "clsx"

type BaseRadioProps = {
  label: string
  value: string
  checked?: boolean
  icon?: StaticImageData
  onChange: React.Dispatch<React.SetStateAction<string | undefined>>
  mode: "shipping" | "payment"
}

const BaseRadio = ({ label, mode, icon, value, onChange }: BaseRadioProps) => {
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
  return null
}

export default BaseRadio
