import React from "react";
// @ts-ignore
import styled, { useTheme } from "@xstyled/styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 50px;
  background-color: primary;
  box-shadow: ${(props: any) => props.theme.shadows.popover};
`;
const Text = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

export const Header = () => {
  const theme = useTheme();

  return (
    <Wrapper theme={theme}>
      <Text>My store</Text>
    </Wrapper>
  );
};
