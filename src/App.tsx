import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Canvas } from "@react-three/fiber";
// import { About, Blog, Contact, Tag, Home, Project } from "./pages";
// import HomeView from "./pages/home";
import { Home, About, Contact, Project, Blog, Tag } from "./pages";
import PageNotFound from "./components/404";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "./components/theme";
import Cursor from './components/cursor'
// import { Redirect } from "react-router-dom";

const App: React.FC<{}> = () => {
  const location = useLocation();

  return (
    <>
      <Cursor />
      <Canvas
        style={{ height: "1px", width: "1px" }}
        children={undefined}
      ></Canvas>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme}/>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/tag" element={<Tag />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default App;
