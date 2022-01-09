import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
// import { About, Blog, Contact, Tag, Home, Project } from "./pages";
// import HomeView from "./pages/home";
import { Home, About, Contact, Project, Blog, Tag } from "./pages";
import PageNotFound from "./components/404";
// import { Redirect } from "react-router-dom";

const App: React.FC<{}> = () => {

  return (
    <>
      <Canvas
        style={{ height: "1px", width: "1px" }}
        children={undefined}
      ></Canvas>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tag" element={<Tag />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
