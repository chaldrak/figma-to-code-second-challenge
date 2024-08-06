import React from "react"
import Image from "next/image"
import Link from "next/link"

import SearchIcon from "@/assets/icons/search.svg"
import UserIcon from "@/assets/icons/user.svg"
import { headerMenu } from "@/constants/navigations"

const Header = () => {
  return (
    <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between border-b border-gray-100 bg-white">
      <ul className="flex items-center gap-[18px]">
        {headerMenu.slice(0, 4).map((item, idx) => (
          <li key={idx}>
            <Link href={item.href} className="text-base text-gray-900 hover:text-gray-800">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/" className="text-white">
        <h3 className="font-chillax text-shadow-outline text-3xl font-semibold uppercase text-current">Ballamas</h3>
      </Link>

      <ul className="flex items-center gap-[18px]">
        {headerMenu.slice(4, 6).map((item, idx) => (
          <li key={idx}>
            <Link href={item.href} className="text-base text-gray-900 hover:text-gray-800">
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="#" className="flex items-center gap-1 text-base text-gray-900 hover:text-gray-800">
            <Image src={UserIcon} alt="User Icon" width={500} height={500} className="size-[18px]" />
            <span>Account</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="text-base text-gray-900 hover:text-gray-800">
            Cart(0)
          </Link>
        </li>
        <li>
          <button className="mt-1 size-5">
            <Image src={SearchIcon} alt="Search Icon" width={500} height={500} />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Header
