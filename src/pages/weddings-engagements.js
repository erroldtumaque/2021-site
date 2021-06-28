import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import ContactPhotos from "../components/contact-photos"
import Particles from "react-particles-js"

import { Grid, Container } from "@material-ui/core"
import Box from "@material-ui/core/Box"

import Gallery from "react-photo-masonry"
import { Helmet } from "react-helmet"

import { CDN } from "../components/constants"

import "../styles/global.scss"

export default function weddingsGallery() {
	const photos = [
		{
		src: CDN + "photography/weddings/ar-1.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/ar-2.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/ar-3.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/ar-4.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/ar-5.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/weddings/ar-6.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/ar-7.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/ar-8.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/weddings/ar-9.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/ar-10.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/ar-11.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/weddings/ar-12.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/ar-13.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/ar-14.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/ar-15.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/rm-2.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/rm-3.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/weddings/rm-4.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/rm-5.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/rm-6.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/rm-7.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/rm-8.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/rm-9.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/rm-10.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/rm-11.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/rm-12.jpg",
		width: 4,
		height: 6,
		},

		{
		src: CDN + "photography/weddings/rm-14.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/weddings/rm-15.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/weddings/rm-16.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/rm-13.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/aa-1.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/aa-2.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/aa-3.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/aa-4.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/aa-5.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/aa-6.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/aa-7.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/aa-8.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/aa-9.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/aa-10.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/jr-1.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/weddings/jr-1.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/weddings/jr-2.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/jr-3.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/weddings/jr-4.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/jr-5.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/weddings/jr-6.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/jr-7.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/jr-8.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/weddings/jr-9.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/jr-10.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/weddings/jr-11.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/jr-12.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/jk-1.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/jk-2.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/jk-3.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/jk-4.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/weddings/jk-5.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/weddings/jk-6.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/jk-7.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/lm-1.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/lm-2.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/weddings/lm-3.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/lm-4.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/lm-5.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/lm-6.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/weddings/lm-7.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/weddings/lm-8.jpg",
		width: 6,
		height: 4,
		},

	]

	return (
		<Layout>
			<div className="application">
				<Helmet>
					<meta charSet="utf-8" />
					<title>Weddings & Engagements | Errold</title>
					<link rel="canonical" href="https://www.errold.com" />
				</Helmet>
			</div>
			<div class="animated-bar">
				<Particles
					params={{
						"particles": {
							"number": {
								"value": 10
							},
							"size": {
								"value": 3
							}
						},
						"interactivity": {
							"events": {
								"onhover": {
									"enable": true,
									"mode": "repulse"
								}
							}
						}
					}}
				/>
			</div>
			<section>
			<Container maxWidth={"xl"}>
				<Grid
				display={"flex"}
				alignItems={"center"}
				alignContent={"center"}
				justify={"space-between"}
				>
				<h2>Weddings & Engagements</h2>
				<Box>
					<Gallery photos={photos} direction={"row"}/>
				</Box>
				<ContactPhotos></ContactPhotos>
				</Grid>
				</Container>
			</section>
			<Footer></Footer>
		</Layout>
	)
}
