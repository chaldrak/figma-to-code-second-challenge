import React from "react"

import Footer from "../footer"
import Header from "../header"
import TopNav from "../header/TopNav"

const HeaderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <TopNav />
        <Header />
      </div>
      <div className="min-h-[calc(100vh-450px)]">{children}</div>
      <Footer />
    </>
  )
}

export default HeaderLayout
