import React from "react";
import { useSelector } from "react-redux";
import { Box, Button, Grid, styled, Typography } from "@mui/material";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utills/paytm";

const Component = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  [theme.breakpoints.down("md")]: {
    padding: "15px 0px",
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background-color: #fff;
`;

const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 /10%);
  border-top: 1px solid #f0f0f0;
`;

const PlaceOrder = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  width: 250px;
  height: 51px;
  border-radius: 2px;
`;

const LeftComponet = styled(Grid)(({ theme }) => ({
  paddingRight: "15px",
  [theme.breakpoints.down("md")]: {
    marginBottom: 15,
  },
}));

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const buyNow = async () => {
    let response = await payUsingPaytm({
      amount: 500,
      email: "codeforinterview01@gmail.com",
    });
    var information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };
    post(information);
  };
  return (
    <>
      {cartItems.length ? (
        <Component container>
          <LeftComponet item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <ButtonWrapper>
              <PlaceOrder onClick={() => buyNow()}>Place Order</PlaceOrder>
            </ButtonWrapper>
          </LeftComponet>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Component>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
