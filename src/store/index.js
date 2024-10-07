import { configureStore } from '@reduxjs/toolkit';
import products from "./slices/products.slice"

export default configureStore({
  reducer: {
    // Añade tus reducers aquí
    products
  },
});