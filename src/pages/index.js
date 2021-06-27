import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Particles from "react-particles-js"
import YouTube from "react-youtube"
import { ImFlickr3 } from "react-icons/im"
import {
	SiAdobexd,
	SiAdobephotoshop,
	SiAdobeillustrator,
	SiAdobelightroomcc,
} from "react-icons/si"
import { Helmet } from "react-helmet"

import { Grid, Container, Chip } from "@material-ui/core"
import { MdPhotoLibrary, MdZoomOutMap } from "react-icons/md";
import Box from "@material-ui/core/Box"

import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/scrollbar/scrollbar.scss"

import "../styles/global.scss"
import { CDN } from "../components/constants"

https: SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export default function Home() {
	const [lightboxController, setLightboxController] = useState({
	toggler: false,
	slide: 1,
	})

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
		<div class="main-section"><Particles
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
	}} /></div>
		<section>
			<Container maxWidth={"xl"}>
				<Box class={"section-title"}>
				<h4 data-sal="slide-up"	data-sal-duration="300"data-sal-delay="300" data-sal-easing="ease">Full-Stack</h4>
				<h2 data-sal="slide-down" data-sal-duration="300" data-sal-delay="200" data-sal-easing="ease">Web Developer</h2>
				</Box>
				<Swiper
				spaceBetween={15}
				slidesPerView={1}
				navigation={false}
				pagination={{ clickable: true }}
				onSwiper={swiper => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
				breakpoints={{
					576: { slidesPerView: 2 },
					768: { slidesPerView: 2 },
					992: { slidesPerView: 2 },
					1200: {
					slidesPerView: 2,
					slidesPerColumnFill: "row",
					},
				}}
				>
					<SwiperSlide onClick={() => openLightboxOnSlide(1)}>
						<div class="zoom-container">
							<img class="site-logo"src={"./images/sites/pelican.jpg"}/>
							<p><MdZoomOutMap /><br></br>Learn More</p>
							</div>
							<h3>Pelican Products Inc.</h3>
							<h4>Web Developer/Designer</h4>
					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(2)}>
						<div class="zoom-container">
							<img class="site-logo"src={"./images/sites/filmtools.jpg"}/>
							<p><MdZoomOutMap /><br></br>Learn More</p>
						</div>
						<h3>Filmtools</h3>
						<h4>Web Developer</h4>
					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(3)}>
						<div class="zoom-container">
							<img class="site-logo"src={"./images/sites/mab-digital.jpg"}/>
							<p><MdZoomOutMap /><br></br>Learn More</p>
						</div>
						<h3>MAB Digital</h3>
						<h4>Web Developer</h4>
					</SwiperSlide>
				</Swiper>
				<p class="subtext">Freelance work for</p>

				{/* <Grid container alignContent="center" alignItems="center" spacing={1}>
					<Grid item lg={6}>
					<img class="site-logo"src={"./images/sites/isometric-pelican.png"}/>
					<h5>Web Developer/Designer</h5>
					<h3>PELICAN PRODUCTS</h3>
					<p> World's best case manufacturer. Weatherproof, dustproof, crushproof protection for guns, film equipment, and much more.</p>
					<Box mt={2}>
						<Chip label="PHP" />
						<Chip label="MySQL" />
						<Chip label="Javascript" />
						<Chip label="Jquery" />
						<Chip label="Bootstrap" />
					</Box>
					</Grid>
					<Grid item lg={6}>
					<img
						class="site-logo"
						src={"./images/sites/isometric-filmtools.png"}
					/>
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
					<Grid item lg={6}>
					<img
						class="site-logo"
						src={"./images/sites/isometric-filmtools.png"}
					/>
					<h5>Web Developer</h5>
					<h3>Freelance</h3>
					<p>
						Motion picture and digital video equipment supplies with
						eCommerce and brick and mortar store.
					</p>
					<Box mt={2}>
						<Chip label="Magento 2" />
						<Chip label="Magento Enterprise" />
					</Box>
					</Grid>
					<Grid item lg={6}>
					<img class="site-logo" src={"./images/sites/isometric-pelican.png"}/>
					<h5>Web Developer</h5>
					<h3>MAB Digital</h3>
					<p>Full service digital brand agency based in Orange County supporting fitness, health, and other local businesses.</p>
					<Box mt={2}>
						<Chip label="HTML" />
						<Chip label="CSS" />
						<Chip label="Javascript" />
					</Box>
					</Grid>
				</Grid>
				*/}
			</Container>
		</section>
		<section>
			<Container maxWidth={"xl"}>
				<Box class={"section-title"}>
				<h4>Daily UI</h4>
				<h2>Designs</h2>
				</Box>
				<Swiper
				spaceBetween={15}
				slidesPerView={1}
				navigation={false}
				pagination={{ clickable: true }}
				onSwiper={swiper => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
				breakpoints={{
					576: { slidesPerView: 2 },
					768: { slidesPerView: 2 },
					992: { slidesPerView: 2 },
					1200: {
					slidesPerView: 2,
					slidesPerColumnFill: "row",
					},
				}}
				>
					<SwiperSlide onClick={() => openLightboxOnSlide(1)}>
						<div class="zoom-container">
						<img class="img-ui" src={CDN + "daily-ui/404-t.jpg"} alt="404 page"></img>
						<p><MdZoomOutMap /><br></br>View Full</p>
					</div>
					<h3>404 Page</h3>
					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(4)}>
						<div class="zoom-container">
						<img class="img-ui"src={CDN + "daily-ui/direct-messaging-t.jpg"} alt="direct messaging"></img>
						<p><MdZoomOutMap /><br></br>View Full</p>
						</div>
						<h3>Direct Messaging</h3>
					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(7)}>
						<div class="zoom-container">
							<img class="img-ui" src={CDN + "daily-ui/landing-page-t.jpg"} alt="landing-page"></img>
							<p><MdZoomOutMap /><br></br>View Full</p>
						</div>
						<h3>Landing Page</h3>
				   </SwiperSlide>
						<SwiperSlide onClick={() => openLightboxOnSlide(3)}>
						<div class="zoom-container">
							<img class="img-ui" src={CDN + "daily-ui/search-t.jpg"} akt="search"></img>
							<p><MdZoomOutMap /><br></br>View Full</p>
						</div>
						<h3>Search</h3>
					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(2)}>
						<div class="zoom-container">
							<img class="img-ui" src={CDN + "daily-ui/credit-card-t.jpg"} alt="credit card"></img>
							<p><MdZoomOutMap /><br></br>View Full</p>
						</div>
						<h3>Credit Card Checkout</h3>
					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(5)}>
						<div class="zoom-container">
							<img class="img-ui" src={CDN + "daily-ui/flash-message-t.jpg"} alt="flash message"></img>
							<p><MdZoomOutMap /><br></br>View Full</p>
						</div>
						<h3>Flash Message</h3>
					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(6)}>
						 <div class="zoom-container">
							 <img class="img-ui" src={CDN + "daily-ui/settings-t.jpg"} alt="settings"></img>
							 <p><MdZoomOutMap /><br></br>View Full</p>
						</div>
						<h3>Settings</h3>
					</SwiperSlide>
				</Swiper>
				<p class="subtext">Designed with Adobe XD, Adobe Illustrator and Figma</p>
			</Container>
		</section>
		<section>
			<Container maxWidth={"xl"}>
				<Box class={"section-title"}>
				<div data-sal="slide-down" data-sal-duration="300" data-sal-delay="400"data-sal-easing="ease"><h4>Shots, everybody</h4></div>
				<div data-sal="slide-down" data-sal-duration="300" data-sal-delay="200" data-sal-easing="ease">
					<h2>PHOTOGRAPHY</h2>
				</div>
				</Box>
				<Swiper
					spaceBetween={15}
					slidesPerView={2}
					navigation={false}
					onSwiper={swiper => console.log(swiper)}
					onSlideChange={() => console.log("slide change")}
					pagination={{ clickable: true }}
					breakpoints={{
						576: { slidesPerView: 1 },
						768: { slidesPerView: 1 },
						992: { slidesPerView: 1 },
						1200: {
						slidesPerView: 2,
						slidesPerColumnFill: "row",
						},
					}}
				>
					<SwiperSlide onClick={() => openLightboxOnSlide(1)}>
						<Link to="/graduation-portraits">
						<div class="zoom-container">
							<img class="img-ui"src={CDN + "photography/grads.jpg"} alt="grads"></img>
							<p><MdPhotoLibrary /><br></br>View Album</p>
						</div>
						<h3>Graduation Portraits</h3>
						</Link>
					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(2)}>
						<Link to="/portraits">
						<div class="zoom-container">
							<img class="img-ui" src={CDN + "photography/portraits.jpg"} alt="portraits"></img>
							<p><MdPhotoLibrary /><br></br>View Album</p>
						</div>
						<h3>Portraits</h3>
						</Link>
					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(3)}>
						<Link to="/weddings-engagements">
						<div class="zoom-container">
							<img class="img-ui" src={CDN + "photography/weddings.jpg"} alt="weddings"></img>
							<p><MdPhotoLibrary /><br></br>View Album</p>
						</div>
						<h3>Weddings & Engagements</h3>
						</Link>
					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(4)}>
						<Link to="/companies">
						<div class="zoom-container">
							<img
							class="img-ui"
							src={CDN + "photography/companies.jpg"}
							alt="companies"
							></img>
							<p><MdPhotoLibrary /><br></br>View Album</p>
						</div>
						<h3>Companies</h3>
						</Link>
					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(5)}>
						<Link to="/banquets-events">
						<div class="zoom-container">
							<img
							class="img-ui"
							src={CDN + "photography/events.jpg"}
							alt="events"
							></img>
							<p><MdPhotoLibrary /><br></br>View Album</p>
						</div>
						<h3>Banquets & Events</h3>
						</Link>
					</SwiperSlide>
				</Swiper>
				<p class="subtext">Shot with Nikon D750</p>
			</Container>
		</section>
		<Footer></Footer>
	</Layout>
	)
}
