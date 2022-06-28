import React from "react";
// @ts-ignore
import styled, { useTheme } from "@xstyled/styled-components";
import { getRequiredDateFormat } from "../../../../utils/date-format";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 80px 1fr 100px;
  grid-gap: 20px;
  box-sizing: border-box;
  padding: 12px;
  background-color: white;
  border: 2px solid;
  border-color: black;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: all 0.3s linear;
  cursor: pointer;
  &.last {
    margin: 0;
  }
  &:hover {
    background-color: white1;
  }
`;
const Icon = styled.img`
  width: 80px;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;
export const Text = styled.span`
  color: black;
  font-size: ${(props: any) => (props.fontSize ? props.fontSize : "14px")};
  font-weight: 600;
  margin: ${(props: any) => (props.margin ? props.margin : "0")};
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
`;
export const Button = styled.button`
  width: ${(props: any) => (props.width ? props.width : "auto")};
  height: 32px;
  cursor: pointer;
  transition: all linear 0.3s;
  background-color: red1;
  color: white;
  outline: none;
  border: none;
  border-radius: 12px;
  &:hover {
    background-color: red;
  }
`;

export const ProductItem = ({
  data,
  chooseProduct,
  deleteProduct,
  ...props
}: {
  data: {
    imageUrl: string;
    name: string;
    id: string;
    description: string;
    price: number;
    createdAt: string;
  };
  chooseProduct: () => void;
  deleteProduct: () => void;
  className?: string;
}) => {
  const theme = useTheme();

  const { name, createdAt, description, price, imageUrl } = data;

  return (
    <Wrapper {...props} onClick={chooseProduct}>
      <Icon src={imageUrl} alt={"iphone"} />
      <InfoWrapper>
        <NameWrapper>
          <Text fontSize={"18px"}>{`${name} `}</Text>
          <Text fontSize={"12px"} margin={"0 0 0 4px"}>
            {`(${getRequiredDateFormat(createdAt, "DD.MM.YYYY")})`}
          </Text>
        </NameWrapper>

        <Text fontSize={"14px"} margin={"0 0 4px 0"}>
          {description}
        </Text>
        <Text fontSize={"12px"}>{`Price: ${price}`}</Text>
      </InfoWrapper>
      <ButtonWrapper>
        <Button
          onClick={(e: any) => {
            e.stopPropagation();
            deleteProduct();
          }}
          theme={theme}
          width={"100%"}
        >
          Delete
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
