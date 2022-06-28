import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ProductsState } from "./productsInterfaces";

const initialState: ProductsState = {
  productsList: [
    {
      imageUrl:
        "https://i.pinimg.com/564x/6a/32/e5/6a32e542a7b2cc7e1f0258747f597bad.jpg",
      name: "A 1",
      id: "1",
      description: "New product",
      price: 100,
      createdAt: "2021-07-12T10:21:56Z",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/6a/32/e5/6a32e542a7b2cc7e1f0258747f597bad.jpg",
      name: "V 2",
      id: "2",
      description: "Product 2 description",
      price: 105,
      createdAt: "2021-02-20T10:21:56Z",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/6a/32/e5/6a32e542a7b2cc7e1f0258747f597bad.jpg",
      name: "W 3",
      id: "3",
      description: "Old product",
      price: 94,
      createdAt: "2021-03-28T10:21:56Z",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/6a/32/e5/6a32e542a7b2cc7e1f0258747f597bad.jpg",
      name: "Product 4",
      id: "4",
      description: "Product 4 description",
      price: 200,
      createdAt: "2021-03-20T10:21:56Z",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/6a/32/e5/6a32e542a7b2cc7e1f0258747f597bad.jpg",
      name: "I 5",
      id: "5",
      description: "Product 5 description",
      price: 500,
      createdAt: "2019-11-11T10:21:56Z",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/6a/32/e5/6a32e542a7b2cc7e1f0258747f597bad.jpg",
      name: "O 6",
      id: "6",
      description: "Product 6 description",
      price: 25,
      createdAt: "2020-10-11T10:21:56Z",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/6a/32/e5/6a32e542a7b2cc7e1f0258747f597bad.jpg",
      name: "P 7",
      id: "7",
      description: "Product 7 description",
      price: 11,
      createdAt: "2021-06-25T10:21:56Z",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/6a/32/e5/6a32e542a7b2cc7e1f0258747f597bad.jpg",
      name: "R 8",
      id: "8",
      description: "Product 8 description",
      price: 89,
      createdAt: "2021-04-20T10:21:56Z",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/6a/32/e5/6a32e542a7b2cc7e1f0258747f597bad.jpg",
      name: "N 9",
      id: "9",
      description: "Product 9 description",
      price: 870,
      createdAt: "2018-09-01T10:21:56Z",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/6a/32/e5/6a32e542a7b2cc7e1f0258747f597bad.jpg",
      name: "M 10",
      id: "10",
      description: "Product 10 description",
      price: 45,
      createdAt: "2020-12-30T10:21:56Z",
    },
  ],
  choosedItem: {
    imageUrl: "",
    name: "",
    id: "",
    description: "",
    price: 0,
    createdAt: "",
  },
};

export const productsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setChoosedItem: (state, action: PayloadAction<any>) => {
      state.choosedItem = action.payload.choosed;
    },
    setItem: (state, action: PayloadAction<any>) => {
      state.productsList[action.payload.index] = action.payload.value;
    },
    removeItem: (state, action: PayloadAction<any>) => {
      state.productsList = state.productsList.filter(
        (item: any) => item.id !== action.payload.id
      );
    },
    setProductsList: (state, action: PayloadAction<any>) => {
      state.productsList = action.payload.list;
    },
  },
});

export const { setChoosedItem, setItem, removeItem, setProductsList } =
  productsSlice.actions;

export const selectProductsList = (state: RootState) => {
  return state.products.productsList;
};
export const selectChoosedProduct = (state: RootState) => {
  return state.products.choosedItem;
};
export default productsSlice.reducer;
