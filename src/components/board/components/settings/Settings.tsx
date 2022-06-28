import React, { useEffect, useState } from "react";
// @ts-ignore
import styled from "@xstyled/styled-components";
import { Input } from "../../../productDetails/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProductsList,
  setProductsList,
} from "../../../../app/state/productsSlice";
import { SortedBy } from "./components/sortedBy/SortedBy";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;
const Searchbar = styled(Input)`
  max-width: 400px;
`;

export const Settings = () => {
  const productsList = useSelector(selectProductsList);

  const [searchValue, setSearchValue] = useState("");
  const [savedList] = useState(productsList);
  const dispatch = useDispatch();

  const filterParameterList = (flag: string, items: any) => {
    return (
      items &&
      items.filter((item: any) => {
        return (
          (item?.name?.length > 0 &&
            item?.name?.toLowerCase()?.indexOf(flag.toLowerCase()) !== -1) ||
          (item?.description?.length > 0 &&
            item?.description?.toLowerCase()?.indexOf(flag.toLowerCase()) !==
              -1)
        );
      })
    );
  };

  const onChangeSearchBar = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        setProductsList({
          list: filterParameterList(searchValue, savedList),
        })
      );
    }, 1000);
  }, [searchValue, savedList]);
  return (
    <Wrapper>
      <Searchbar
        value={searchValue}
        onChange={(e: any) => {
          onChangeSearchBar(e.target.value);
        }}
        placeholder={"Search..."}
      />
      <SortedBy />
    </Wrapper>
  );
};
