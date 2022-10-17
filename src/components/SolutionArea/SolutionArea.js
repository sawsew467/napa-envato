import { Container, Link, Typography } from "@mui/material";
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
    paddingBottom: "120px",
  },
  heading: {
    width: "900px",
    margin: "0 auto",
    display: "inline",
    fontSize: "60px",
    fontWeight: "500",
    color: "#212121",
    fontFamily: "'Fraunces', serif",
    textAlign: "center",
    lineHeight: "78px",
  },
  subHeading: {
    fontSize: "18px",
    color: "#000",
    lineHeight: "78px",
    marginBottom: "48px",
    fontFamily: "'Arimo', sans-serif",
  },
  container: {
    width: "1176px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "24px",
    padding: "0",
  },
  solutionItem: {
    width: "calc(50% - 76px)",
    padding: "32px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: "6px",
    boxShadow: "1px 1px 10px rgb(98 124 137 / 10%)",
    position: "relative",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#212121",
    fontFamily: "'Arimo', sans-serif",
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
      <Box className="container-fluid" style={styles.containerFluid}>
        <Typography style={styles.heading}>
          Singular&nbsp;
          <Typography
            sx={{
              display: "inline",
              fontSize: "60px",
              fontWeight: "500",
              color: "#FC6B75",
              fontFamily: "'Fraunces', serif",
              position: "relative",
              lineHeight: "78px",
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
          &nbsp;to all <br></br> of your activities
        </Typography>
        <Typography sx={styles.subHeading}>
          You said I'd feel better if I just worked hard without lifting me up
        </Typography>
        <Container style={styles.container}>
          {solutionList.map((solution, index) => (
            <Box key={index} style={styles.solutionItem}>
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
                  style={{
                    objectFit: "contain",
                  }}
                ></img>
              </Box>
              <Typography sx={styles.title}>{solution.title}</Typography>
              <Typography sx={styles.subTitle}>{solution.subTitle}</Typography>
              <Link sx={styles.link} color="inherit">
                Read more
              </Link>
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
}

export default SolutionArea;
