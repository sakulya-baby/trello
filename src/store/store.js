import { configureStore } from "@reduxjs/toolkit";
import { trelloReducer } from "./slices/trelloSlice";
import { authReducer } from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    trello: trelloReducer,
    auth: authReducer,
  },
});
