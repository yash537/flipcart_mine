import { Typography, Box, MenuItem, Menu, styled } from "@mui/material";
import React, { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const logoutUser = () => {
    setAccount("");
  };

  const Component = styled(Menu)`
    margin-top: 5px;
  `;

  const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
  `;

  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2 }}>{account}</Typography>
      </Box>
      <Component
        id="basic-menu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            logoutUser();
          }}
        >
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  );
};

export default Profile;
