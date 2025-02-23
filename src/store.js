import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './components/Slices/CartSlice';
import ProductsSlice from './components/Slices/ProductsSlice';
import categoriessReducer from './components/Slices/CategoriesSlice';

 const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: ProductsSlice.reducer,
        categories: categoriessReducer
    },
});
export default store