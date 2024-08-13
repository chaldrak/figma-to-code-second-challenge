import React from "react"

import CardTrend from "./CardTrend"

const ListTrends = () => {
  return (
    <>
      <div className="grid h-fit w-full grid-cols-1 gap-[14px] px-2 md:grid-cols-2 lg:grid-cols-3 lg:px-[102px]">
        {Array(6)
          .fill(0)
          .map((item, idx) => (
            <CardTrend key={idx} />
          ))}
      </div>
      <div className="w-full text-center">
        <button className="mt-8 rounded-full border border-gray-900 bg-white px-8 py-3 text-sm font-semibold">
          View More
        </button>
      </div>
    </>
  )
}

export default ListTrends
