import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const styles = {
  containerFluid: {
    backgroundColor: "#212121",
    padding: {
      xs: "100px 0 0 0",
      md: "100px 0"
    },
    overflow: "hidden",
  },
  container: {
    width: {
      xs: "366px",
      sm: "696px",
      md: "936px",
    },
    margin: "0 auto",
    padding: "0 !important",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    justifyContent: "space-between",
    alignItems: {
      xs: "flex-start",
      md: "center",
    },
    // columnGap: "24px"
  },
};

function MarketingTestimonialArea() {
  return (
    <>
      <Box className="container-fluid" sx={styles.containerFluid}>
        <Container sx={styles.container}>
          <Grid container={true} className="row" sx={styles.row}>
            <Grid item={true} md={6} xs={12}>
              <Typography
                sx={{
                  fontSize: {
                    sm: "58px",
                    md: "60px",
                  },
                  color: "#fff",
                  fontFamily: "'Fraunces', serif",
                  lineHeight: "64px",
                }}
              >
                Happy customer
                <Typography
                  sx={{
                    fontSize: {
                      sm: "58px",
                      md: "60px",
                    },
                    color: "#FF824C",
                    fontFamily: "'Fraunces', serif",
                    lineHeight: "78px",
                  }}
                >
                  testimonials
                </Typography>
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "400",
                  color: "#fff",
                  marginTop: "40px",
                  marginBottom: "34px",
                  fontFamily: "'Arimo', sans-serif",
                }}
              >
                “Connect to a multitude of sources like files and feeds, popular
                business apps, cloud and onpremise databases, custom apps and
                more”
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "24px",
                  fontStyle: "italic",
                  display: "inline-block",
                  fontFamily: "'Arimo', sans-serif",
                }}
              >
                Jonah Jameson,&nbsp;
                <Typography
                  sx={{
                    fontSize: "16px",
                    display: "inline-block",
                    fontFamily: "'Arimo', sans-serif",
                  }}
                >
                  CEO of youngtech
                </Typography>
              </Typography>
            </Grid>
            <Grid
              item={true}
              
              sx={{
                width: {
                  xs: "100%",
                  md: "calc(100% - 492px)",
                },
              }}
            >
              <Box
                sx={{
                  marginTop: {
                    xs: "130px",
                    md: "0",
                  },
                  position: "relative",
                  zIndex: "0",
                  width: {
                    sm: "516px",
                    md: "461px",
                  },
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    backgroundColor: "#bfbae4",
                    width: "100%",
                    height: "calc(100% - 85px)",
                    borderTopLeftRadius: "290px",
                    borderTopRightRadius: "290px",
                    zIndex: "-1",
                  }}
                ></Box>
                <div>
                  <img
                    src={require("../../assets/marketingTestimonialArea/chat.png")}
                    style={{
                      zIndex: "1",
                      margin: "0",
                      padding: "0",
                      display: "block",
                      position: "absolute",
                      top: "74px",
                      left: "36px",
                      transform: "rotate(6.035deg)",
                    }}
                  ></img>
                </div>
                <div>
                  <img
                    src={require("../../assets/marketingTestimonialArea/img_one.png")}
                    style={{
                      zIndex: "1",
                      margin: "0",
                      padding: "0",
                      display: "block",
                      position: "absolute",
                      bottom: "-38px",
                      left: "-38px",
                    }}
                  ></img>
                </div>
                <div>
                  <img
                    src={require("../../assets/marketingTestimonialArea/img_two.png")}
                    style={{
                      zIndex: "1",
                      margin: "0",
                      padding: "0",
                      display: "block",
                      position: "absolute",
                      bottom: "6px",
                      right: "-94px",
                    }}
                  ></img>
                </div>
                <div>
                  <img
                    src={require("../../assets/marketingTestimonialArea/testimonial_img.png")}
                    style={{
                      zIndex: "1",
                      margin: "0",
                      padding: "0",
                      display: "block",
                    }}
                  ></img>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default MarketingTestimonialArea;
