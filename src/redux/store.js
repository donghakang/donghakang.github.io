import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme";
import languageReducer from "./language";

export default configureStore({
  reducer: { theme: themeReducer, language: languageReducer },
});
