import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
import SwiperCore, { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Particles from "react-particles-js"
// import YouTube from "react-youtube"
import { Helmet } from "react-helmet"
import FsLightbox from 'fslightbox-react';

import { Container, Grid } from "@material-ui/core"
import { MdPhotoLibrary, MdZoomOutMap } from "react-icons/md";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaGithub,   } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import Box from "@material-ui/core/Box"

import "swiper/swiper.scss"
import 'swiper/swiper-bundle.css';

import "../styles/global.scss"
import { CDN } from "../components/constants"

SwiperCore.use([EffectCoverflow,Navigation, Pagination, Scrollbar, A11y])

export default function Home() {
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	});

	function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	}

	return (
	<Layout>
		<div className="application">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Errold | Full Stack Developer, Photographer, Musician</title>
				<link rel="canonical" href="https://www.errold.com" />
			</Helmet>
		</div>
		<div class="main-bar">
			<section className={"profile-section"}>
				<Grid container direction={"row"} alignItems={"center"} >
					<Grid lg={12} xs={12} container item alignItems={"center"} >
						<Grid container item alignItems={"center"} xs={12}>
							<Grid item className={"profile-img"}>
								<img src={CDN + "profile.jpg"} alt="profile"/>
							</Grid>
							<Grid>
								<h1>ERROLD</h1>
								<h5 data-sal="slide-down" data-sal-duration="600" data-sal-delay="300">Full Stack Developer | Photographer | Musician</h5>
								<Grid  container xs={12} item spacing={2}>
									<Grid item>
										<a href="mailto:errold.tumaque@gmail.com" target="_blank" rel="noreferrer"><SiGmail class="main-icon" aria-label="email" /></a>
									</Grid>
									<Grid item>
										<a href="https://www.linkedin.com/in/errold/" target="_blank" rel="noreferrer"><FaLinkedinIn class="main-icon" aria-label="linked in"/></a>
									</Grid>
									<Grid item>
										<a href="https://github.com/erroldtumaque" target="_blank" rel="noreferrer"><FaFacebookF class="main-icon" aria-label="facebook"/></a>
									</Grid>
									<Grid item>
										<a href="https://www.facebook.com/errold.tumaque" target="_blank" rel="noreferrer"><FaInstagram class="main-icon" aria-label="instagram" /></a>
									</Grid>
									<Grid item>
										<a href="https://www.instagram.com/erroldtumaque/?hl=ene"target="_blank" rel="noreferrer"><FaGithub class="main-icon" aria-label="github"/></a>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
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

					}}
				/>
			</section>
		</div>

		<section>
			<Container maxWidth={"xl"}>
				<Box class={"section-title"}>
					<h4>Projects/</h4>
					<h2>Websites</h2>
				</Box>
				<Swiper
					data-sal="fade" data-sal-duration="600"
					spaceBetween={0}
					slidesPerView={1}
					navigation={false}
					initialSlide={0}
					pagination={{ clickable: true }}
					onSwiper={swiper => console.log(swiper)}
					onSlideChange={() => console.log("slide change")}
					effect={'coverflow'}
					centeredSlides={true}
					coverflowEffect={{
						"rotate": 50,
						"stretch": 0,
						"depth": 100,
						"modifier": 1,
						"slideShadows": false
					}}
					breakpoints={{
						576: { slidesPerView: 1 },
						768: { initialSlide: 1, slidesPerView: 3 },
						992: { initialSlide: 1, slidesPerView: 3 },
						1200: {
							initialSlide: 1,
							slidesPerView: 3,
							slidesPerColumnFill: "row",
						},
					}}
				>
					<SwiperSlide>
						<div class="zoom-container">
							<img src={"./images/sites/pelican.jpg"} alt="pelican products"/>
							<p><MdZoomOutMap /><br></br>Learn More</p>
						</div>
						<h3>Pelican Products Inc.</h3>
					</SwiperSlide>
					<SwiperSlide>
						<div class="zoom-container">
							<img src={"./images/sites/filmtools.jpg"} alt="filmtools"/>
							<p><MdZoomOutMap /><br></br>Learn More</p>
						</div>
						<h3>Filmtools</h3>
					</SwiperSlide>

					<SwiperSlide>
						<div class="zoom-container">
							<img src={"./images/sites/mab-digital.jpg"} alt="mab digital"/>
							<p><MdZoomOutMap /><br></br>Learn More</p>
						</div>
						<h3>MAB Digital</h3>
					</SwiperSlide>
				</Swiper>
				<p class="subtext">Freelance work for</p>
			</Container>
		</section>
		<section>
			<Container maxWidth={"xl"}>
				<Box class={"section-title"}>
					<h4>Daily UI/</h4>
					<h2>Designs</h2>
				</Box>
				<Swiper
					data-sal="fade" data-sal-duration="600"
					spaceBetween={0}
					slidesPerView={1}
					navigation={false}
					initialSlide={0}
					pagination={{ clickable: true }}
					onSwiper={swiper => console.log(swiper)}
					effect={'coverflow'}
					centeredSlides={true}
					coverflowEffect={{
					  "rotate": 50,
					  "stretch": 0,
					  "depth": 100,
					  "modifier": 1,
					  "slideShadows": false
					}}
					breakpoints={{
						576: { slidesPerView: 1 },
						768: { initialSlide: 3, slidesPerView: 3 },
						992: { initialSlide: 3, slidesPerView: 3 },
						1200: {
							initialSlide: 3,
							slidesPerView: 3,
							slidesPerColumnFill: "row",
						},
					}}
				>
					<SwiperSlide  onClick={() => openLightboxOnSlide(1)}>
						<div class="zoom-container">
						<img class="img-ui" src={CDN + "daily-ui/404-t.jpg"} alt="404 page"></img>
						<p><MdZoomOutMap /><br></br>View Full</p>
					</div>
					<h3>404 Page</h3>
					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(2)}>
						<div class="zoom-container">
							<img class="img-ui" src={CDN + "daily-ui/landing-page-t.jpg"} alt="landing-page"></img>
							<p><MdZoomOutMap /><br></br>View Full</p>
						</div>
						<h3>Landing Page</h3>
				   </SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(3)}>
						<div class="zoom-container">
							<img class="img-ui" src={CDN + "daily-ui/search-t.jpg"} alt="search"></img>
							<p><MdZoomOutMap /><br></br>View Full</p>
						</div>
						<h3>Search</h3>
					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(4)}>
 						<div class="zoom-container">
 						<img class="img-ui"src={CDN + "daily-ui/direct-messaging-t.jpg"} alt="direct messaging"></img>
 						<p><MdZoomOutMap /><br></br>View Full</p>
 						</div>
 						<h3>Direct Messaging</h3>
 					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(5)}>
						<div class="zoom-container">
							<img class="img-ui" src={CDN + "daily-ui/credit-card-t.jpg"} alt="credit card"></img>
							<p><MdZoomOutMap /><br></br>View Full</p>
						</div>
						<h3>Credit Card Checkout</h3>
					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(6)}>
						<div class="zoom-container">
							<img class="img-ui" src={CDN + "daily-ui/flash-message-t.jpg"} alt="flash message"></img>
							<p><MdZoomOutMap /><br></br>View Full</p>
						</div>
						<h3>Flash Message</h3>
					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(7)}>
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
                    <h4>Shoots/</h4>
                    <h2>PHOTOGRAPHY</h2>
				</Box>
				<Swiper
					data-sal="fade" data-sal-duration="600"
					slidesPerView={1}
					navigation={false}
					onSwiper={swiper => console.log(swiper)}
					onSlideChange={() => console.log("slide change")}
					pagination={{ clickable: true }}
					initialSlide={0}
					effect={'coverflow'}
					centeredSlides={true}
					coverflowEffect={{
					  "rotate": 50,
					  "stretch": 0,
					  "depth": 100,
					  "modifier": 1,
					  "slideShadows": false
					}}
					breakpoints={{
						576: { slidesPerView: 1 },
						768: { initialSlide: 2, slidesPerView: 3 },
						992: { initialSlide: 2, slidesPerView: 3 },
						1200: {
							initialSlide: 2,
							slidesPerView: 3,
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
					<SwiperSlide onClick={() => openLightboxOnSlide(3)}>
						<Link to="/weddings-engagements">
						<div class="zoom-container">
							<img class="img-ui" src={CDN + "photography/weddings.jpg"} alt="weddings"></img>
							<p><MdPhotoLibrary /><br></br>View Album</p>
						</div>
						<h3>Weddings & Engagements</h3>
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
					<SwiperSlide onClick={() => openLightboxOnSlide(4)}>
						<Link to="/companies">
						<div class="zoom-container">
							<img class="img-ui" src={CDN + "photography/companies.jpg"} alt="companies"></img>
							<p><MdPhotoLibrary /><br></br>View Album</p>
						</div>
						<h3>Companies</h3>
						</Link>
					</SwiperSlide>
					<SwiperSlide onClick={() => openLightboxOnSlide(5)}>
						<Link to="/banquets-events">
						<div class="zoom-container">
							<img class="img-ui" src={CDN + "photography/events.jpg"} alt="events"></img>
							<p><MdPhotoLibrary /><br></br>View Album</p>
						</div>
						<h3>Banquets & Events</h3>
						</Link>
					</SwiperSlide>
				</Swiper>
				<p class="subtext">Shot with Nikon D750 DSLR<br></br><span>24mm; 50mm; 24-70mm; 85mm</span></p>
			</Container>
		</section>
		<Footer></Footer>

		<FsLightbox
			toggler={lightboxController.toggler}
			sources={[
				CDN + 'daily-ui/404.jpg',
				CDN + 'daily-ui/landing-page.jpg',
				CDN + 'daily-ui/search.jpg',
				CDN + 'daily-ui/direct-messaging.jpg',
				CDN + 'daily-ui/credit-card.jpg',
				CDN + 'daily-ui/flash-message.jpg',
				CDN + 'daily-ui/settings.jpg'
			]}
			slide={lightboxController.slide}
		/>
	</Layout>
	)
}
