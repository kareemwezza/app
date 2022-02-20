import React from "react";
import { Container, Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Box sx={{ margin: "10px auto", textAlign: "center" }}>
          <Typography variant="h2">Hello World</Typography>
          <Typography variant="p">lorem IPSUM</Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
