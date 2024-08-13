import React from "react"
import clsx from "clsx"

type ButtonSizeProps = {
  item: string
  size: string
  setSize: React.Dispatch<React.SetStateAction<string>>
}

const ButtonSize = ({ item, setSize, size }: ButtonSizeProps) => {
  return (
    <button
      type="button"
      onClick={() => setSize(item)}
      className={clsx(
        "h-[42px] w-[55px] rounded-full border border-gray-900 text-xl font-medium uppercase transition-colors hover:bg-gray-900 hover:text-white md:h-[52px] md:w-[75px] md:text-2xl",
        item === size ? "bg-gray-900 text-white" : ""
      )}
    >
      {item}
    </button>
  )
}

export default ButtonSize
