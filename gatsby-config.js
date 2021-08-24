module.exports = {
  siteMetadata: {
    siteTitle: `Akkkiiii site`,
    siteTitleAlt: `Cara - @lekoarts/gatsby-theme-cara`,
    siteHeadline: ``,
    siteUrl: `localhost:8080`,
    siteDescription: ``,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `Priyatham <priyathamsaichand@gmail.com>`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
   {
      resolve: `gatsby-plugin-mdx`,
      options: {
        lessBabel: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
  ],
}
