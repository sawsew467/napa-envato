import { Card, Container, Link, Typography } from "@mui/material";
import SettingSvg from "../../assets/solutionArea/setting.svg";
import LinkSvg from "../../assets/solutionArea/link1.svg";
import ChatSvg from "../../assets/solutionArea/chat.svg";
import SoftwareSvg from "../../assets/solutionArea/software.svg";
import { Box } from "@mui/system";
import React from "react";

const styles = {
  containerFluid: {
    backgroundColor: "#F4F4F4",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: {
      xs: "110px",
      sm: "150px",
    },
  },
  heading: {
    // width: {
    //   xs: "366px",
    //   sm: "696px",
    //   md: "936px",
    // },
    width: {
      xs: "100%",
      sm: "650px"
    },
    margin: "0 auto",
    display: "inline",
    fontSize: {
      xs: "38px",
      sm: "58px",
      md: "60px",
    },
    fontWeight: "600",
    color: "#212121",
    fontFamily: "'Fraunces', serif",
    textAlign: "center",
    lineHeight: {
      xs: "1.2",
      sm: "1.2",
    },
  },
  subHeading: {
    fontSize: "18px",
    color: "#494949",
    lineHeight: {
      xs: "30px",
      sm: "30px",
    },
    marginBottom: "75px",
    marginTop: {
      xs: "20px",
    },
    fontFamily: "'Arimo', sans-serif",
    textAlign: "center",
  },
  container: {
    width: {
      xs: "366px",
      sm: "696px",
      md: "1176px",
    },
    // width: "1176px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: "24px",
    rowGap: "30px",
    padding: "0 !important",
  },
  solutionItem: {
    width: {
      xs: "100%",
      md: "calc(50% - 76px)",
    },
    padding: {
      xs: "22px 15px",
      sm: "32px",
    },
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: "6px",
    boxShadow: "1px 1px 10px rgb(98 124 137 / 10%)",
    position: "relative",
  },
  title: {
    fontSize: {
      xs: "24px",
      sm: "24px",
    },
    fontWeight: "600",
    color: "#212121",
    fontFamily: "'Arimo', sans-serif",
    marginBottom: "8px",
    lineHeight: "1.2",
  },
  subTitle: {
    lineHeight: "30px",
    marginBottom: "10px",
    fontFamily: "'Arimo', sans-serif",
  },
  link: { fontSize: "16px", fontStyle: "italic" },
};

function SolutionArea() {
  const solutionList = [
    {
      title: "CRM Software",
      subTitle:
        "Connect to a multitude of sources like files and feeds, popular apps, cloud and onpremise databases, custom apps .",
      icon: SettingSvg,
      sharp: "service_shap",
    },
    {
      title: "Marketing Automation",
      subTitle:
        "Connect to a multitude of sources like files and feeds, popular apps, cloud and onpremise databases, custom apps .",
      icon: LinkSvg,
      sharp: "service_shap",
    },
    {
      title: "Helpdesk Software",
      subTitle:
        "Connect to a multitude of sources like files and feeds, popular apps, cloud and onpremise databases, custom apps .",
      icon: ChatSvg,
      sharp: "service_shap",
    },
    {
      title: "Sales Software",
      subTitle:
        "Connect to a multitude of sources like files and feeds, popular apps, cloud and onpremise databases, custom apps .",
      icon: SoftwareSvg,
      sharp: "service_shap",
    },
  ];
  return (
    <>
      <Box className="container-fluid" sx={styles.containerFluid}>
        <Typography sx={styles.heading}>
          Singular&nbsp;
          <Typography
            sx={{
              display: "inline",
              fontSize: {
                xs: "38px",
                sm: "58px",
                md: "60px",
              },
              fontWeight: "600",
              color: "#FC6B75",
              fontFamily: "'Fraunces', serif",
              position: "relative",
              lineHeight: {
                xs: "1.2",
                sm: "1.2",
              },
              marginBottom: "20px",
              "&::before": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "3px",
                backgroundColor: "#FC6B75",
                bottom: "0px",
              },
            }}
          >
            solution
          </Typography>
          &nbsp;to all of your activities
        </Typography>
        <Typography sx={styles.subHeading}>
          You said I'd feel better if I just worked hard without lifting me up
        </Typography>
        <Container sx={styles.container}>
          {solutionList.map((solution, index) => (
            <Card key={index} sx={styles.solutionItem}>
              <Box
                sx={{
                  height: "60px",
                  marginBottom: "15px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <img
                  src={solution.icon}
                  sx={{
                    objectFit: "contain",
                  }}
                ></img>
              </Box>
              <Typography sx={styles.title}>{solution.title}</Typography>
              <Typography sx={styles.subTitle}>{solution.subTitle}</Typography>
              <Link sx={styles.link} color="inherit">
                Read more
              </Link>
            </Card>
          ))}
        </Container>
      </Box>
    </>
  );
}

export default SolutionArea;
