import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { configs } from "eslint-plugin-react-refresh";

const initialState = {
  orders: JSON.parse(localStorage.getItem("orders")) || [],
};

export const ordersApi = createAsyncThunk("/orders", async (data,{rejectWithValue}) => {
  
  const payload = data.map((item) => {
    return { productId: item.id, quantity: item.quantity };
  });
  
  try {
    console.log(payload);
    const response = await axios.post(
        "http://localhost:5000/api/orders",
        { products: payload }, 
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, 
            "Content-Type": "application/json"
          }
        }
      );
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Something went wrong");
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
    builder.addCase(ordersApi.fulfilled, (state, action) => {
      state.orders = [];
      localStorage.removeItem("orders");
    });
    // builder.addCase(userLogin.rejected, (state, action) => {});
  },
});

export default orderSlice.reducer;
export const { deleteOrder, addNewOrder } = orderSlice.actions;
