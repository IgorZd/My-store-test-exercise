import React from "react";
// @ts-ignore
import styled from "@xstyled/styled-components";
import { Header } from "../components/header/Header";
import { Board } from "../components/board/Board";
import { ProductDetails } from "../components/productDetails/ProductDetails";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 0 50px 50px 50px;
  margin-top: 12px;
`;

function App({ classes, ...props }: any) {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Board />
        <ProductDetails />
      </Content>
    </Wrapper>
  );
}

export default App;
