import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

export const singUpRequest = createAsyncThunk(
  "auth/singUpRequest",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/register", userData);
      localStorage.setItem("auth", JSON.stringify(data));

      navigate("/");
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const sigInRequest = createAsyncThunk(
  "auth/sigInRequest",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth", userData);
      localStorage.setItem("auth", JSON.stringify(data));
      navigate("/");
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
