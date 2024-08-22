import { createSlice } from "@reduxjs/toolkit";

import { singUpRequest, sigInRequest } from "../thunk/authThunks";

export const authSlice = createSlice({
  name: "authTrello",
  initialState: {
    isLoading: false,
    isError: null,
    userEmail: null,
  },
  reducers: {
    isAuth: (state, action) => {
      state.userEmail = action.payload;
    },
    closeCart: (state) => {
      state.userEmail = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(singUpRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(singUpRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userEmail = action.payload.data.email;
      })
      .addCase(singUpRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
    builder.addCase(sigInRequest.fulfilled, (state, action) => {
      state.userEmail = action.payload.data.email;
    });
  },
});

export const { isAuth, closeCart } = authSlice.actions;
export const authReducer = authSlice.reducer;
