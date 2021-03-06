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

export default function portraitsGallery() {
	const photos = [
		{
		src: CDN + "photography/portraits/ann-1.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/ann-2.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/ann-3.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/ann-4.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/ann-5.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/ann-6.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/ann-7.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/caroline-1.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/caroline-2.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/caroline-3.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/krissie-1.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/krissie-2.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/krissie-3.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/krissie-4.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/krissie-5.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/krissie-6.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/krissie-7.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/ac-1.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/ac-2.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/ac-3.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/ac-4.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/ac-5.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/ac-6.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/megan-1.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/megan-2.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/megan-3.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/megan-4.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/megan-5.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/megan-6.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/megan-7.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/megan-8.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/megan-9.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/neil-1.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/neil-2.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/neil-3.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/neil-4.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/neil-5.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/neil-6.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/mealy-1.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/mealy-2.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/mealy-3.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/mealy-4.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/mealy-5.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/maricel-1.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/maricel-2.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/maricel-3.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/maricel-4.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/maricel-5.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/maricel-6.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/neiron-1.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/neiron-2.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/kat-1.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/kat-2.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/portraits/kat-3.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/kat-4.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/kat-5.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/kat-6.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/kat-7.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/rggg-1.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/rggg-2.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/rggg-3.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/rggg-4.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/rggg-5.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/portraits/rggg-6.jpg",
		width: 6,
		height: 4,
		},
	]

	return (
		<Layout>
			<div className="application">
				<Helmet>
					<meta charSet="utf-8" />
					<title>Portraits | Errold</title>
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
				<h2>Portraits</h2>
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
