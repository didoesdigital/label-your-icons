module.exports = {
  siteMetadata: {
    title: `Label Your Icons`,
    description: `Icons establish visual language and create visual interest. A label is a classifying name that adds clarity and aids navigation. When you add a text label to an icon, you immediately makes the interface more understandable and less bewildering to new users. Make the world a clearer place.`,
    author: `@didoesdigital`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `label-your-icons`,
        short_name: `lyi`,
        start_url: `/`,
        background_color: `#FF5858`,
        theme_color: `#FF5858`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
