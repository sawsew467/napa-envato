import { Box, Link, Typography } from "@mui/material";
import React from "react";

const styles = {
  footerItem: {
    color: "#A6A6A4",
    fontSize: "16px",
    textDecoration: "none",
    marginTop: "20px",
  },
  iconItem: {
    width: "20px",
    height: "20px",
    margin: "0 10px",
    color: "#A6A6A4",
  },
};

function Footer() {
  return (
    <>
      <Box
        sx={{
          paddingTop: {
            xs: "70px",
            sm: "120px",
          },
          paddingBottom: "20px",
          paddingLeft: {},
          paddingRight: {},
          backgroundColor: "#212121",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "366px",
              sm: "696px",
              md: "1176px",
            },
            display: "flex",
            flexDirection: "row",
            margin: "0 auto",
            flexWrap: "wrap",
            paddingBottom: {
              xs: "20px",
              sm: "0",
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "50%",
                md: "calc(100% / 3)",
              },
            }}
          >
            <div>
              <img alt="" src={require("../../assets/logo_4.png")}></img>
            </div>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "'Arimo', sans-serif",

                color: "#fff",
                lineHeight: "22px",
                marginTop: "45px",
              }}
            >
              Call us
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#FF824C",
                margin: "10px 0",
                fontWeight: "500",
                lineHeight: "27px",
                letterSpacing: "0.01em",
                fontFamily: "'Arimo', sans-serif",
              }}
            >
              925-465-3762
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#A6A6A4",
                marginBottom: "16px",
                fontFamily: "'Arimo', sans-serif",
              }}
            >
              2627 Park Street, San Francisco, CA
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#A6A6A4",
                marginBottom: "16px",
                fontFamily: "'Arimo', sans-serif",
              }}
            >
              Support@droitlab.com
            </Typography>
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "50%",
                md: "25%",
              },
              display: "flex",
              flexDirection: "column",
              marginTop: {
                xs: "30px",
                sm: "0",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "'Arimo', sans-serif",

                color: "#fff",
                lineHeight: "24px",
                marginBottom: "15px",
              }}
            >
              About Us
            </Typography>
            <Link color={"inherit"} sx={styles.footerItem}>
              About Agency
            </Link>
            <Link color={"inherit"} sx={styles.footerItem}>
              About Business
            </Link>
            <Link color={"inherit"} sx={styles.footerItem}>
              Our Mission
            </Link>
            <Link color={"inherit"} sx={styles.footerItem}>
              Our History
            </Link>
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "50%",
                md: "25%",
              },
              display: "flex",
              flexDirection: "column",
              marginTop: {
                xs: "30px",
                sm: "0",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "'Arimo', sans-serif",

                color: "#fff",
                lineHeight: "24px",
                marginBottom: "15px",
              }}
            >
              Workflow
            </Typography>
            <Link color={"inherit"} sx={styles.footerItem}>
              Contact Us
            </Link>
            <Link color={"inherit"} sx={styles.footerItem}>
              Classic Fullwidth
            </Link>
            <Link color={"inherit"} sx={styles.footerItem}>
              Classic Boxed
            </Link>
            <Link color={"inherit"} sx={styles.footerItem}>
              Creative Boxed
            </Link>
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "50%",
                md: "calc(100% / 6)",
              },
              display: "flex",
              flexDirection: "column",
              marginTop: {
                xs: "30px",
                sm: "0",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "'Arimo', sans-serif",

                color: "#fff",
                lineHeight: "24px",
                marginBottom: "15px",
              }}
            >
              Help & Support
            </Typography>
            <Link color={"inherit"} sx={styles.footerItem}>
              Support
            </Link>
            <Link color={"inherit"} sx={styles.footerItem}>
              FAQ
            </Link>
            <Link color={"inherit"} sx={styles.footerItem}>
              Privacy
            </Link>
            <Link color={"inherit"} sx={styles.footerItem}>
              Term & conditions
            </Link>
            <Link color={"inherit"} sx={styles.footerItem}>
              Reporting
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              justifyContent: "space-between",
              alignItems: {
                xs: "center",
                sm: "flex-start",
              },
              paddingTop: {
                xs: "30px",
                sm: "80px",
                md: "170px",
              },
              width: "100%",
              lineHeight: "36px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                color: "#909090",
                paddingBottom: "20px",
                lineHeight: "36px",
                fontFamily: "'Arimo', sans-serif",
              }}
            >
              © 2022 Terra. All Rights Reserved
            </Typography>
            <Box
              sx={{
                display: "flex",
                // justifyContent: "space-between",
              }}
            >
              <Link sx={styles.iconItem}>
                <i
                  sx={{
                    fontSize: "20px",
                  }}
                  className="fa-brands fa-instagram"
                ></i>
              </Link>
              <Link sx={styles.iconItem}>
                <i
                  sx={{
                    fontSize: "20px",
                  }}
                  className="fa-brands fa-dribbble"
                ></i>
              </Link>
              <Link sx={styles.iconItem}>
                <i
                  sx={{
                    fontSize: "20px",
                  }}
                  className="fa-brands fa-behance"
                ></i>
              </Link>
              <Link sx={styles.iconItem}>
                <i
                  sx={{
                    fontSize: "20px",
                  }}
                  className="fa-brands fa-spotify"
                ></i>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
