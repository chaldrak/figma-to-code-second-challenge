import React from "react"

import CardTrend from "../home/CardTrend"

const ListProducts = () => {
  return (
    <section className="mt-[72px] w-full px-2 md:px-0">
      <h2 className="text-left font-chillax text-2xl font-semibold text-gray-900 md:text-3xl">You may also like</h2>
      <div className="mt-8 flex flex-col gap-[14px] overflow-auto hide-scrollbar md:flex-row">
        {Array(6)
          .fill(0)
          .map((item, idx) => (
            <CardTrend key={idx} className="w-full shrink-0 md:max-w-80" />
          ))}
      </div>
    </section>
  )
}

export default ListProducts
