import React from "react"
import "../css/reset.css"
import "../css/main.css"
import { Header, Hero, Footer, Menu, Projects } from "../components/"

export default function Home() {
  return (
    <React.StrictMode>
      <Header />
      <Menu />
      <Hero />
      <Footer />
      <Projects />
    </React.StrictMode>
  )
}
