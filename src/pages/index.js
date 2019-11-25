import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/style.css"
import Banner from "../components/Banner"
import About from "../components/About"
import Portfolio from "../components/Portfolio"
import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer"

export default () => (
  <>
    <Banner />
    <About />
    <Portfolio />
    <CallToAction />
    <Footer />
  </>
)
