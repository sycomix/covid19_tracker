require('dotenv').config()

const mirage = '#1b262c'
const white = 'white'

module.exports = {
  siteMetadata: {
    title: `MindsDB Covid-19 gui`,
    description: `MindsDB Covid-19 gui`,
    author: `MindsDB`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sass',
    'gatsby-plugin-emotion',
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
        name: `MindsDB Covid App`,
        short_name: `MindsDB Covid`,
        start_url: `/`,
        background_color: white,
        theme_color: mirage,
        display: `standalone`,
        icon: `src/images/mindsDB_icon.jpeg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,{
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '@': './',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/lib/typography.js',
      },
    },
  ],
}
