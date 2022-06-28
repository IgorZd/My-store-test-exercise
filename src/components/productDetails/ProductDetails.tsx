import React, { useEffect, useState } from "react";
// @ts-ignore
import styled from "@xstyled/styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectChoosedProduct,
  selectProductsList,
  setItem,
} from "../../app/state/productsSlice";
import { Button, Text } from "../board/components/productItem/ProductItem";
import { Stepper } from "./components/stepper/Stepper";
import TextareaAutosize from "react-textarea-autosize";

const Wrapper = styled.div`
  width: 100%;
  height: 480px;
  box-sizing: border-box;
  flex-direction: column;
  border: 2px solid;
  border-color: black;
  border-radius: 8px;
  padding: 16px;
`;
const Icon = styled.img`
  width: 120px;
`;
const Placeholder = styled.div`
  width: 100%;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 12px;
  &.last {
    margin: 0;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 32px;
  box-sizing: border-box;
  padding: 0 8px;
  border-color: black;
  outline: none;
  border-radius: 8px;
  border: 1px solid;
`;
const Textarea = styled(TextareaAutosize)`
  width: 100%;
  height: auto;
  min-height: 94px;
  max-height: 116px;
  box-sizing: border-box;
  padding: 4px 8px;
  border-color: black;
  outline: none;
  border-radius: 8px;
  border: 1px solid;
  resize: none;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const StyledButton = styled(Button)`
  width: 100px;
  background-color: green;
  &:hover {
    background-color: green1;
  }
`;

export const ProductDetails = () => {
  const data = useSelector(selectChoosedProduct);
  const dispatch = useDispatch();
  const [localData, setLocalData] = useState(data);

  const { name, description, price, id, imageUrl } = localData;
  const productsList = useSelector(selectProductsList);

  const indexOfItem = productsList.findIndex((item: any) => item.id === id);

  const inputsList = [
    {
      title: "Name",
      value: name,
      onChange: (value: string) => {
        name.length < 31 && setLocalData({ ...localData, name: value });
      },
    },
    {
      title: "Description",
      value: description,
      onChange: (value: string) => {
        description.length < 301 &&
          setLocalData({ ...localData, description: value });
      },
    },
    {
      title: "Price",
      value: price,
      onChange: (value: string) => {
        setLocalData({ ...localData, price: +value });
      },
    },
  ];

  const saveOnClick = () => {
    dispatch(setItem({ index: indexOfItem, value: localData }));
  };

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  return (
    <>
      {id.length > 0 ? (
        <Wrapper>
          <Icon src={imageUrl} alt={"iphone"} />
          <InputsContainer></InputsContainer>
          {inputsList.map((item: any, index: number, arr: any) => {
            const { title, value, onChange } = item;
            return (
              <InputWrapper
                key={index}
                className={index === arr.length - 1 ? "last" : ""}
              >
                <Text fontSize={"14px"}>{title}</Text>
                {index === 0 ? (
                  <Input
                    value={value}
                    onChange={(e: any) => {
                      onChange(e.target.value);
                    }}
                  />
                ) : index === 1 ? (
                  <Textarea
                    value={value}
                    onChange={(e: any) => {
                      onChange(e.target.value);
                    }}
                  />
                ) : index === 2 ? (
                  <Stepper value={value} onChange={onChange} />
                ) : (
                  <></>
                )}
              </InputWrapper>
            );
          })}
          <ButtonWrapper>
            <StyledButton onClick={saveOnClick}>Save</StyledButton>
          </ButtonWrapper>
        </Wrapper>
      ) : (
        <Placeholder>
          <Text fontSize={"30px"}>No choosed item</Text>
        </Placeholder>
      )}
    </>
  );
};
