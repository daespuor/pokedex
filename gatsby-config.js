module.exports = {
  siteMetadata: {
    title: "Pokedex",
    siteUrl: "http://yourdomain.com",
    description:
      "This is a site to show all the pokemon discovered in the Kanto region",
    image:
      "https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `resources`,
        path: `${__dirname}/src/pages/resources/`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages/resources`,
      },
    },
    `gatsby-remark-images`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
        ],
        defaultLayouts: {
          resources: require.resolve("./src/components/MarkdownLayout.js"),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "2q2juiz3",
        dataset: "production",
      },
    },
  ],
};
