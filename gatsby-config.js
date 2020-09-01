/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Instituição OUT',
    description: 'A nossa gente é a nossa causa!',
    lang: 'pt-br',
    siteUrl: 'https://out-revamp.netlify.app',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `siteImages`,
        path: `${__dirname}/src/assets/siteImages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `aboutUs`,
        path: `${__dirname}/src/assets/aboutUs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `works`,
        path: `${__dirname}/src/assets/works/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `calendar`,
        path: `${__dirname}/src/assets/calendar/`,
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        '@components': path.join(__dirname, 'src', 'components'),
        '@containers': path.join(__dirname, 'src', 'containers'),
        '@assets': path.join(__dirname, 'src', 'assets'),
        '@hooks': path.join(__dirname, 'src', 'hooks'),
        '@pages': path.join(__dirname, 'src', 'pages'),
        '@styles': path.join(__dirname, 'src', 'styles'),
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`300`, `400`, `500`, `600`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Instituição OUT`,
        short_name: `OUT`,
        start_url: `/`,
        background_color: `#151515`,
        theme_color: `#192d3e`,
        display: `minimal-ui`,
        icon: `src/assets/siteImages/favicon.ico`,
      },
    },
  ],
};
