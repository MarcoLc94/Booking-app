import { createSlice } from '@reduxjs/toolkit';

export const loggedSlice = createSlice({
  name: 'logged',
  initialState: null,
  reducers: {
    // Añade tus reducers aquí
    setLoggedName: (state, action) => action.payload
  },
});

export const { setLoggedName } = loggedSlice.actions;
export default loggedSlice.reducer;