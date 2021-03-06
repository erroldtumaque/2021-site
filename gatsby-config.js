module.exports = {
	siteMetadata: {
	title: "Errold",
	description:
		"Web Developer | Photographyer | Musician",
	url: "https://www.errold.com", 
	},
	plugins: [
	
	{
		resolve: `gatsby-plugin-typography`,
		options: {
		pathToConfigModule: `src/utils/typography`,
		},
	},
	`gatsby-plugin-sass`,
	`gatsby-transformer-sharp`,
	`gatsby-plugin-sharp`,
	`gatsby-plugin-scroll-reveal`,
	`gatsby-plugin-react-helmet`,
	],
}
