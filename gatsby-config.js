/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: "Shahriyar Ahmed - Front End Developer",
    description:
      "I'm Shahriyar Ahmed and a Frontend Web Developer. I'm expert in HTML, CSS3, jQuery, Javascript, Bootstrap Framework, React, Angular Photoshop and many more. Generally, I develop UI of an application and website and also convert PSD to HTML website. All of my website is 100% responsive and those are perfect in all size of devices and all of those are modern browser supported. My HTML code is W3C validated and SEO friendly.",
    author: "TheShahriyar",
    image: "/thumbnail.jpg",
    siteUrl: "https://theshahriyar.com",
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
