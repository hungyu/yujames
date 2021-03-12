/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: '羽匠空間設計',
    description: '設計，一切的起點，貼近需求，便是設計的目的。工程，讓設計呈現於你我眼前，實踐您心中藍圖。',
    keywords: ['設計', '室內設計', '空間設計'],
    siteURL: 'http://www.yujames.com', // No trailing slash allowed!
    siteImage: '/preview.png', // Path to your image you placed in the 'static' folder
    twitterUsername: 'ss',
    author: {
      name: 'Josh'
    }
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#353e4a`,
        theme_color: `#353e4a`,
        display: `minimal-ui`,
        icon: `static/favicon2.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-theme-wordpress-mdx',
      options: {
        // Requiered
        sourceWordpress: {
          sourcePost: true,
          sourcePage: true
        },
        // Requiered
        sourceMdxPosts: true,
        // config optional
        headerHeight: 64,
        sideBarWidth: 240,
        navButtonTheme: {
          showButtonTheme: false
          // text: 'Change',
          // colorsModes: ['deep', 'purple']
        },
         colorModes: {
          default: 'light'
        }, 
        logo: `src/images/logo2.png` // This path is relative to the root of the site.
      }
    }
  ]
}
