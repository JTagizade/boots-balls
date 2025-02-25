import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const BASE_URL = 'https://gist.githubusercontent.com/JTagizade/23598ffcf9945bc8da4be7eb60da84b6/raw/feb5eba61ecdc646eb4af890f92a0db4c26be79d/db.json';


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
    builder.addCase(getSessionsList.fulfilled, (state, { payload }) => { state.products = payload.data; })
}
  
});

export const { } = ProductsSlice.actions;

export default ProductsSlice;