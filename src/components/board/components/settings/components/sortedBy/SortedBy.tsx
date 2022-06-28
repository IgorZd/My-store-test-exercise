import React, { useCallback, useEffect, useRef, useState } from "react";
// @ts-ignore
import styled, { useTheme } from "@xstyled/styled-components";
import { Text } from "../../../productItem/ProductItem";
import { ArrowIcon } from "../../../../../productDetails/components/stepper/Stepper";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProductsList,
  setProductsList,
} from "../../../../../../app/state/productsSlice";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const DropdownWrapper = styled.div`
  width: 54px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  position: relative;
`;
const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Option = styled(Text)`
  cursor: pointer;
  margin-right: 8px;
  &.placeholder {
    font-size: 12px;
    font-weight: 400;
    color: gray;
  }
`;
const List = styled.ul`
  background-color: white;
  box-shadow: ${(props: any) => props.theme.shadows.popover};
  padding: 4px 12px;
  border-radius: 8px;
  position: absolute;
  top: 20px;
  list-style: none;
`;
const Item = styled.li`
  cursor: pointer;
  &.selected {
    font-weight: 600;
    color: primary;
  }
`;

export const SortedBy = () => {
  const productsList = useSelector(selectProductsList);
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState({
    name: "",
    fieldName: "",
  });
  const [isOpenOptionsList, setIsOpenOptionsList] = useState(false);

  const sortArr = (a: any, b: any, fieldName: string, isFromTop?: boolean) => {
    if ((isFromTop ? b : a)[fieldName] < (isFromTop ? a : b)[fieldName]) {
      return -1;
    }
    if ((isFromTop ? b : a)[fieldName] > (isFromTop ? a : b)[fieldName]) {
      return 1;
    }
    return 0;
  };

  const sortingOptions = [
    {
      name: "Date",
      onClick: () => {
        setSelectedOption({ name: "Date", fieldName: "createdAt" });
        const arrForSorting = productsList.map((item: any) => ({
          ...item,
          createdAt: new Date(item.createdAt),
        }));
        dispatch(
          setProductsList({
            list: arrForSorting.sort((a, b) =>
              sortArr(a, b, "createdAt", true)
            ),
          })
        );
        setIsOpenOptionsList(false);
      },
    },
    {
      name: "Name",
      onClick: () => {
        const arrForSorting = [...productsList];
        setSelectedOption({ name: "Name", fieldName: "name" });
        dispatch(
          setProductsList({
            list: arrForSorting.sort((a, b) => sortArr(a, b, "name")),
          })
        );
        setIsOpenOptionsList(false);
      },
    },
    {
      name: "Price",
      onClick: () => {
        const arrForSorting = [...productsList];
        setSelectedOption({ name: "Price", fieldName: "price" });
        dispatch(
          setProductsList({
            list: arrForSorting.sort((a: any, b: any) =>
              sortArr(a, b, "price", true)
            ),
          })
        );
        setIsOpenOptionsList(false);
      },
    },
  ];

  const openCloseOptionList = () => {
    setIsOpenOptionsList(!isOpenOptionsList);
  };

  const buttonRef = useRef<any>(null);
  const outsideHandler = useCallback(
    (e: any) => {
      if (isOpenOptionsList && !buttonRef.current?.contains(e.target)) {
        setIsOpenOptionsList(false);
      }
    },
    [isOpenOptionsList]
  );

  useEffect(() => {
    window.addEventListener("click", outsideHandler);
    return () => {
      window.removeEventListener("click", outsideHandler);
    };
  }, [outsideHandler]);

  return (
    <Wrapper>
      <Text>Sorted by</Text>
      <DropdownWrapper onClick={openCloseOptionList}>
        <OptionWrapper>
          <Option
            className={selectedOption.name.length === 0 ? "placeholder" : ""}
          >
            {selectedOption.name.length > 0 ? selectedOption.name : "Option"}
          </Option>
          <ArrowIcon down={!isOpenOptionsList} />
        </OptionWrapper>
        {isOpenOptionsList && (
          <List>
            {sortingOptions.map((item: any) => {
              const { onClick, name } = item;
              return (
                <Item
                  onClick={(e: any) => {
                    e.stopPropagation();
                    onClick();
                  }}
                  className={selectedOption.name === name ? "selected" : ""}
                >
                  {item.name}
                </Item>
              );
            })}
          </List>
        )}
      </DropdownWrapper>
    </Wrapper>
  );
};
