import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    // isDarkMode
    // ** false: lightMode
    // **true: darkMode
    language: false,
  },
  reducers: {
    changeLanguage: (state) => {
      state.language = !state.language;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
