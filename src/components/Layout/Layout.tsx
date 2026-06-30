import { Container, Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import classes from "./Layout.module.css";

export function Layout() {
  return (
    <Container fluid p={0} className={classes.root}>
      <Box component="header" className={classes.header}>
        <Header />
      </Box>

      <Box component="main" className={classes.main}>
        <Outlet />
      </Box>

      <Box component="footer" className={classes.footer}>
        <Footer />
      </Box>
    </Container>
  );
}
