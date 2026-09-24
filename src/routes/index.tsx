import BuiltForTheUaeMarkets from "@/components/index/built-for-the-uae-markets"
import Cta from "@/components/index/cta"
import Hero from "@/components/index/hero"
import MeetCustomers from "@/components/index/meet-customers"
import PhilosophyContent from "@/components/index/philosophy"
import WhatWeDo from "@/components/index/what-we-do"
import { createFileRoute } from "@tanstack/react-router"


export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <div className="">
      <Hero />
      <PhilosophyContent />
      <WhatWeDo />
      <BuiltForTheUaeMarkets />
      <MeetCustomers />
      <Cta />
    </div>
  )
}
