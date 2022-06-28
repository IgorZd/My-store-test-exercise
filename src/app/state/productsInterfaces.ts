export interface ProductsState {
  productsList: {
    imageUrl: string;
    name: string;
    id: string;
    description: string;
    price: number;
    createdAt: string;
  }[];
  choosedItem: {
    imageUrl: string;
    name: string;
    id: string;
    description: string;
    price: number;
    createdAt: string;
  };
}
