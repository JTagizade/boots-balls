import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/data';

export const getSessionsList = createAsyncThunk('getSessionsList', async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
});


export const ProductsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [], 
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getSessionsList.fulfilled, (state, { payload }) => { state.products = payload; })
}
  
});

export const { } = ProductsSlice.actions;

export default ProductsSlice;