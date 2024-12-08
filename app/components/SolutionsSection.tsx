import React from "react";
import { Box, Grid2, Paper, Typography } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CodeIcon from "@mui/icons-material/Code";
import PrintIcon from "@mui/icons-material/Print";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import RestoreIcon from "@mui/icons-material/Restore";

const solutions = [
  {
    title: "Image Design",
    description:
      "With image AI tools, you can be a design master without learning Photoshop.",
    icon: <ImageIcon />,
  },
  {
    title: "ID Photo Maker",
    description:
      "Change background color, virtual change in dozens of suit choices, change sizes.",
    icon: <PhotoCameraIcon />,
  },
  {
    title: "E-commerce",
    description:
      "Create high quality e-commerce images to get traffic, clicks and sales.",
    icon: <ShoppingCartIcon />,
  },
  {
    title: "Developer",
    description: "All one-stop integration to create thrilling products.",
    icon: <CodeIcon />,
  },
  {
    title: "Old Photo Restoration",
    description:
      "Restore old family photos back to its full glory. Enhance background and faces, higher resolution, vibrant and saturated colors, and stunning details.",
    icon: <RestoreIcon />,
  },
  {
    title: "Customized Printing",
    description:
      "Remove background, overlay product images to preview, T-shirts, mugs, phone cases, keychains.",
    icon: <PrintIcon />,
  },
  {
    title: "Video XR",
    description:
      "Spending too much time with Premiere Pro, After Effects? Change video background in a snap.",
    icon: <VideoCameraBackIcon />,
  },
];

export default function SolutionsSection() {
  return (
    <Box sx={{ py: 8, px: 3 }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}
      >
        Our Solutions
      </Typography>
      <Grid2 container justifyContent={"space-between"}>
        {solutions.map((solution, index) => (
          <Grid2
            container
            sx={{
              width: "400px",
              height: "110px",
            }}
            justifyContent={"space-between"}
            key={index}
          >
            <Paper
              sx={{
                alignContent: "center",
                textAlign: "center",
                width: "5rem",
                height: "5rem",
                borderRadius: 2,
                boxShadow: "none",
                backgroundColor: "#f5f5f5",
              }}
            >
              {solution.icon}
            </Paper>
            <Grid2 size={{ xs: 12, sm: 6, md: 8.9 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {solution.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {solution.description}
              </Typography>
            </Grid2>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}
