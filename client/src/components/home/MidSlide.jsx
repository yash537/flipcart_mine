import { Box, styled } from "@mui/material";
import React from "react";
import Slide from "./Slide";

const Component = styled(Box)`
  display: flex;
`;

const LeftComponet = styled(Box)(({ theme }) => ({
  width: "87%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightComponet = styled(Box)(({ theme }) => ({
  background: "#ffffff",
  padding: 5,
  marginTop: 10,
  marginLeft: 10,
  width: "13%",
  textAling: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MidSlide = ({ products, title, timer }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <Component>
      <LeftComponet>
        <Slide products={products} title={title} timer={true} />
      </LeftComponet>
      <RightComponet>
        <img src={adURL} alt="advertisment" style={{ width: 217 }} />
      </RightComponet>
    </Component>
  );
};

export default MidSlide;
