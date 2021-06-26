import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
import VideoBanner from "../components/video-banner"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Particles from "react-particles-js"
import YouTube from "react-youtube"
// Icons
import {
	GiGuitarBassHead,
	GiGuitarHead,
	GiPianoKeys,
	GiDrum,
	GiMicrophone,
} from "react-icons/gi"
import { ImFlickr3 } from "react-icons/im"
import {
	SiAdobexd,
	SiAdobephotoshop,
	SiAdobeillustrator,
	SiAdobelightroomcc,
} from "react-icons/si"
import { BiPhotoAlbum } from "react-icons/bi"
import { Helmet } from "react-helmet"
import Faq from "react-faq-component"

// Material Components
import { Grid, Typography, Container, Tooltip, Chip } from "@material-ui/core"
import Box from "@material-ui/core/Box"

import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/scrollbar/scrollbar.scss"

import "../styles/global.scss"
import FsLightbox from "fslightbox-react"
import { sizing } from "@material-ui/system"
import Timeline from "@material-ui/lab/Timeline"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"

import { CDN } from "../components/constants"

https: SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export default function Home() {
	const [lightboxController, setLightboxController] = useState({
	toggler: false,
	slide: 1,
	})

	const data = {
	title: "Q & A",
	rows: [
		{
		title: "What's your favorite movie? (Don't tell me it's Whiplash)",
		content: "...It's Whiplash",
		},
		{
		title: "Do you prefer coke with ice or no ice?",
		content: "No ice.",
		},
		{
		title: "Favorite board game?",
		content:
			"Monopoly (if I'm winning) and Telestrations cause it's hilarious",
		},
		{
		title: "Best video games?",
		content: "Hollow Knight, Breath of the Wild, and Outer Wilds",
		},
	],
	}

	const opts = {
		width: "100%",
		height: "500px",
		playerVars: {
			autoplay: 0,
			controls: 0,
			showInfo: 0,
			modestBranding: 1,
		},
		}

		function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number,
		})
	}

	return (
	<Layout>
		 <div className="application">
		<Helmet>
			<meta charSet="utf-8" />
			<title>Errold | Web Developer, Photographer, Musician</title>
			<link rel="canonical" href="https://www.errold.com" />
		</Helmet>
		</div>
		<div class="main-section">
		</div>
		<section>
		<Container maxWidth={"lg"}>
			<Box class={"section-title"}>
				<h4 data-sal="slide-up" data-sal-duration="300" data-sal-delay="300" data-sal-easing="ease">Full Stack
				</h4>
				<h2 data-sal="slide-down" data-sal-duration="300" data-sal-delay="200" data-sal-easing="ease">Web Developer
				</h2>
				</Box>
			<Box my={10}>
				<Grid container alignContent="center" alignItems="center" justify="">
					<Grid item lg={5} md={6} xs={12} data-sal="slide-up" data-sal-duration="300" data-sal-easing="ease" data-sal-delay="200">
					<img class="site-logo" src={"./images/sites/isometric-pelican.png"}/>
					</Grid>
					<Grid item md={1}></Grid>
					<Grid item md={5}>
					<h5 data-sal="slide-up" data-sal-duration="300" data-sal-easing="ease">
						Web Developer/Designer
					</h5>
					<h3>PELICAN PRODUCTS</h3>
					<p>World's best case manufacturer. Weatherproof, dustproof, crushproof protection for guns, film equipment, and much more.{" "}</p>
					<Box mt={2}>
						<Chip label="PHP" />
						<Chip label="MySQL" />
						<Chip label="Javascript" />
						<Chip label="Jquery" />
						<Chip label="Bootstrap" />
					</Box>
					</Grid>
				</Grid>
			</Box>
			<Grid container alignContent="center" alignItems="center" justify="">
				<Grid item lg={5}>
					<h5>Web Developer</h5>
					<h3>Filmtools</h3>
					<p>
					Motion picture and digital video equipment supplies with
					eCommerce and brick and mortar store.
					</p>
					<Box mt={2}>
						<Chip label="Magento 2" />
						<Chip label="Magento Enterprise" />
					</Box>
				</Grid>
				<Grid item lg={1}></Grid>
				<Grid item lg={5} xs={12} data-sal="slide-up" data-sal-duration="300" data-sal-easing="ease" data-sal-delay="200">
					<img class="site-logo" src={"./images/sites/isometric-filmtools.png"} />
				</Grid>
			</Grid>
			<Grid container alignContent="center" alignItems="center" justify="">
				<Grid item lg={5} xs={3} data-sal="slide-up" data-sal-duration="300" data-sal-easing="ease" data-sal-delay="200">
					<img class="site-logo" src={"./images/sites/isometric-pelican.png"} />
				</Grid>
				<Grid item lg={1}></Grid>
				<Grid item lg={5}>
					<h5>Web Developer</h5>
					<h3>MAB Digital</h3>
					<p>Full service digital brand agency based in Orange County supporting fitness, health, and other local businesses.
					</p>
					<Box mt={2}>
						<Chip label="HTML" />
						<Chip label="CSS" />
						<Chip label="Javascript" />
					</Box>
				</Grid>
			</Grid>
			<Box mt={10}>
				<Grid container direction="row" alignContent={"flex-start"} alignItems={"flex-start"}justify={"center"}>
					<Grid item lg={"6"} xs={12}>
						<Box mb={5}>
							<p>Front-End</p>
							<div>
							<Chip label="HTML5" />
							<Chip label="CSS3" />
							<Chip label="Javascript" />
							<Chip label="JQuery" />
							<Chip label="Bootstrap" />
							<Chip label="Material UI" />
							<Chip label="Flutter" />
							<Chip label="React" />
							<Chip label="Gatsby" />
							</div>
						</Box>
					</Grid>
					<Grid item lg={"6"} xs={12}>
						<Box mb={5}>
							<p>Back-End</p>
							<div>
							<Chip label="MongoDB" />
							<Chip label="NodeJS" />
							<Chip label="AWS" />
							<Chip label="Laravel" />
							</div>
						</Box>
					</Grid>
				</Grid>
				<Grid container direction="row" alignContent={"flex-start"} alignItems={"flex-start"} justify={"center"}>
					<Grid item lg={"6"} xs={12}>
						<Box mb={5}>
							<p>CMS</p>
							<div>
							<Chip label="Wordpress" />
							<Chip label="Magento" />
							</div>
						</Box>
					</Grid>
					<Grid item lg={"6"} xs={12}>
						<Box mb={5}>
							<p>Editors</p>
							<div>
							<Chip label="Atom" />
							<Chip label="VS Code" />
							</div>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Container>
		</section>
		<section>
		<Container maxWidth={"xl"}>
			<Box class={"section-title"}>
				<h4>Daily UI</h4>
				<h2>Designs</h2>
			</Box>
			<Swiper spaceBetween={40}slidesPerView={1} navigation
				onSwiper={swiper => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
				breakpoints={{
					576: { slidesPerView: 2, },
					768: { slidesPerView: 2, },
					992: { slidesPerView: 2, },
					1200: {
						slidesPerView: 3,
						slidesPerColumnFill: "row",
					},
				}}
			>
				<SwiperSlide onClick={() => openLightboxOnSlide(1)}>
					<img class="img-ui" src={CDN + "daily-ui/404.jpg"}></img>
					<h3>404 Page</h3>
				</SwiperSlide>
				<SwiperSlide onClick={() => openLightboxOnSlide(2)}>
					<img class="img-ui" src={CDN + "daily-ui/credit-card.jpg"}></img>
					<h3>Credit Card Checkout</h3>
				</SwiperSlide>
				<SwiperSlide onClick={() => openLightboxOnSlide(3)}>
					<img class="img-ui" src={CDN + "daily-ui/search.jpg"}></img>
					<h3>Search</h3>
				</SwiperSlide>
				<SwiperSlide onClick={() => openLightboxOnSlide(4)}>
					<img class="img-ui"src={CDN + "daily-ui/direct-messaging.jpg"}></img>
					<h3>Direct Messaging</h3>
				</SwiperSlide>
				<SwiperSlide onClick={() => openLightboxOnSlide(5)}>
					<img class="img-ui"src={CDN + "daily-ui/flash-message.jpg"}></img>
					<h3>Flash Message</h3>
				</SwiperSlide>
				<SwiperSlide onClick={() => openLightboxOnSlide(6)}>
					<img class="img-ui" src={CDN + "daily-ui/settings.jpg"}></img>
					<h3>Settings</h3>
				</SwiperSlide>
				<SwiperSlide onClick={() => openLightboxOnSlide(7)}>
					<img class="img-ui"src={CDN + "daily-ui/landing-page-t.jpg"}></img>
					<h3>Landing Page</h3>
				</SwiperSlide>
			</Swiper>
			<Grid container direction={"row"} alignContent={"center"} alignItems={"center"} justify={"center"}>
				<Grid item xs={"12"} alignContent={"center"} alignItems={"center"}justify={"center"}>
					<Typography variant="p" align="center">
					<p align="center">Design tools</p>
					<div align="center">
						<Chip
						avatar={<SiAdobexd class="logo-invert" />}
						label="Adobe XD"
						/>
						<Chip
						avatar={<SiAdobeillustrator class="logo-invert" />}
						label="Adobe Illustrator"
						/>
						<Chip label="Figma" />
					</div>
					</Typography>
				</Grid>
			</Grid>
		</Container>
		</section>
		<section>
			<Container maxWidth={"xl"}>
				<Box class={"section-title"}>
					<div data-sal="slide-down" data-sal-duration="300" data-sal-delay="400" data-sal-easing="ease">
						<h4>Shots, everybody</h4>
					</div>
					<div data-sal="slide-down" data-sal-duration="300"data-sal-delay="200" data-sal-easing="ease">
						<h2>PHOTOGRAPHY</h2>
					</div>
				</Box>
				<Swiper spaceBetween={40} slidesPerView={1} navigation
					onSwiper={swiper => console.log(swiper)}
					onSlideChange={() => console.log("slide change")}
					breakpoints={{
						576: { slidesPerView: 2,},
						768: { slidesPerView: 2,},
						992: {slidesPerView: 2,},
						1200: {
							slidesPerView: 3,
							slidesPerColumnFill: "row",
						},
					}}
				>
					<SwiperSlide onClick={() => openLightboxOnSlide(1)}>
						<img class="img-ui" src={CDN + "photography/grads.jpg"} alt="grads"></img>
						<h3>Graduation Portraits</h3>
					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(2)}>
						<img class="img-ui" src={CDN + "photography/portraits.jpg"} alt="portraits"></img>
						<h3>Portraits</h3>
					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(3)}>
						<img class="img-ui" src={CDN + "photography/weddings.jpg"} alt="weddings"></img>
						<h3>Weddings & Engagements</h3>
					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(4)}>
						<img class="img-ui" src={CDN + "photography/companies.jpg"} alt="companies"></img>
						<h3>Companies</h3>
					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(5)}>
						<img class="img-ui" src={CDN + "photography/events.jpg"} alt="events"></img>
						<h3>Banquets & Events</h3>
					</SwiperSlide>
				</Swiper>
				<Box>
					<Grid container alignContent={"flex-start"} alignItems={"flex-start"}justify={"flex-start"}>
						<Grid item lg={12} xs={12}>
						<p align="center">Editing Tools:</p>
						<div align="center">
							<SiAdobephotoshop class="si-icon" />
							<SiAdobelightroomcc class="si-icon" />
						</div>
						</Grid>
					</Grid>
				</Box>
				<Box mt={3}>
					<p align="center">Interested in shooting with me? Don't be shy and <a class="underline" href="#">contact me</a></p>
				</Box>
			</Container>
		</section>
		<Footer></Footer>
	</Layout>
	)
}
