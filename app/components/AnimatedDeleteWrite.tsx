import { Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const words = ["creative", "productive", "automative"];

export default function AnimatedDeleteWrite() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loopIndex % words.length];
      if (isDeleting) {
        // Erase characters
        setText((prev) => currentWord.substring(0, prev.length - 1));
        setTypingSpeed(50); // Faster when deleting
      } else {
        // Add characters
        setText((prev) => currentWord.substring(0, prev.length + 1));
        setTypingSpeed(150); // Slower when typing
      }

      // If the word is complete
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      }

      // If the word is fully deleted
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1); // Move to the next word
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex, typingSpeed]);

  return (
    <>
      <Typography variant="h1" fontSize={"5rem"} fontWeight={"bold"}>
        <Box display="flex" alignItems="center">
          AI powered{" "}
          <span style={{ color: "#e82255", marginLeft: "1rem" }}>{text}</span>
          <Box
            sx={{
              width: "10px",
              height: "80px",
              backgroundColor: "#e82255",
              marginLeft: "4px",
              animation: "blink 0.6s steps(2, start) infinite",
            }}
          />
          <style jsx global>{`
            @keyframes blink {
              0%,
              100% {
                opacity: 1;
              }
              50% {
                opacity: 0;
              }
            }
          `}</style>
        </Box>
      </Typography>
      <Typography variant="h1" fontSize={"5rem"} fontWeight={"bold"}>
        visual design platform
      </Typography>
      <Typography
        fontSize={"20px"}
        color="#666"
        mt={"47px"}
        mb={"85px"}
        textAlign={"center"}
      >
        We leverage the power of artificial intelligence and computer vision to
        deliver a<br /> wide range of products both available for individual use
        and business application
        <br /> & workflows to achieve efficiency and creation.
      </Typography>
    </>
  );
}
