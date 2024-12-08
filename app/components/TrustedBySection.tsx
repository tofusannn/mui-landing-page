// components/TrustedBySection.tsx
import { Box, Typography, Grid2 } from "@mui/material";
import Image from "next/image";

const brands = [
  {
    name: "partner1",
    src: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/partner1.jpg",
  },
  {
    name: "partner2",
    src: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/partner2.jpg",
  },
];

export default function TrustedBySection() {
  return (
    <Box textAlign="center" py={6}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}
      >
        Trusted by 25K+ businesses
      </Typography>
      <Grid2 container py={5} spacing={3} justifyContent="center">
        {brands.map((brand) => (
          <Grid2 size={12} key={brand.name}>
            <Image
              src={brand.src}
              alt={brand.name}
              width={1160}
              height={70}
              style={{ objectFit: "contain" }}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}
