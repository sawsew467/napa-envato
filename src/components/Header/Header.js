import {
  AppBar,
  CardMedia,
  IconButton,
  Link,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import React from "react";

const styles = {
  appBar: {
    backgroundColor: "#212121",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "5",
    boxShadow: "none",
  },
  toolbar: {
    padding: {
      xs: "0 15px !important",
      sm: "0 60px !important",
      md: "0 60px !important",
    },
    height: "104px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  list: {
    display: {
      xs: "none",
      md: "flex",
    },
    flexDirection: "row",
    alignItems: "center",
    gap: "22px",
    "& > :nth-child(1)": {
      color: "#FF824C",
    },
  },
  listItem: {
    padding: "0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "16px",
    color: "#fff",
    gap: "5px",
    height: "104px",
    cursor: "pointer",
    transition: "color 0.3s",
    "&:hover": {
      color: "#FF824C",
    },
    ":hover .child": {
      visibility: "visible",
    },
    position: "relative",
  },
  buttonText: {
    display: {
      xs: "none",
      sm: "block",
      md: "block",
    },
    fontSize: "18px",
    lineHeight: "1.5",
    color: "#fff",
    textDecoration: "none",
    fontFamily: "'Arimo', sans-serif",
    cursor: "pointer",
    transition: "color 0.3s",
    "&:hover": {
      color: "#FF824C",
    },
  },
  buttonOutline: {
    fontSize: {
      xs: "16px",
      md: "18px",
    },
    lineHeight: "1.5",
    color: "#fff",
    textDecoration: "none",
    padding: {
      xs: "5px 18px",
      md: "13px 33px",
    },
    border: "1px solid #fff",
    borderRadius: "3px",
    marginLeft: "25px",
    fontFamily: "'Arimo', sans-serif",
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover": {
      color: "#FF824C",
      backgroundColor: "#fff",
    },
  },
  Typography: {
    fontFamily: "'Arimo', sans-serif",
    // color: "#ddd",
  },
  KeyboardArrowDownIcon: {
    width: "14px",
    height: "14px",
  },
  iconMenu: {
    display: {
      xs: "block",
      md: "none",
    },
    // marginLeft: "24px",
    marginLeft: "12px",
    margin: {
      xs: "0",
      sm: "12px",
    },
    padding: {
      xs: "6px",
    },
  },
};

function Header() {
  const list = ["Home", "Pages", "Porfolio", "Blog"];
  return (
    <>
      <AppBar sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          <CardMedia
            component="img"
            sx={{
              maxWidth: {
                xs: "145px",
                sm: "145px",
                md: "145px",
              },
            }}
            image={require("../../assets/logo_4.png")}
            alt="Paella dish"
          />
          <List sx={styles.list}>
            {list.map((listItem, index) => (
              <ListItem key={index} sx={styles.listItem}>
                <Typography sx={styles.Typography}>{listItem}</Typography>
                <KeyboardArrowDownIcon
                  sx={styles.KeyboardArrowDownIcon}
                ></KeyboardArrowDownIcon>
              </ListItem>
            ))}
            <ListItem sx={styles.listItem}>
              <Typography sx={styles.Typography}>Contact</Typography>
            </ListItem>
          </List>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link sx={styles.buttonText} variant="text" color="inherit">
              Login
            </Link>
            <Link sx={styles.buttonOutline} variant="outlined" color="inherit">
              Sign up
            </Link>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={styles.iconMenu}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
