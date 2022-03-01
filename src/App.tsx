import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Home, About, Project, Blog, Tag } from "./pages";
import PageNotFound from "./components/404";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "./assets/theme";
import Cursor from "./components/cursor";
import { CursorProvider } from "./store/CursorContext";
// import { Redirect } from "react-router-dom";

const App: React.FC<{}> = () => {
  const location = useLocation();

  return (
    <>
      <Canvas
        style={{ height: "1px", width: "1px" }}
        children={undefined}
      ></Canvas>

      <ThemeProvider theme={theme}>
        <CursorProvider>
          <Cursor />
          <GlobalStyles theme={theme} />
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/blog/:slug" element={<Blog />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/tag" element={<Tag />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </AnimatePresence>
        </CursorProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
