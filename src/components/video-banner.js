import React from "react"
import { Grid } from "@material-ui/core"
import { spacing } from "@material-ui/system"
import Box from "@material-ui/core/Box"
import shadows from "@material-ui/system"
import Particles from "react-particles-js"

export default function VideoBanner() {
	return (
	<Box boxShadow={3} class="video-banner">
		<Particles
		params={{
			particles: {
			number: {
				value: 160,
				density: {
				enable: false,
				},
			},
			size: {
				value: 3,
				random: true,
				anim: {
				speed: 4,
				size_min: 0.3,
				},
			},
			line_linked: {
				enable: false,
			},
			move: {
				random: true,
				speed: 1,
				direction: "top",
				out_mode: "out",
			},
			},
			interactivity: {
			events: {
				onhover: {
				enable: true,
				mode: "bubble",
				},
				onclick: {
				enable: true,
				mode: "repulse",
				},
			},
			modes: {
				bubble: {
				distance: 250,
				duration: 2,
				size: 0,
				opacity: 0,
				},
				repulse: {
				distance: 400,
				duration: 4,
				},
			},
			},
		}}
		/>
		<div class="socials"></div>
		<Grid>
		<div class="description">
			{/* <p>Hi, I'm a full stack developer with a funny name.</p> */}
		</div>
		</Grid>
	</Box>
	)
}