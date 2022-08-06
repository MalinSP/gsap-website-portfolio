import React from "react"
import "../css/reset.css"
import "../css/main.css"
import { Header, Hero, Footer, Menu } from "../components/"

export default function Home() {
  return (
    <div>
      <Menu />
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}
