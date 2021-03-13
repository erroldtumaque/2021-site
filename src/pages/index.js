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
import { GiGuitarBassHead, GiGuitarHead, GiPianoKeys, GiDrum, GiMicrophone } from "react-icons/gi"
import { ImFlickr3 } from "react-icons/im"
import {
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobelightroomcc,
} from "react-icons/si"
import { BiPhotoAlbum } from "react-icons/bi"

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

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

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
        content:
          "Hollow Knight, Breath of the Wild, and Outer Wilds",
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
      modestBranding: 1
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
      <div class="main-section">
        <h1>ERROLD TUMAQUE</h1>
        <Grid>
          <p>A full-stack web developer</p>
          <p>Photographer</p>
          <p>Musician</p>
        </Grid>
      </div>

      <section>
        <div class="bg-line"></div>
        <Container
          maxWidth={"xl"}
          data-sal="fade"
          data-sal-duration="300"
          data-sal-easing="ease"
        >
          <Box class={"section-title"}>
            <h5>The Journey so Far</h5>
            <h2>TIMELINE</h2>
          </Box>
          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            navigation
            // centeredSlides
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <img src={"./images/sites/pelican.jpg"}></img>
              <img
                class="logo logo-invert"
                src={"./images/sites/pelican-logo.png"}
              ></img>
              <Grid
                display={"flex"}
                alignItems={"center"}
                alignContent={"center"}
                justify={"space-between"}
              >
                <h3>
                  Pelican <span class="position">Web Developer</span>
                </h3>
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <img src={"./images/sites/filmtools.jpg"}></img>
              <img class="logo" src={"./images/sites/ft-logo.png"}></img>
              <Grid
                display={"flex"}
                alignItems={"center"}
                alignContent={"center"}
                justify={"space-between"}
              >
                <h3>
                  Filmtools <span class="position">Junior Web Developer</span>
                </h3>
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <img src={"./images/sites/filmtools.jpg"}></img>
              <img class="logo" src={"./images/sites/ft-logo.png"}></img>
              <Grid
                display={"flex"}
                alignItems={"center"}
                alignContent={"center"}
                justify={"space-between"}
              >
                <h3>
                  Freelance <span class="position">Web Developer</span>
                </h3>
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <img src={"./images/sites/mab-digital.jpg"}></img>
              <img class="logo" src={"./images/sites/mab-logo.png"}></img>
              <Grid
                display={"flex"}
                alignItems={"center"}
                alignContent={"center"}
                justify={"space-between"}
              >
                <h3>
                  MAB Digital{" "}
                  <span class="position">Web Development Intern</span>
                </h3>
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <img src={"./images/sites/graduation.jpg"}></img>
              <Grid
                display={"flex"}
                alignItems={"center"}
                alignContent={"center"}
                justify={"space-between"}
              >
                <h3>
                  CSULB <span class="position">B.S. Computer Science</span>
                </h3>
              </Grid>
            </SwiperSlide>
          </Swiper>
          <Grid
            container
            direction="row"
            alignContent={"flex-start"}
            alignItems={"flex-start"}
            justify={"flex-start"}
          >
            <Grid item lg={"3"}>
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
            </Grid>
            <Grid item lg={"3"}>
              <p>Back-End</p>
              <div>
                <Chip label="PHP" />
                <Chip label="MySQL" />
                <Chip label="MongoDB" />
                <Chip label="NodeJS" />
                <Chip label="AWS" />
                <Chip label="Laravel" />
              </div>
            </Grid>
            <Grid item lg={"3"}>
              <p>CMS</p>
              <div>
                <Chip label="Wordpress" />
                <Chip label="Magento" />
              </div>
            </Grid>
            <Grid item lg={"3"}>
              <p>Editors</p>
              <div>
                <Chip label="Atom" />
                <Chip label="VS Code" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Daily UI Designs */}
      <section>
        <div class="bg-dotted"></div>
        <Container
          maxWidth={"xl"}
          data-sal="fade"
          data-sal-duration="300"
          data-sal-easing="ease"
        >
          <Box class={"section-title"}>
            <h5>Modern ideas for pages that don't actually exist (yet)</h5>
            <h2>Daily UI Designs</h2>
          </Box>
          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            navigation
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 2,
                slidesPerColumnFill: "row",
              },
            }}
          >
            <SwiperSlide onClick={() => openLightboxOnSlide(1)}>
              <img class="img-ui" src={"./images/daily-ui/404.jpg"}></img>
              <h3>404 Page</h3>
              {/* <h3>404 Page</h3> */}
            </SwiperSlide>
            <SwiperSlide onClick={() => openLightboxOnSlide(2)}>
              <img
                class="img-ui"
                src={"./images/daily-ui/credit-card.jpg"}
              ></img>
              <h3>Credit Card Checkout</h3>
              {/* <h3>Credit Card Checkout</h3> */}
            </SwiperSlide>
            <SwiperSlide onClick={() => openLightboxOnSlide(3)}>
              <img class="img-ui" src={"./images/daily-ui/search.jpg"}></img>
              {/* <h3>Search</h3> */}
              <h3>Search</h3>
            </SwiperSlide>
            <SwiperSlide onClick={() => openLightboxOnSlide(4)}>
              <img
                class="img-ui"
                src={"./images/daily-ui/direct-messaging.jpg"}
              ></img>
              <h3>Direct Messaging</h3>
            </SwiperSlide>
            <SwiperSlide onClick={() => openLightboxOnSlide(5)}>
              <img
                class="img-ui"
                src={"./images/daily-ui/flash-message.jpg"}
              ></img>
              <h3>Flash Message</h3>
            </SwiperSlide>
            <SwiperSlide onClick={() => openLightboxOnSlide(6)}>
              <img class="img-ui" src={"./images/daily-ui/settings.jpg"}></img>
              <h3>Settings</h3>
            </SwiperSlide>
            <SwiperSlide onClick={() => openLightboxOnSlide(7)}>
              <img
                class="img-ui"
                src={"./images/daily-ui/landing-page-t.jpg"}
              ></img>
              <h3>Landing Page</h3>
            </SwiperSlide>
          </Swiper>
          <Grid
            container
            direction={"row"}
            alignContent={"flex-start"}
            alignItems={"flex-start"}
            justify={"flex-start"}
          >
            <Grid item lg={"3"}>
              <p>Design tools</p>
              <div>
                <SiAdobexd class="si-icon" />
                <SiAdobeillustrator class="si-icon" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Photography */}
      <section>
        <div class="bg-ridge"></div>
        <Container maxWidth={"xl"}>
          <Box class={"section-title"}>
            <div
              data-sal="slide-down"
              data-sal-duration="300"
              data-sal-delay="400"
              data-sal-easing="ease"
            >
              <h5>Shots, everybody</h5>
            </div>
            <div
              data-sal="slide-down"
              data-sal-duration="300"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              <h2>PHOTOGRAPHY</h2>
            </div>
          </Box>
          <div
            div
            data-sal="slide-up"
            data-sal-duration="300"
            data-sal-delay="200"
            data-sal-easing="ease"
          >
            <Swiper
              spaceBetween={40}
              navigation
              onSwiper={swiper => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerColumn: 2,

                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 2,
                  slidesPerColumnFill: "row",
                },
              }}
            >
              <SwiperSlide>
                <Link to="/weddings-engagements">
                  <img src={"./images/photography/weddings.jpg"}></img>
                  <h3>Weddings & Engagements</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/graduation-portraits">
                  <img src={"./images/photography/grads.jpg"}></img>
                  <h3>Graduation Portraits</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/portraits">
                  <img src={"./images/photography/portraits.jpg"}></img>
                  <h3>Portraits</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/companies">
                  <img src={"./images/photography/companies.jpg"}></img>
                </Link>
                <h3>Companies</h3>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/banquets-events">
                  <img src={"./images/photography/events.jpg"}></img>
                </Link>
                <h3>Banquets & Events</h3>
              </SwiperSlide>
            </Swiper>
          </div>
          <Box>
            <Grid
              container
              alignContent={"flex-start"}
              alignItems={"flex-start"}
              justify={"flex-start"}
            >
              <Grid item lg={4} xs={12}>
                <p>Editing Tools:</p>
                <SiAdobephotoshop class="si-icon" />
                <SiAdobelightroomcc class="si-icon" />
              </Grid>
            </Grid>
          </Box>
          <Box mt={3}>
            <p>
              Interested in shooting with me? Don't be shy and{" "}
              <a class="underline" href="#">
                contact me
              </a>
            </p>
          </Box>
        </Container>
      </section>

      <section>
        <div class="bg-double"></div>
        <Container
          maxWidth={"xl"}
          data-sal="slide-up"
          data-sal-duration="300"
          data-sal-easing="ease-out-back"
        >
          <Box class={"section-title"}>
            <h5>Lights & Sounds</h5>
            <h2>MUSIC</h2>
          </Box>
          <Swiper
            spaceBetween={40}
            navigation
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerColumn: 2,

                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 2,
                slidesPerColumnFill: "row",
              },
            }}
          >
            <SwiperSlide>
              <YouTube videoId="lTr66MRNStA" opts={opts} />
              <h3>Is Everybody Going Crazy?</h3>
            </SwiperSlide>
            <SwiperSlide>
              <YouTube videoId="ot57y2Cn6q8" opts={opts} />
              <h3>Know Me</h3>
            </SwiperSlide>
            <SwiperSlide>
              <YouTube videoId="0tup7AN09S0" opts={opts} />
              <h3>Get Your Wish</h3>
            </SwiperSlide>
            <SwiperSlide>
              <YouTube videoId="w5viZMC5y88" opts={opts} />
              <h3>Sad Machine</h3>
            </SwiperSlide>
            <SwiperSlide>
              <YouTube videoId="vJW-r-ScJY4" opts={opts} />
            </SwiperSlide>
            <SwiperSlide>
              <YouTube videoId="om6Bygc6p3Y" opts={opts} />
            </SwiperSlide>
            <SwiperSlide>
              <YouTube videoId="Zs3qOKOneAg" opts={opts} />
            </SwiperSlide>
            <SwiperSlide>
              <YouTube videoId="33OY3aZjNH8" opts={opts} />
            </SwiperSlide>
            <SwiperSlide>
              <YouTube videoId="3Z9vileQAmI" opts={opts} />
            </SwiperSlide>
          </Swiper>

          <Box mt={5}>
            <Grid
              container
              // alignContent={"start"}
              // alignItems={"start"}
              justify={"start"}
            >
              <Grid item lg={6} xs={12}>
                <p>Instruments:</p>
                <Tooltip title="guitar" arrow>
                  <GiGuitarHead class="gi-icon" alt="guitar" />
                </Tooltip>
                <GiGuitarBassHead class="gi-icon" alt="bass" />
                <GiPianoKeys class="gi-icon" alt="piano" />
                <GiDrum class="gi-icon" alt="drum" />
                <GiMicrophone class="gi-icon" alt="microphone" />
              </Grid>
              {/* <Grid item lg={6} xs={12}>
                <p>DAW of choice:</p>
                <img class="invert" src={"./images/logos/ableton.png"} />
              </Grid> */}
            </Grid>
          </Box>
        </Container>
      </section>

      <Footer></Footer>
    </Layout>
  )
}
