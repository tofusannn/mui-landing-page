// components/TestimonialsSection.tsx
import {
  Box,
  Typography,
  Grid2,
  Card,
  CardContent,
  Avatar,
  Stack,
} from "@mui/material";

interface Testimonial {
  name: string;
  title: string;
  message: string;
  avatar: string; // URL of the avatar image
}

const testimonials: Testimonial[] = [
  {
    name: "Giger",
    title: "E-commerce Amazon/Ebay",
    message:
      "Your software is really easy to use. We are an e-commerce company. Before using cutout.pro, we had to remove background from pictures all night through. Now that I have this software, everything is as easy as finger snapping.",
    avatar: "",
  },
  {
    name: "Eva Williams",
    title: "Journalist for fixthephoto.com",
    message:
      "When we have a huge volume of photos coming in and our clients are waiting for professional editing in urgency, we often use cutout.pro to greatly boost the efficiency of our work...",
    avatar: "",
  },
  {
    name: "Nico",
    title: "Videographer",
    message:
      "I work for an agency in digitization. Removing video background manually is a nightmare. I was so excited to discover the automatic video background removal tool...",
    avatar: "",
  },
  {
    name: "Joel",
    title: "WNTCG church in London",
    message:
      "We need the flexibility to remove distracting video backgrounds for some of our Church announcements or promo videos. I find cutout.pro the most effective so far.",
    avatar: "",
  },
  {
    name: "Flying",
    title: "POD print on demand",
    message:
      "I have been doing print-on-demand business for 11 years and doing the designs by myself. The face cutout tool gives me time to breathe...",
    avatar: "",
  },
  {
    name: "Mark Condon",
    title: "CEO of Shotkit.com",
    message:
      "Cutout.pro background remover helps photographers on our photography and camera review site Shotkit.com to batch edit picture backgrounds. Highly recommended!",
    avatar: "",
  },
];

export default function TestimonialsSection() {
  return (
    <Box py={6} px={4}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}
      >
        What Our Customers Say About Us
      </Typography>
      <Grid2 container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                height: "100%",
                boxShadow: "none",
                border: "1px solid #e0e0e0",
              }}
            >
              <CardContent sx={{ minHeight: "230px", position: "relative" }}>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  {testimonial.message}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  position={"absolute"}
                  bottom={16}
                >
                  <Avatar alt={testimonial.name} src={testimonial.avatar} />
                  <Box textAlign="left">
                    <Typography variant="subtitle1" fontWeight="bold">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {testimonial.title}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}
