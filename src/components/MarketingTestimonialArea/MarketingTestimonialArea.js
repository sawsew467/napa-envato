import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";

const styles = {
  containerFluid: {
    backgroundColor: "#212121",
    padding: {
      xs: "80px 0 0 0",
      sm: "100px 0 0 0",
      md: "100px 0",
    },
    overflow: "hidden",
    position: "relative",
  },
  container: {
    width: {
      xs: "366px",
      sm: "696px",
      md: "1176px",
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
        <CardMedia
          component="img"
          image={require("../../assets/marketingTestimonialArea/plus.png")}
          sx={{
            transform: {
              xs: "rotate(37deg)",
              sm: "none",
            },
            display: {
              // xs: "none",
              md: "block",
            },
            position: "absolute",
            objectFit: "none",
            width: "auto",
            left: {
              xs: "165px",
              sm: "165px",
              md: "167px",
            },
            top: {
              xs: "219px",
              sm: "219px",
              md: "240px",
            },
          }}
          alt="Paella dish"
        />
        <CardMedia
          component="img"
          image={require("../../assets/marketingTestimonialArea/line_angle.png")}
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
            position: "absolute",
            objectFit: "none",
            width: "auto",
            left: {
              xs: "",
              sm: "138px",
              md: "142px",
            },
            bottom: {
              xs: "",
              sm: "452px",
              md: "124px",
            },
          }}
          alt="Paella dish"
        />
        <CardMedia
          component="img"
          image={require("../../assets/marketingTestimonialArea/star.png")}
          sx={{
            display: {
              // xs: "none",
              md: "block",
            },
            position: "absolute",
            objectFit: "none",
            width: "auto",
            right: {
              xs: "172px",
              sm: "172px",
              md: "172px",
            },
            top: {
              xs: "184px",
              sm: "184px",
              md: "184px",
            },
          }}
          alt="Paella dish"
        />
        <CardMedia
          component="img"
          image={require("../../assets/marketingTestimonialArea/round.png")}
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
            position: "absolute",
            objectFit: "none",
            width: "auto",
            right: {
              xs: "146px",
              sm: "146px",
              md: "146px",
            },
            bottom: {
              xs: "439px",
              sm: "439px",
              md: "86px",
            },
          }}
          alt="Paella dish"
        />
        <Container sx={styles.container}>
          <Grid container={true} className="row" sx={styles.row}>
            <Grid item={true} md={6} xs={12}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "38px",
                    sm: "58px",
                    md: "58px",
                  },
                  color: "#fff",
                  fontFamily: "'Fraunces', serif",
                  lineHeight: "1.2",
                  fontWeight: "500",
                }}
              >
                Happy customer
                <Typography
                  sx={{
                    fontSize: {
                      xs: "38px",
                      sm: "58px",
                      md: "58px",
                    },
                    color: "#FF824C",
                    fontFamily: "'Fraunces', serif",
                    lineHeight: "1.2",
                    fontWeight: "500",
                  }}
                >
                  testimonials
                </Typography>
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "18px",
                    sm: "24px",
                  },
                  fontWeight: "400",
                  color: "#fff",
                  marginTop: "40px",
                  marginBottom: "30px",
                  fontFamily: "'Arimo', sans-serif",
                  lineHeight: "34px",
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
                  lineHeight: "36px",
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
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  marginTop: "30px",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#ff824c",
                  }}
                ></div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#555",
                  }}
                ></div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#555",
                  }}
                ></div>
              </Box>
            </Grid>
            <Grid
              item={true}
              sx={{
                width: {
                  xs: "100%",
                  md: "calc(100% - 715px)",
                },
              }}
            >
              <Box
                sx={{
                  marginTop: {
                    // xs: "130px",
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
                    marginTop: {
                      xs: "130px",
                      md: "0",
                    },
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
