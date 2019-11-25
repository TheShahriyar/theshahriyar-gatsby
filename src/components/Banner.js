import React from "react"
import BackgroundImage from "../images/bg/banner.jpg"
import { Link } from "react-scroll"

const Banner = () => {
  return (
    <section
      id="hero-banner"
      className="parallax"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPositionY: "20%",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="preview-banner text-center white">
              <h1>I'm Shahriar Ahmed</h1>
              <h4>Front End Developer</h4>

              <Link
                to="portfolio"
                smooth={true}
                className="btn btn-primary"
                duration={1500}
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
