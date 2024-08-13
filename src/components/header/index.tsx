"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

import CartIcon from "@/assets/icons/cart-1.svg"
import HamburgerRow from "@/assets/icons/hambuger.svg"
import SearchIcon from "@/assets/icons/search.svg"
import UserIcon from "@/assets/icons/user.svg"
import { headerMenu } from "@/constants/navigations"

const Header = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])

  return (
    <nav className="relative z-50 h-[76px] bg-white">
      <div className="mx-5 hidden h-full max-w-7xl items-center justify-between border-b border-gray-100 md:mx-[46px] lg:mx-auto lg:flex">
        <ul className="flex items-center gap-[18px]">
          {headerMenu.slice(0, 4).map((item, idx) => (
            <li key={idx}>
              <Link href={item.href} className="text-base text-gray-900 hover:text-gray-800">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/" className="static z-50 text-white">
          <h3 className="font-chillax text-3xl font-semibold uppercase text-current text-shadow-outline-black">
            Ballamas
          </h3>
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
            <Link href="/cart" className="text-base text-gray-900 hover:text-gray-800">
              Cart(0)
            </Link>
          </li>
          <li>
            <button className="mt-1 size-5">
              <Image src={SearchIcon} alt="Search Icon" width={500} height={500} />
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="z-50 size-full lg:hidden">
        <div className="mx-5 flex h-full items-center justify-between border-b border-gray-100 md:mx-[46px]">
          {/* Hamburger */}
          <button className="flex w-fit flex-col space-y-2 p-2" type="button" onClick={() => setOpen((v) => !v)}>
            <Image
              src={HamburgerRow}
              width={500}
              height={500}
              alt="hamburger top"
              className={clsx(
                "h1 w-8 origin-center object-cover transition",
                open ? "translate-y-2 rotate-custom" : "rotate-0"
              )}
            />
            <Image
              src={HamburgerRow}
              width={500}
              height={500}
              alt="hamburger top"
              className={clsx(
                "h1 w-8 origin-center object-cover transition",
                open ? "-translate-y-1 -rotate-custom" : "rotate-0"
              )}
            />
          </button>

          <Link href="/" className="text-white">
            <h3 className="font-chillax text-3xl font-semibold uppercase text-current text-shadow-outline-black">
              Ballamas
            </h3>
          </Link>

          <ul className="flex items-center gap-3 lg:hidden">
            <li>
              <button className="mt-1.5 size-5">
                <Image src={SearchIcon} alt="Search Icon" width={500} height={500} />
              </button>
            </li>
            <li>
              <Link href="/cart" className="mt-1.5">
                <Image src={CartIcon} alt="Search Icon" width={500} height={500} className="size-5" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={clsx(
          "absolute left-0 top-[76px] flex w-full flex-col items-center bg-white py-[18px] text-center transition-all ease-in-out",
          open ? "min-h-screen lg:hidden" : "hidden"
        )}
      >
        <ul className="flex flex-col justify-center space-y-[18px]">
          {headerMenu.map((item, idx) => (
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
          <li className="pt-11">
            <Link href="#" className="text-base text-gray-900 hover:text-gray-800">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="#" className="text-base text-gray-900 hover:text-gray-800">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
