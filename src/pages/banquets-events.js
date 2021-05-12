import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import ContactPhotos from "../components/contact-photos"

import { Grid } from "@material-ui/core"
import Box from "@material-ui/core/Box"

import Gallery from "react-photo-masonry"

import { CDN } from "../components/constants"

import "../styles/global.scss"

export default function weddingsGallery() {
    const photos = [
      {
        src: CDN + "photography/banquets/apo-01.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-02.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-03.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-1.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-2.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-3.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-4.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-5.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-6.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-7.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-8.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-9.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-10.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-11.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-12.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-13.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-14.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-15.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-16.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-17.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-18.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-19.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/apo-20.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/bap-1.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/bap-2.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/mar-1.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/mar-2.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/alia-1.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/alia-2.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/alia-3.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/alia-4.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/banquets/alia-5.jpg",
        width: 6,
        height: 4,
      },
    ]

    return (
      <Layout>
        <section>
          <Grid 
            display={"flex"}
            alignItems={"center"}
            alignContent={"center"}
            justify={"space-between"}
          >
            <h5>Special Moments</h5>
            <h2>Banquets & Events</h2>
            <Box>
              <Gallery photos={photos} direction={"column"}/>
            </Box>
            <ContactPhotos></ContactPhotos>
          </Grid>
        </section>
        <Footer></Footer>
      </Layout>
    )
}