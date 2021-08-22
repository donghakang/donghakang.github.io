import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme";
import languageReducer from "./language";
import screenModeReducer from "./screen";

export default configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    screenMode: screenModeReducer,
  },
});
