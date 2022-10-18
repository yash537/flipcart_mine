import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { navData } from "../../constants/data";

const Componet = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "55px 130px 0px 130px",
  justifyContent: "space-between",
  overflow: "hidden",

  [theme.breakpoints.down("lg")]: {
    margin: 0,
  },
}));

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const NavBar = () => {
  return (
    <Box style={{ background: "#fff" }}>
      <Componet>
        {navData.map((data) => (
          <Container>
            <img src={data.url} alt="nav" style={{ width: 64 }} />
            <Text>{data.text}</Text>
          </Container>
        ))}
      </Componet>
    </Box>
  );
};

export default NavBar;
