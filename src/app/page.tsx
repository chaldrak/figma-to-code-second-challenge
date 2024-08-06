import Header from "@/components/header"
import TopNav from "@/components/header/TopNav"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="sticky top-0 z-50">
        <TopNav />
        <Header />
      </div>
      <section className="mx-auto max-w-7xl">
        {/* {Array(100)
          .fill(0)
          .map((_, idx) => (
            <p key={idx} className="text-gray-900">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, ex veritatis? Repellendus, provident
              voluptate eveniet doloremque ducimus ad ullam, dicta necessitatibus odio, perferendis placeat. Qui iusto
              tempora eos facere animi? <br />
            </p>
          ))} */}
      </section>
    </main>
  )
}
