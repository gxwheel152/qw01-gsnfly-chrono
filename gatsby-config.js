module.exports = {
  siteMetadata: {
    siteTitle: 'The QA Code',
    siteDescription:
      "A Site Dedicated to Living a Quality Life. We start with a few things we've learned by building Quality Infused Software, but that's just the beginning.",
    siteImage: '/qc512x512.png', // main image of the site for metadata
    siteUrl: 'https://theqacode.netlify.app/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'The Quality Code', // for example - 'Ivan Ganev'
    authorDescription: 'A Quality Infused Life ==> A Good Life!', // short text about the author
    avatar: '/qc512x512.png',
    twitterSite: '', // website account on twitter
    twitterCreator: 'https://twitter.com/gxwheel152', // creator account on twitter
    social: [
      {
        icon: `at`,
        url: `mailto:theqacode@gmail.com`
      },
      {
        icon: `twitter`,
        url: `https://twitter.com/gxwheel152`
      },
      {
        icon: `github`,
        url: `https://github.com/gxwheel152`
      },
      {
        icon: `node-js`,
        url: `https://www.npmjs.com/package/gatsby-theme-chronoblog`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/qc512x512.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
