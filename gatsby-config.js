/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: `ONG Out`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
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
            family: `Nunito Sans`,
            variants: [`400`],
          },
          {
            family: `Montserrat`,
            variants: [`200`, `300`, `400`, `500`, `700`],
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
  ],
};
