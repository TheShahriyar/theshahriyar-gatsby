import React from "react"
import Title from "./Title"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProjectImage = graphql`
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
    wavePrev: file(relativePath: { eq: "preview/wave-html.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    maxPrev: file(relativePath: { eq: "preview/max-html.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    dreamPrev: file(relativePath: { eq: "preview/dream-construction.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    palacePrev: file(relativePath: { eq: "preview/palace-interior.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    hudsonPrev: file(relativePath: { eq: "preview/hudson-multi.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    revPrev: file(relativePath: { eq: "preview/revenue-multi.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    bondingPrev: file(relativePath: { eq: "preview/bonding-personal.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    speedyPrev: file(relativePath: { eq: "preview/speedy-car.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    madisonPrev: file(relativePath: { eq: "preview/madison-html.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    mariamPrev: file(relativePath: { eq: "preview/mariam-multi.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    gridsPrev: file(relativePath: { eq: "preview/grids-multi.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    tenderPrev: file(relativePath: { eq: "preview/tender-charity.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Portfolio = () => (
  <StaticQuery
    query={ProjectImage}
    render={data => {
      const revsonPrev = data.revsonPrev.childImageSharp.fluid
      const otheloPrev = data.otheloPrev.childImageSharp.fluid
      const maxPrev = data.maxPrev.childImageSharp.fluid
      const dreamPrev = data.dreamPrev.childImageSharp.fluid
      const palacePrev = data.palacePrev.childImageSharp.fluid
      const hudsonPrev = data.hudsonPrev.childImageSharp.fluid
      const revPrev = data.revPrev.childImageSharp.fluid
      const bondingPrev = data.bondingPrev.childImageSharp.fluid
      const speedyPrev = data.speedyPrev.childImageSharp.fluid
      const madisonPrev = data.madisonPrev.childImageSharp.fluid
      const mariamPrev = data.mariamPrev.childImageSharp.fluid
      const gridsPrev = data.gridsPrev.childImageSharp.fluid
      const tenderPrev = data.tenderPrev.childImageSharp.fluid
      const wavePrev = data.wavePrev.childImageSharp.fluid

      return (
        <section
          id="portfolio"
          className="pad-t100 pad-b70"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Title title="Portfolio"></Title>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="product-showcase">
                  <a
                    href="http://www.portfolio.theshahriyar.com/html/wave/wave-preview.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img fluid={wavePrev} alt="" />
                    <div className="project-details">
                      <p>Wave - Multipurpose HTML5 Bootstrap Template</p>
                      <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-showcase">
                  <a
                    href="http://www.portfolio.theshahriyar.com/html/max/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img fluid={maxPrev} alt="" />
                    <div className="project-details">
                      <p>Max - Multipurpose HTML5 Bootstrap Template</p>
                      <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-showcase">
                  <a
                    href="http://www.portfolio.theshahriyar.com/html/revson/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img fluid={revsonPrev} alt="" />
                    <div className="project-details">
                      <p>Revson - Multipurpose HTML5 Bootstrap Template</p>
                      <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-showcase">
                  <a
                    href="http://www.portfolio.theshahriyar.com/html/dream/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img fluid={dreamPrev} alt="" />
                    <div className="project-details">
                      <p>Dream - Construction Business Bootstrap Template</p>
                      <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-showcase">
                  <a
                    href="http://www.portfolio.theshahriyar.com/html/othelo/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img fluid={otheloPrev} alt="" />
                    <div className="project-details">
                      <p>Othelo - Multipurpose Onepage Bootstrap Template</p>
                      <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-showcase">
                  <a
                    href="http://www.portfolio.theshahriyar.com/html/palace/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img fluid={palacePrev} alt="" />
                    <div className="project-details">
                      <p>
                        Palace - Interior/Architecture Business Bootstrap
                        Template
                      </p>
                      <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-showcase">
                  <a
                    href="http://sitetemplate.demo.ithemeslab.com/hudson/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img fluid={hudsonPrev} alt="" />
                    <div className="project-details">
                      <p>Hudson - Multipurpose HTML5 Bootstrap Template</p>
                      <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-showcase">
                  <a
                    href="http://sitetemplate.demo.ithemeslab.com/revenue/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img fluid={revPrev} alt="" />
                    <div className="project-details">
                      <p>Revenue - Multipurpose HTML5 Bootstrap Template</p>
                      <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-showcase">
                  <a
                    href="http://www.portfolio.theshahriyar.com/html/bonding/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img fluid={bondingPrev} alt="" />
                    <div className="project-details">
                      <p>Bonding - Personal Onepage Bootstrap Template</p>
                      <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-showcase">
                  <a
                    href="http://www.portfolio.theshahriyar.com/html/speedy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img fluid={speedyPrev} alt="" />
                    <div className="project-details">
                      <p>Speedy - Car Rental Business Bootstrap Template</p>
                      <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-showcase">
                  <a
                    href="http://sitetemplate.demo.ithemeslab.com/madison/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img fluid={madisonPrev} alt="" />
                    <div className="project-details">
                      <p>Madison - Restaurant Business Bootstrap Template</p>
                      <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-showcase">
                  <a
                    href="http://www.portfolio.theshahriyar.com/html/mariam/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img fluid={mariamPrev} alt="" />
                    <div className="project-details">
                      <p>Mariam - Multipurpose HTML5 Bootstrap Template</p>
                      <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-showcase">
                  <a
                    href="http://www.portfolio.theshahriyar.com/html/grids/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img fluid={gridsPrev} alt="" />
                    <div className="project-details">
                      <p>Grids - Multipurpose Bootstrap Template</p>
                      <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-showcase">
                  <a
                    href="http://www.portfolio.theshahriyar.com/html/tender/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img fluid={tenderPrev} alt="" />
                    <div className="project-details">
                      <p>Tender - Charity HTML5 Bootstrap Template</p>
                      <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-showcase">
                  <a
                    href="http://madison.envato.ithemeslab.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img fluid={madisonPrev} alt="" />
                    <div className="project-details">
                      <p>Madison - Charity Joomla Template</p>
                      <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>LESS</li>
                        <li>Joomla</li>
                        <li>Helix3</li>
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

export default Portfolio
