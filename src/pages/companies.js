import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import ContactPhotos from "../components/contact-photos"

import { Grid, Container } from "@material-ui/core"
import Box from "@material-ui/core/Box"

import Gallery from "react-photo-masonry"

import { CDN } from "../components/constants"

import "../styles/global.scss"

export default function CompaniesGallery() {
	const photos = [
		{
		src: CDN + "photography/companies/goji-1.jpg",
		width: 6,
		height: 4,
		},
		 {
		src: CDN + "photography/companies/goji-10.jpg",
		width: 4,
		height: 6,
		},
		{
		src: CDN + "photography/companies/goji-2.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/companies/goji-3.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/companies/goji-4.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/companies/goji-5.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/companies/goji-6.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/companies/goji-7.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/companies/goji-8.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/companies/goji-9.jpg",
		width: 6,
		height: 4,
		},

		{
		src: CDN + "photography/companies/thm-1.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/companies/thm-2.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/companies/thm-3.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/companies/thm-4.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/companies/thm-5.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/companies/thm-6.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/companies/perfetta-1.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/companies/perfetta-2.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/companies/perfetta-3.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/companies/perfetta-4.jpg",
		width: 16,
		height: 9,
		},
		{
		src: CDN + "photography/companies/perfetta-5.jpg",
		width: 16,
		height: 9,
		},
		{
		src: CDN + "photography/companies/perfetta-6.jpg",
		width: 6,
		height: 4,
		},
		{
		src: CDN + "photography/companies/perfetta-7.jpg",
		width: 6,
		height: 4,
		},
	]

	return (
		<Layout>
		<section>
			<Container maxWidth={"xl"}>
			<Grid
				display={"flex"}
				alignItems={"center"}
				alignContent={"center"}
				justify={"space-between"}
			>
				<h5>Goji, Perfetta, Tan Hong Mai</h5>
				<h2>COMPANIES</h2>
				<Box>
				<Gallery photos={photos} direction={"row"} />
				</Box>
				<ContactPhotos></ContactPhotos>
			</Grid>
			</Container>
		</section>
		<Footer></Footer>
		</Layout>
	)
}
