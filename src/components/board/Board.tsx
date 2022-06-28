import React from "react";
// @ts-ignore
import styled from "@xstyled/styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  selectChoosedProduct,
  selectProductsList,
  setChoosedItem,
} from "../../app/state/productsSlice";
import { ProductItem } from "./components/productItem/ProductItem";
import { Settings } from "./components/settings/Settings";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const PlaceholderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Board = () => {
  const dispatch = useDispatch();

  const productsList = useSelector(selectProductsList);
  const choosedProduct = useSelector(selectChoosedProduct);

  const chooseProduct = (id: string) => {
    const choosed = productsList.filter((item: any) => item.id === id)[0];
    dispatch(setChoosedItem({ choosed }));
  };
  const deleteProduct = (id: string) => {
    dispatch(removeItem({ id }));
    choosedProduct.id === id &&
      dispatch(
        setChoosedItem({
          choosed: {
            imageUrl: "",
            name: "",
            id: "",
            description: "",
            price: "",
            createdAt: "",
          },
        })
      );
  };

  return (
    <Wrapper>
      <Settings />
      {productsList.length ? (
        productsList.map((item: any, index: number, arr: any) => {
          const { id } = item;
          return (
            <ProductItem
              key={id}
              data={item}
              chooseProduct={() => {
                chooseProduct(id);
              }}
              deleteProduct={() => {
                deleteProduct(id);
              }}
              className={index === arr.length - 1 ? "last" : "0"}
            />
          );
        })
      ) : (
        <PlaceholderWrapper>No items</PlaceholderWrapper>
      )}
    </Wrapper>
  );
};
