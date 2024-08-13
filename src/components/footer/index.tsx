import React from "react"
import Link from "next/link"

import { footerMenu } from "@/constants/navigations"

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-[26px] text-white lg:py-[52px]">
      <div className="mx-5 h-fit max-w-7xl md:mx-[46px] lg:mx-auto">
        <div className="flex flex-col items-start justify-between lg:flex-row">
          <div className="lg:w-1/3">
            <Link href="/" className="text-black">
              <h3 className="font-chillax text-3xl font-semibold uppercase text-current text-shadow-outline-white">
                Ballamas
              </h3>
            </Link>
            <p className="mt-5 text-xs font-medium text-gray-200 md:text-sm">
              Subscribe to our newsletter for upcoming products and best discount for all items
            </p>
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                placeholder="Your email"
                className="w-full rounded-full border border-white bg-transparent p-[14px] placeholder:text-xs placeholder:text-white"
              />
              <button className="rounded-full bg-white px-[33px] py-3 text-sm font-semibold text-gray-900">
                Subscribe
              </button>
            </div>
          </div>

          <div className="mt-5 flex w-full items-start justify-between md:justify-start md:gap-[52px] lg:mt-0 lg:w-1/3">
            {footerMenu.map((menu, idx) => (
              <div className="" key={idx}>
                <h3 className="mb-2 text-xs font-medium text-white md:text-base">{menu.title}</h3>
                <ul className="">
                  {menu.items.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-xs text-gray-200 hover:text-gray-300 md:text-sm">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 w-full text-center text-gray-300">
          <span className="text-xs">
            © BALLAMAS 2024{" "}
            <Link href="https://www.linkedin.com/in/waris-akinocho/" target="_blank">
              by waris
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
