module.exports = {
  siteMetadata: {
    title: "Pokedex",
    description:
      "This is a site to show all the pokemon discovered in the Kanto region",
  },
  plugins: [
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
