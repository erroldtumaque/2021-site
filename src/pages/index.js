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
//res.cloudinary.com/dtwcwprxv/image/upload/

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
      <div class="main-section">
        <Grid
          className="h-full"
          container
          spacing={0}
          align="center"
          alignItems="centerh"
          justify="center"
          direction="column"
        >
          <h1>ERROLD TUMAQUE</h1>
          <Grid>
            <p>Full-stack web developer</p>
            <p>Photographer</p>
            <p>Musician</p>
          </Grid>
        </Grid>
      </div>
      <section>
        {/* <div class="bg-line"></div> */}
        <Container maxWidth={"xl"}>
          <Box class={"section-title"}>
            <h5
              data-sal="slide-up"
              data-sal-duration="300"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              The Journey so Far
            </h5>
            <h2
              data-sal="slide-down"
              data-sal-duration="300"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              TIMELINE
            </h2>
          </Box>
          <Box>
            <Timeline>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography>2018 - Present</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Box pb={5}>
                    <img
                      class="company-logo invert"
                      src={CDN + "sites/pelican-logo.png"}
                    ></img>
                    <Typography fontWeight={700}>
                      <h4>Pelican Products Inc.</h4>
                      <p>Web Developer/Designer</p>
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography>2016 - Present</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Box pb={5}>
                    <img
                      class="company-logo invert"
                      src={CDN + "Errold-Logo.png"}
                    ></img>
                    <Typography>
                      <h4>Freelance</h4>
                      <p>Web Developer</p>
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography>2016 - 2018</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>
                    <Box pb={5}>
                      <img
                        class="company-logo"
                        src={CDN + "sites/ft-logo.png"}
                      ></img>
                      <Typography>
                        <h4>Filmtools</h4>
                        <p>Junior Web Developer</p>
                      </Typography>
                    </Box>
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography>2016 - 2018</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>
                    <Box pb={5}>
                      <img
                        class="company-logo"
                        src={CDN + "sites/mab-logo.png"}
                      ></img>
                      <Typography>
                        <h4>MAB Digital</h4>
                        <p>Web Development Intern</p>
                      </Typography>
                    </Box>
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography>2011 - 2016</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>
                    <Box pb={5}>
                      <img
                        class="company-logo invert"
                        src={CDN + "sites/csulb-logo.png"}
                      ></img>
                      <Typography>
                        <h4>CSULBl</h4>
                        <p>B.S. Computer Science</p>
                      </Typography>
                    </Box>
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>
          <Grid
            container
            direction="row"
            alignContent={"flex-start"}
            alignItems={"flex-start"}
            justify={"center"}
          >
            <Grid item lg={"4"} xs={12}>
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
            <Grid item lg={"4"} xs={12}>
              <Box mb={5}>
                <p>Back-End</p>
                <div>
                  <Chip label="PHP" />
                  <Chip label="MySQL" />
                  <Chip label="MongoDB" />
                  <Chip label="NodeJS" />
                  <Chip label="AWS" />
                  <Chip label="Laravel" />
                </div>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            alignContent={"flex-start"}
            alignItems={"flex-start"}
            justify={"center"}
          >
            <Grid item lg={"4"} xs={12}>
              <Box mb={5}>
                <p>CMS</p>
                <div>
                  <Chip label="Wordpress" />
                  <Chip label="Magento" />
                </div>
              </Box>
            </Grid>
            <Grid item lg={"4"} xs={12}>
              <Box mb={5}>
                <p>Editors</p>
                <div>
                  <Chip label="Atom" />
                  <Chip label="VS Code" />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Daily UI Designs */}
      <section>
        <div class="bg-dotted"></div>
        <Container maxWidth={"xl"}>
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
                slidesPerView: 3,
                slidesPerColumnFill: "row",
              },
            }}
          >
            <SwiperSlide onClick={() => openLightboxOnSlide(1)}>
              <img class="img-ui" src={CDN + "daily-ui/search.jpg"}></img>
              <h3>404 Page</h3>
            </SwiperSlide>
            <SwiperSlide onClick={() => openLightboxOnSlide(2)}>
              <img class="img-ui" src={CDN + "daily-ui/credit-card.jpg"}></img>
              <h3>Credit Card Checkout</h3>
            </SwiperSlide>
            <SwiperSlide onClick={() => openLightboxOnSlide(3)}>
              <img class="img-ui" src={CDN + "daily-ui/search.jpg"}></img>
              {/* <h3>Search</h3> */}
              <h3>Search</h3>
            </SwiperSlide>
            <SwiperSlide onClick={() => openLightboxOnSlide(4)}>
              <img
                class="img-ui"
                src={CDN + "daily-ui/direct-messaging.jpg"}
              ></img>
              <h3>Direct Messaging</h3>
            </SwiperSlide>
            <SwiperSlide onClick={() => openLightboxOnSlide(5)}>
              <img
                class="img-ui"
                src={CDN + "daily-ui/flash-message.jpg"}
              ></img>
              <h3>Flash Message</h3>
            </SwiperSlide>
            <SwiperSlide onClick={() => openLightboxOnSlide(6)}>
              <img class="img-ui" src={CDN + "daily-ui/settings.jpg"}></img>
              <h3>Settings</h3>
            </SwiperSlide>
            <SwiperSlide onClick={() => openLightboxOnSlide(7)}>
              <img
                class="img-ui"
                src={CDN + "daily-ui/landing-page-t.jpg"}
              ></img>
              <h3>Landing Page</h3>
            </SwiperSlide>
          </Swiper>
          <Grid
            container
            direction={"row"}
            alignContent={"center"}
            alignItems={"center"}
            justify={"center"}
          >
            <Grid
              item
              xs={"12"}
              alignContent={"center"}
              alignItems={"center"}
              justify={"center"}
            >
              <Typography variant="p" align="center">
                <p align="center">Design tools</p>
                <div align="center">
                  <SiAdobexd class="si-icon" />
                  <SiAdobeillustrator class="si-icon" />
                </div>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Photography */}
      <section>
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
          <Grid
            container
            direction={"row"}
            alignContent={"center"}
            alignItems={"center"}
            justify={"center"}
            spacing={4}
          >
            <Grid item md={4} xs={12}>
              <Box mb={5}>
                <Link to="/weddings-engagements">
                  <div class="album-container">
                    <img
                      class="album"
                      src={CDN + "photography/weddings.jpg"}
                    ></img>
                  </div>
                  <h3>Weddings & Engagements</h3>
                </Link>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box mb={5}>
                <Link to="/graduation-portraits">
                  <div class="album-container">
                    <img
                      class="album"
                      src={CDN + "photography/grads.jpg"}
                    ></img>
                  </div>
                  <h3>Graduation Portraits</h3>
                </Link>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box mb={5}>
                <Link to="/portraits">
                  <div class="album-container">
                    <img
                      class="album"
                      src={CDN + "photography/portraits.jpg"}
                    ></img>
                  </div>
                  <h3>Portraits</h3>
                </Link>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box mb={5}>
                <Link to="/companies">
                  <div class="album-container">
                    <img
                      class="album"
                      src={CDN + "photography/companies.jpg"}
                    ></img>
                  </div>
                </Link>
                <h3>Companies</h3>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box mb={5}>
                <Link to="/banquets-events">
                  <div class="album-container">
                    <img
                      class="album"
                      src={CDN + "photography/events.jpg"}
                    ></img>
                  </div>
                </Link>
                <h3>Banquets & Events</h3>
              </Box>
            </Grid>
          </Grid>
          <Box>
            <Grid
              container
              alignContent={"flex-start"}
              alignItems={"flex-start"}
              justify={"flex-start"}
            >
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
            <p align="center">
              Interested in shooting with me? Don't be shy and{" "}
              <a class="underline" href="#">
                contact me
              </a>
            </p>
          </Box>
        </Container>
      </section>

      {/* <section>
        <div></div>
        <Container maxWidth={"xl"}>
          <Box class={"section-title"}>
            <h5>Lights & Sounds</h5>
            <h2>MUSIC</h2>
          </Box>
          <Grid
            container
            direction={"row"}
            alignContent={"center"}
            alignItems={"center"}
            justify={"center"}
          >
            <Grid item lg={2} justifyContent="center">
              <img
                class="cover-art"
                src={CDN + "cover-art/is-everybody-going-crazy.jpg"}
              ></img>
            </Grid>
            <Grid item lg={2}>
              <img class="cover-art" src={CDN + "cover-art/know-me.png"}></img>
            </Grid>
            <Grid item lg={2}>
              <img
                class="cover-art"
                src={CDN + "cover-art/get-your-wish.jpg"}
              ></img>
            </Grid>
            <Grid item lg={2}>
              <img class="cover-art" src={CDN + "cover-art/stay.jpg"}></img>
            </Grid>
            <Grid item lg={2}>
              <img
                class="cover-art"
                src={CDN + "cover-art/sad-machine.jpg"}
              ></img>
            </Grid>
            <Grid item lg={2}>
              <img
                class="cover-art"
                src={CDN + "cover-art/breathing.jpg"}
              ></img>
            </Grid>
            <Grid item lg={2}>
              <img
                class="cover-art"
                src={CDN + "cover-art/la-la-lost.png"}
              ></img>
            </Grid>
            <Grid item lg={2}>
              <img class="cover-art" src={CDN + "cover-art/babygirl.jpg"}></img>
            </Grid>
            <Grid item lg={2}>
              <img
                class="cover-art"
                src={CDN + "cover-art/before-he-cheats.jpg"}
              ></img>
            </Grid>
          </Grid>

          <Box mt={5}>
            <Grid container justify={"center"}>
              <Grid item lg={12} xs={12}>
                <p align="center">Instruments:</p>
                <div align="center">
                  <Tooltip title="guitar" arrow>
                    <GiGuitarHead class="gi-icon" alt="guitar" />
                  </Tooltip>
                  <GiGuitarBassHead class="gi-icon" alt="bass" />
                  <GiPianoKeys class="gi-icon" alt="piano" />
                  <GiDrum class="gi-icon" alt="drum" />
                  <GiMicrophone class="gi-icon" alt="microphone" />
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section> */}

      <Footer></Footer>
    </Layout>
  )
}
