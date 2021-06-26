import React from "react"
import { Grid, Container } from "@material-ui/core"

import {
	IoLogoFacebook,
	IoLogoInstagram,
	IoLogoLinkedin,
	IoLogoGithub,
} from "react-icons/io5"
import { SiGmail } from "react-icons/si"

export default function Footer() {
	return (
	<footer>
		<Container maxWidth={"xl"}>
		<Grid container>
			<Grid
			item
			lg={3}
			xs={3}
			alignContent={"flex-start"}
			alignItems={"flex-start"}
			justify={"flex-start"}
			>
			<img
				class="site-logo logo-invert"
				src={"./images/Errold-Logo.png"}
			/>
			</Grid>
			<Grid item lg={6} xs={1}></Grid>
			<Grid
			item
			lg={3}
			xs={8}
			alignContent={"flex-end"}
			alignItems={"flex-end"}
			justify={"flex-end"}
			align="right"
			>
			<a href="mailto:errold.tumaque@gmail.com" target="_blank">
				<SiGmail class="si-icon footer-icon" />
			</a>
			<a href="https://www.linkedin.com/in/errold/" target="_blank">
				<IoLogoLinkedin class="io-icon footer-icon" />
			</a>

			<a href="https://github.com/erroldtumaque" target="_blank">
				<IoLogoGithub class="io-icon footer-icon" />
			</a>
			<a href="https://www.facebook.com/errold.tumaque" target="_blank">
				<IoLogoFacebook class="io-icon footer-icon" />
			</a>
			<a
				href="https://www.instagram.com/erroldtumaque/?hl=ene"
				target="_blank"
			>
				<IoLogoInstagram class="io-icon footer-icon" />
			</a>
			</Grid>
		</Grid>
		</Container>
	</footer>
	)
}