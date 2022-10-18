import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addEllipsis } from "../../utills/common-utills";
import GroupedButton from "./ButtonGroup";
import { removeFromCart } from "../../redux/actions/cartActions";

const Component = styled(Box)`
  border-top: "1px solid #f0f0f0";
  display: flex;
  background-color: #fff;
`;

const LeftCimponent = styled(Box)`
  margin: 24px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Box)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  return (
    <Component>
      <LeftCimponent>
        <img src={item.url} alt="prooduct" style={{ height: 110 }} />
        <GroupedButton />
      </LeftCimponent>
      <Box style={{ margin: 20 }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SmallText>
          Seller: RetailNet
          <Box component="span">
            <img
              src={fassured}
              alt="assured"
              style={{ width: 50, marginLeft: "10px" }}
            />
          </Box>
        </SmallText>
        <Typography style={{ margin: "20px 0" }}>
          <Box component="span" style={{ fontWeight: 600, fontSize: 20 }}>
            ₹{item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#388E3c" }}>
            {item.price.discount}off
          </Box>
        </Typography>
        <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
      </Box>
    </Component>
  );
};

export default CartItem;
