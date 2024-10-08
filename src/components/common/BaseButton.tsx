import React from "react"
import Image, { StaticImageData } from "next/image"
import clsx from "clsx"

type BaseButtonProps = {
  title: string
  className?: string
  rightIcon?: StaticImageData
  submit: () => void
  loading?: boolean
}

const BaseButton = ({ title, className, rightIcon, submit, loading }: BaseButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(className, "items-center justify-center gap-1 rounded-full border border-current")}
      onClick={submit}
    >
      {loading ? (
        "loading..."
      ) : (
        <>
          <span>{title}</span>
          {rightIcon && <Image src={rightIcon} width={500} height={500} alt="Icon" className="size-5" />}
        </>
      )}
    </button>
  )
}

export default BaseButton
