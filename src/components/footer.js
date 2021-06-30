import React from "react"
import { Grid, Container } from "@material-ui/core"

import { FaLinkedinIn, FaFacebookF, FaInstagram, FaGithub,   } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
	return (
	<footer>
		<Container maxWidth={"xl"}>
			<Grid container>
				<Grid item xs={12} alignContent={"center"} alignItems={"center"} justify={"center"} align="center">
				<ul>
					<li><a href="mailto:errold.tumaque@gmail.com" target="_blank" rel="noreferrer"><SiGmail class="footer-icon" aria-label="email" />Email</a></li>
					<li><a href="https://www.linkedin.com/in/errold/" target="_blank" rel="noreferrer">LinkedIn</a></li>
					<li><a href="https://github.com/erroldtumaque" target="_blank" rel="noreferrer">	Github	</a></li>
					<li><a href="https://www.facebook.com/errold.tumaque" target="_blank" rel="noreferrer">	Facebook</a></li>
					<li><a href="https://www.instagram.com/erroldtumaque/?hl=ene"target="_blank" rel="noreferrer">Instagram</a></li>
				</ul>
				</Grid>
				</Grid>
		</Container>
	</footer>
	)
}
