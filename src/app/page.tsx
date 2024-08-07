import Header from "@/components/header"
import TopNav from "@/components/header/TopNav"
import HeroSection from "@/components/home/HeroSection"
import LatestTrends from "@/components/home/LatestTrends"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="sticky top-0 z-50">
        <TopNav />
        <Header />
      </div>
      <div className="mx-auto max-w-7xl">
        <HeroSection />
        <LatestTrends />
      </div>
    </main>
  )
}
