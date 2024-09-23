import { configureStore, createSlice } from "@reduxjs/toolkit";

export const STOCK_LIST = [
  {
    id: 1,
    name: "Apple",
    price: 145.83,
  },
  {
    id: 2,
    name: "Microsoft Corporation",
    price: 277.65,
  },
  {
    id: 3,
    name: "Amazon.com Inc.",
    price: 3372.2,
  },
];

const initialState = {
  balance: 10000,
  owned_stocks: [
    {
      id: 1,
      name: "Apple",
      price: 145.83,
      quantity: 2,
    },
  ],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    buy: (state, action) => {
      const stock = STOCK_LIST.find((stock) => stock.id === action.payload);
      state.balance -= stock.price;
      const stockIndex = state.owned_stocks.findIndex(
        (stock) => stock.id === action.payload,
      );

      if (stockIndex === -1) {
        state.owned_stocks.push({ ...stock, quantity: 1 });
      } else {
        state.owned_stocks[stockIndex].quantity += 1;
      }
    },
    sell: (state, action) => {
      const stock = STOCK_LIST.find((stock) => stock.id === action.payload);
      state.balance += stock.price;
      const stockIndex = state.owned_stocks.findIndex(
        (stock) => stock.id === action.payload,
      );

      const quantity = state.owned_stocks[stockIndex].quantity;
      if (quantity === 1) {
        state.owned_stocks = state.owned_stocks.filter(
          (stock) => stock.id !== action.payload,
        );
      } else {
        state.owned_stocks[stockIndex].quantity -= 1;
      }
    },
  },
});

export const { buy, sell } = portfolioSlice.actions;

const portfolioStore = configureStore({
  reducer: portfolioSlice.reducer,
});

export default portfolioStore;
