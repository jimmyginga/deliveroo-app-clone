import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newItems = [...state.items];

      if (index >= 0) {
        newItems.splice(index, 1);
      } else {
        console.warn(
          `Can not remove ${action.payload.id} as its not in basket`
        );
      }

      state.items = newItems;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) =>  state.basket.items

export const selectBasketItemsWithId = (state, id) => state.basket.items.filter((item) => item.id === id);

export const selectTotal = (state) => state.basket.items.reduce((total, item)=> total += item.price, 0)

export default basketSlice.reducer;
