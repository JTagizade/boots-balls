import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from './components/Slices/CartSlice';
import ProductsSlice from './components/Slices/ProductsSlice';
import categoriessReducer from './components/Slices/CategoriesSlice';


export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

 const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: ProductsSlice.reducer,
        categories: categoriessReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;


export default store