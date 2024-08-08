import React from "react"

import CardTrend from "../home/CardTrend"

const ListProducts = () => {
  return (
    <section className="mt-[72px] w-full">
      <h2 className="text-left font-chillax text-3xl font-semibold text-gray-900">You may also like</h2>
      <div className="hide-scrollbar mt-8 flex gap-[14px] overflow-auto">
        {Array(6)
          .fill(0)
          .map((item, idx) => (
            <CardTrend key={idx} className="max-w-80 shrink-0" />
          ))}
      </div>
    </section>
  )
}

export default ListProducts
