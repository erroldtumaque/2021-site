/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
     {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Quattrocento Sans',
          'overpass',
          'pt sans',
          'nunito',
          'alegreya sans',
          'playfair display',
          'roboto'
        ]
      },
      display: 'swap'
    },
     {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-scroll-reveal`
  ],
}
