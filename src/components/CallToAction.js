import React from "react"
import Bg from "../images/bg/bg10.jpg"

const CallToAction = () => {
  return (
    <section
      className="pad80 parallax"
      style={{ backgroundImage: `url(${Bg})`, backgroundPosition: "50 50" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="call-to-action-2 text-center white">
              <h3>
                <span>Want to Hire me?</span>
              </h3>
              <a
                href="mailto:shahriyar.31dec@gmail.com"
                className="btn btn-primary"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
