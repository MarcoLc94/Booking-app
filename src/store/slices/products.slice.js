import axios from "axios"
import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    // Añade tus reducers aquí
    setProducts: (state, action) => (action.payload) 
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;

export const setProductsThunk = (url) => (dispatch) => {
  return axios.get(url)
  .then((res) => {
    console.log(res.data)
    dispatch(setProducts(res.data))
  })
  .catch((err) => console.error(err))
}