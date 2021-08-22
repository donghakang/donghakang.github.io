import { createSlice } from "@reduxjs/toolkit";

const initScreenMode = window.innerWidth > 768 ? true : false;

export const screenSlice = createSlice({
  name: "screenMode",
  initialState: {
    // screenMode
    // ** false: phone mode
    // ** true: not phone mode
    screenMode: initScreenMode,
  },
  reducers: {
    setScreenMode: (state, action) => {
      state.screenMode = action.payload;
    },
  },
});

export const { setScreenMode } = screenSlice.actions;

export default screenSlice.reducer;
