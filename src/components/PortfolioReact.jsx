import React from "react"
import Title from "./Title"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ReactProjectImage = graphql`
  {
    revsonPrev: file(relativePath: { eq: "preview/revson-html.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    otheloPrev: file(relativePath: { eq: "preview/othelo-onepage.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    landyPrev: file(relativePath: { eq: "preview/landy.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    travelPrev: file(relativePath: { eq: "preview/ticket.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    flatPrev: file(relativePath: { eq: "preview/flat-theme.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const PortfolioReact = () => {
  return (
    <StaticQuery
      query={ReactProjectImage}
      render={data => {
        const revsonPrev = data.revsonPrev.childImageSharp.fluid
        const otheloPrev = data.otheloPrev.childImageSharp.fluid
        const landyPrev = data.landyPrev.childImageSharp.fluid
        const travelPrev = data.travelPrev.childImageSharp.fluid
        const flatPrev = data.flatPrev.childImageSharp.fluid

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
                      <Img fluid={otheloPrev} alt="theshahriyar" />
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
                      <Img fluid={revsonPrev} alt="theshahriyar" />
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
                      <Img fluid={landyPrev} alt="theshahriyar" />
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
                      <Img fluid={travelPrev} alt="theshahriyar" />
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
                      <Img fluid={flatPrev} alt="theshahriyar" />
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
      }}
    />
  )
}

export default PortfolioReact
