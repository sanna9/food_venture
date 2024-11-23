import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //vanilla redux: dont allow to mutate the state, return is mandatory
      //const newState = [...state];
      //newState.items.push(action.payload);
      //return newState;

      //mutating the state here with redux toolkit, but redux behind the scenes is still doing its work but not asking developers to do it.
      //immer library is finding the diffrenece between original state and mutated state, and then gives you back the new state, which is immutatable state, a new copy of the state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      //state.items.length = 0;
      //or
      return { items: [] }; //this new array will replace the original array
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
