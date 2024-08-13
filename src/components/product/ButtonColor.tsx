import React from "react"
import clsx from "clsx"

import { ColorType } from "./ProductDetails"

type ButtonColorProps = {
  color: ColorType
  setColor: React.Dispatch<React.SetStateAction<ColorType>>
  item: ColorType
}

const ButtonColor = ({ color, item, setColor }: ButtonColorProps) => {
  return (
    <button
      type="button"
      onClick={() => setColor(item)}
      className={clsx(
        "size-5 rounded-full transition-transform md:size-7",
        color?.code === item.code ? `scale-75` : "scale-100"
      )}
      style={{
        backgroundColor: item.code,
        boxShadow: color?.code === item.code ? `0px 0px 5px ${item.code}` : "",
      }}
    />
  )
}

export default ButtonColor
