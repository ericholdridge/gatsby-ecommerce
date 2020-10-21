module.exports = {
  siteMetadata: {
    title: `Gatsby Ecommerce Restuarant`,
    description: `Create an ecommerce restuarant website using Gatsby, Graphql, and Sanity Studio`,
    author: `Eric Holdridge`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `a027g6t1`,
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        graphqlTag: "default",
      },
    },
  ],
}
