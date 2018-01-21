/* eslint-disable no-unused-vars */
const fs = require('fs');
const dotenv = require('dotenv').config({ path: '.env.gatsby' });

module.exports = {
  siteMetadata: {
    title: 'Jeyser CRM',
    siteUrl: process.env.GATSBY_ROOT_URL,
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    // 'gatsby-plugin-sitemap',
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jeyser CRM',
        short_name: 'Jeyser CRM',
        start_url: '/',
        background_color: '#FBE4BE',
        theme_color: '#f39c12',
        display: 'standalone',
        lang: 'en',
        icons: [
          {
            src: '/jeyser-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            density: '4.0',
          },
        ],
      },
    },

    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          'gatsby-remark-external-links',
          'gatsby-remark-autolink-headers',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-images',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
  ],
};
