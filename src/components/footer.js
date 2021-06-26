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
				<Grid item xs={12} alignContent={"center"} alignItems={"center"} justify={"center"} align="center">
				<ul>
					<li><a href="mailto:errold.tumaque@gmail.com" target="_blank">Email</a></li>
					<li><a href="https://www.linkedin.com/in/errold/" target="_blank">LinkedIn</a></li>
					<li><a href="https://github.com/erroldtumaque" target="_blank">	Github	</a></li>
					<li><a href="https://www.facebook.com/errold.tumaque" target="_blank">	Facebook</a></li>
					<li><a href="https://www.instagram.com/erroldtumaque/?hl=ene"target="_blank">Instagram</a></li>
				</ul>
				</Grid>
				</Grid>
		</Container>
	</footer>
	)
}
