import { Box, styled, Typography } from "@mui/material";
import React from "react";

const Componet = styled(Box)`
  height: 65vh;
  width: 80%;
  background-color: #fff;
  margin: 80px 142px;
`;

const Container = styled(Box)`
  text-align: center;
  padding-top: 70px;
`;

const EmptyCart = () => {
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  return (
    <Componet>
      <Container>
        <img src={imgurl} alt="emptycart" style={{ width: "15%" }} />
        <Typography>Your cart is empty!</Typography>
        <Typography>Add items to it now</Typography>
      </Container>
    </Componet>
  );
};

export default EmptyCart;
