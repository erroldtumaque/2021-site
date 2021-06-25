import React from "react"
import { Link } from "gatsby"
import { Grid, Hidden, Container } from "@material-ui/core"

export default function Layout({ children }) {
  return (
    <div class="main">
      <header>
        <Container maxWidth={"xl"}>
          <nav>
            <Grid
              container
              alignItems={"center"}
              justify={"space-between"}
              direction={"row"}
            >
              <Grid item xs={3}>
                {/* <Link
                  to="/"
                  style={{ textShadow: `none`, backgroundImage: `none` }}
                >
                  <img class="site-logo" src={"./images/Errold-Logo.png"} />
                </Link> */}
              </Grid>
              <Hidden mdDown>
                <Grid container xs={8}>
                  <Grid
                    container
                    item
                    alignItems={"right"}
                    justify={"flex-end"}
                  >
                    <ul style={{ listStyle: `none`, textAlign: "center" }}>
                      {/* <li>
                        <a
                          href={
                            "./errold-tumaque-fullstack-developer-resume.pdf"
                          }
                          target="_blank"
                        >
                          RESUME
                        </a>
                      </li> */}
                      {/* <li>
                        <a href="mailto:errold.tumaque@gmail.com">CONTACT</a>
                      </li> */}
                    </ul>
                  </Grid>
                </Grid>
              </Hidden>
              <Hidden lgUp>
                <Grid container xs={8}>
                  <Grid
                    container
                    item
                    alignItems={"right"}
                    justify={"flex-end"}
                  >
                  </Grid>
                </Grid>
              </Hidden>
            </Grid>
          </nav>
        </Container>
      </header>
      {children}
    </div>
  )
}