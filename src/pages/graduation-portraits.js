import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import ContactPhotos from "../components/contact-photos"

import { Grid, Container } from "@material-ui/core"
import Box from "@material-ui/core/Box"

import Gallery from "react-photo-masonry"

import { CDN } from "../components/constants"

import "../styles/global.scss"

export default function weddingsGallery() {
    const photos = [
      {
        src: CDN + "photography/grads/grad-1.jpg",
        width: 4,
        height: 6,
      },
      {
        src: CDN + "photography/grads/grad-2.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/grads/grad-3.jpg",
        width: 4,
        height: 6,
      },
      {
        src: CDN + "photography/grads/grad-4.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/grads/grad-5.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/grads/grad-6.jpg",
        width: 4,
        height: 6,
      },
      {
        src: CDN + "photography/grads/grad-7.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/grads/grad-8.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/grads/grad-9.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/grads/grad-10.jpg",
        width: 4,
        height: 6,
      },
      {
        src: CDN + "photography/grads/grad-11.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/grads/grad-12.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/grads/grad-13.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/grads/grad-14.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/grads/grad-15.jpg",
        width: 4,
        height: 6,
      },
      {
        src: CDN + "photography/grads/grad-16.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/grads/grad-17.jpg",
        width: 4,
        height: 6,
      },
      {
        src: CDN + "photography/grads/grad-18.jpg",
        width: 4,
        height: 6,
      },
      {
        src: CDN + "photography/grads/grad-19.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/grads/grad-20.jpg",
        width: 4,
        height: 6,
      },
      {
        src: CDN + "photography/grads/grad-21.jpg",
        width: 4,
        height: 6,
      },
      {
        src: CDN + "photography/grads/grad-22.jpg",
        width: 4,
        height: 6,
      },
      {
        src: CDN + "photography/grads/grad-23.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/grads/grad-24.jpg",
        width: 4,
        height: 6,
      },
      {
        src: CDN + "photography/grads/grad-25.jpg",
        width: 6,
        height: 4,
      }, {
        src: CDN + "photography/grads/grad-26.jpg",
        width: 4,
        height: 6,
      }, {
        src: CDN + "photography/grads/grad-27.jpg",
        width: 6,
        height: 4,
      }, {
        src: CDN + "photography/grads/grad-28.jpg",
        width: 6,
        height: 4,
      }, {
        src: CDN + "photography/grads/grad-29.jpg",
        width: 6,
        height: 4,
      }, {
        src: CDN + "photography/grads/grad-30.jpg",
        width: 4,
        height: 6,
      }, {
        src: CDN + "photography/grads/grad-31.jpg",
        width: 6,
        height: 4,
      }, {
        src: CDN + "photography/grads/grad-32.jpg",
        width: 6,
        height: 4,
      }, {
        src: CDN + "photography/grads/grad-33.jpg",
        width: 4,
        height: 6,
      },
      {
        src: CDN + "photography/grads/grad-34.jpg",
        width: 6,
        height: 4,
      },
       {
        src: CDN + "photography/grads/grad-35.jpg",
        width: 6,
        height: 4,
      },
       {
        src: CDN + "photography/grads/grad-36.jpg",
        width: 6,
        height: 4,
      },
       {
        src: CDN + "photography/grads/grad-37.jpg",
        width: 6,
        height: 4,
      },
       {
        src: CDN + "photography/grads/grad-38.jpg",
        width: 4,
        height: 6,
      },
       {
        src: CDN + "photography/grads/grad-39.jpg",
        width: 6,
        height: 4,
      },
       {
        src: CDN + "photography/grads/grad-40.jpg",
        width: 6,
        height: 4,
      },
       {
        src: CDN + "photography/grads/grad-41.jpg",
        width: 6,
        height: 4,
      }, {
        src: CDN + "photography/grads/grad-42.jpg",
        width: 6,
        height: 4,
      },
      {
        src: CDN + "photography/grads/grad-43.jpg",
        width: 6,
        height: 4,
      },

{
        src: CDN + "photography/grads/grad-44.jpg",
        width: 6,
        height: 4,
      },

{
        src: CDN + "photography/grads/grad-45.jpg",
        width: 6,
        height: 4,
      },

{
        src: CDN + "photography/grads/grad-46.jpg",
        width: 4,
        height: 6,
      },
    ]

    return (
      <Layout>
        <section>
          <Container maxWidth={"xl"}>
          <Grid
            display={"flex"}
            alignItems={"center"}
            alignContent={"center"}
            justify={"space-between"}
          >
            <h5>One Degree Hotter</h5>
            <h2>Graduation Portraits</h2>
            <Box>
              <Gallery photos={photos} direction={"column"}/>
            </Box>
            <ContactPhotos></ContactPhotos>
          </Grid>
          </Container>
        </section>
        <Footer></Footer>
      </Layout>
    )
}