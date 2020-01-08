import React from "react"
import Title from "./Title"
import OtheloImg from "../images/preview/othelo-onepage.jpg"
import RevsonImg from "../images/preview/revson-html.jpg"
import LandyImg from "../images/preview/landy.jpg"
import TicketImg from "../images/preview/ticket.jpg"
import FlatThemeImg from "../images/preview/flat-theme.jpg"

const PortfolioReact = () => {
  return (
    <section
      id="portfolioReact"
      className="pad-t100 pad-b70"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Title title="React Portfolio"></Title>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="product-showcase">
              <a
                href="https://othelo-react.theshahriyar.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={OtheloImg} alt="theshahriyar" />
                <div className="project-details">
                  <p>Othelo - Onepage Gatsby Template</p>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>SCSS</li>
                    <li>Bootstrap</li>
                    <li>Gatsby</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-showcase">
              <a
                href="https://revson-gatsby-shahriar.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={RevsonImg} alt="theshahriyar" />
                <div className="project-details">
                  <p>Revson - Multipurpose Gatsby Template</p>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>SCSS</li>
                    <li>Bootstrap</li>
                    <li>Gatsby</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-showcase">
              <a
                href="https://landy-app-shahriar.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LandyImg} alt="theshahriyar" />
                <div className="project-details">
                  <p>Landy - App Landing Gatsby Template</p>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>SCSS</li>
                    <li>Bootstrap</li>
                    <li>Gatsby</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-showcase">
              <a
                href="https://shahriyar-a4aero-test.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TicketImg} alt="theshahriyar" />
                <div className="project-details">
                  <p>Travel website built with React</p>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>SCSS</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-showcase">
              <a
                href="https://flat-theme-shahriyar.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={FlatThemeImg} alt="theshahriyar" />
                <div className="project-details">
                  <p>Flat Theme - Agency Website Template</p>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>SCSS</li>
                    <li>Bootstrap</li>
                    <li>Gatsby</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioReact
