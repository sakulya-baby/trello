import { createSlice } from "@reduxjs/toolkit";

export const trelloSlice = createSlice({
  name: "trello",
  initialState: {
    trello: [],
    isOpenCart: false,
  },
  reducers: {
    openCart: (state) => {
      state.isOpenCart = true;
    },
    closeModal: (state) => {
      state.isOpenCart = false;
    },

    addValue: (state, action) => {
      state.trello.push(action.payload);
    },
    addCard: (state, action) => {
      state.trello.map((item) => {
        if (item.id === action.payload.prId) {
          item.newTrello.push(action.payload.newItem);
        }
        return item;
      });
    },
    deleteTrello: (state, action) => {
      const deleteId = action.payload;
      const saku = state.trello.filter((item) => item.id !== deleteId);
      state.trello = saku;
    },
  },
});
export const { openCart, closeModal, addValue, addCard, deleteTrello } =
  trelloSlice.actions;
export const trelloReducer = trelloSlice.reducer;
