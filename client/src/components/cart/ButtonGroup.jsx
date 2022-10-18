import styled from "@emotion/styled";
import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  border-radius: 20px;
`;

const GroupedButton = () => {
  return (
    <Component>
      <StyledButton>-</StyledButton>
      <StyledButton disabled>1</StyledButton>
      <StyledButton>+</StyledButton>
    </Component>
  );
};

export default GroupedButton;
