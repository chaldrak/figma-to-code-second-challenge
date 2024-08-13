import HeroSection from "@/components/home/HeroSection"
import LatestTrends from "@/components/home/LatestTrends"
import OurCollection from "@/components/home/OurCollection"
import HeaderLayout from "@/components/layouts/HeaderLayout"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeaderLayout>
        <div className="mx-5 mb-24 h-fit max-w-7xl bg-white md:mx-[46px] lg:mx-auto">
          <HeroSection />
          <LatestTrends />
          <OurCollection />
        </div>
      </HeaderLayout>
    </main>
  )
}
