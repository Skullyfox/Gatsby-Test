require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://skullyfox-tv.fr`,
    description: `Site web de SkullyfoxTV -- En Développement`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    'gatsby-plugin-postcss',
  ],
}