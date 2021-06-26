import React from "react"
import { Container, Grid} from "@material-ui/core"
import Box from "@material-ui/core/Box"


export default function ContactPhotos() {
	return (
	<Grid
		display={"flex"}
		alignItems={"center"}
		alignContent={"center"}
		justify={"space-between"}
	>
		<Box my={4}>
		<p>Interested in shooting with me? Contact me</p>
		</Box>
	</Grid>
	)
}
