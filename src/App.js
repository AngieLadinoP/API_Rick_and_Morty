import React from "react";
import {
  BrowserRouter,
  HashRouter as Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Characters from "./components/Characters/Characters.jsx";
import Episodes from "./components/Episodes/Episodes.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* This element will always be displayed  */}
          <Route index element={<Home />} />
          {/* Index replaces "/" since it is in the Layout */}
          <Route path="/characters" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
