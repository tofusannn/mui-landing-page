"use client";
import {
  Container,
  Box,
  Grid2,
  Stack,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import CompareImageCPN from "./components/CompareImageCPN";
import SolutionsSection from "./components/SolutionsSection";
import TrustedBySection from "./components/TrustedBySection";
import AnimatedDeleteWrite from "./components/AnimatedDeleteWrite";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import theme from "./theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Toolbar />
      <Box component="main" sx={{ p: 3, mt: "5rem" }}>
        <Container maxWidth="xl">
          <Stack alignItems="center" justifyContent="center">
            <AnimatedDeleteWrite />
            <Box sx={{ py: 8, px: 3 }}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}
              >
                Featured AI Tools
              </Typography>
              <Box width={590} height={320}>
                <CompareImageCPN
                  beforeImage="./before.jpg"
                  afterImage="./after.jpg"
                />
              </Box>
            </Box>
            <SolutionsSection />
            <TrustedBySection />
            <TestimonialsSection />
          </Stack>
        </Container>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
