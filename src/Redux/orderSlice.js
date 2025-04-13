import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  orders: JSON.parse(localStorage.getItem("orders")) || [],
};

export const ordersApi = createAsyncThunk("/orders", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/users/login",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

const orderSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {
    addNewOrder: (state, action) => {
      state.orders = state.orders.filter(
        (item) => item.id !== action.payload.id
      );

      if (action.payload.quantity > 0) {
        state.orders.push(action.payload);
      }
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter((item) => item.id !== action.payload);

      localStorage.setItem("orders", JSON.stringify(state.orders));
      
    },
  },
  extraReducers(builder) {
    // builder.addCase(userLogin.fulfilled, (state, action) => {
    //   localStorage.setItem("token", action.payload.token);
    //   localStorage.setItem("userName", action.payload.username);
    //   return {
    //     token: action.payload.token,
    //     userName: action.payload.username,
    //   };
    // });
    // builder.addCase(userLogin.rejected, (state, action) => {});
  },
});

export default orderSlice.reducer;
export const { deleteOrder, addNewOrder } = orderSlice.actions;
