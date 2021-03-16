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

import Timeline from "@material-ui/lab/Timeline"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"

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
        {/* <h1>ERROLD TUMAQUE</h1> */}
        <Grid>
          <p>A full-stack web developer</p>
          <p>Photographer</p>
          <p>Musician</p>
        </Grid>
      </div>

      <section>
        {/* <div class="bg-line"></div> */}
        <Container maxWidth={"xl"}>
          <Box class={"section-title"}>
            <h5>The Journey so Far</h5>
            <h2>TIMELINE</h2>
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
                  <Typography>Pelican</Typography>
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
                  <Typography>Freelance</Typography>
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
                  <Typography>Filmtools</Typography>
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
                  <Typography>MAB Digital</Typography>
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
                  <Typography>CSULB</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>
          <Grid
            container
            direction="row"
            alignContent={"flex-start"}
            alignItems={"flex-start"}
            justify={"flex-start"}
          >
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
                  <Chip label="PHP" />
                  <Chip label="MySQL" />
                  <Chip label="MongoDB" />
                  <Chip label="NodeJS" />
                  <Chip label="AWS" />
                  <Chip label="Laravel" />
                </div>
              </Box>
            </Grid>
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
        {/* <div class="bg-ridge"></div> */}
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
            alignContent={"centert"}
            alignItems={"center"}
            justify={"flex-start"}
            spacing={2}
          >
            <Grid item md={4} xs={12}>
              <Box mb={5}>
                <Link to="/weddings-engagements">
                  <img src={"./images/photography/weddings.jpg"}></img>
                  <h3>Weddings & Engagements</h3>
                </Link>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box mb={5}>
              <Link to="/graduation-portraits">
                <img src={"./images/photography/grads.jpg"}></img>
                <h3>Graduation Portraits</h3>
              </Link>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box mb={5}>
              <Link to="/portraits">
                <img src={"./images/photography/portraits.jpg"}></img>
                <h3>Portraits</h3>
              </Link>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box mb={5}>
              <Link to="/companies">
                <img src={"./images/photography/companies.jpg"}></img>
              </Link>
              <h3>Companies</h3>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box mb={5}>
              <Link to="/banquets-events">
                <img src={"./images/photography/events.jpg"}></img>
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
        <Container maxWidth={"xl"}>
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
