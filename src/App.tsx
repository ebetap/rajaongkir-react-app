import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PeriksaOngkirLacakPaket from "./pages/PeriksaOngkirLacakPaket";
import Footer from "./components/Footer";

//Header Navigation and Blacklust Path Data
import {
  headerNavigation,
  headerBlackListPath,
  footerBlackListPath,
} from "./constant/mockData";

const App: React.FC = () => {
  return (
    <Router>
      <Header
        navigation={headerNavigation}
        blackListPath={headerBlackListPath}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/periksa-dan-lacak-paket"
          element={<PeriksaOngkirLacakPaket />}
        />
      </Routes>

      <Footer blackListPath={footerBlackListPath} />
    </Router>
  );
};

export default App;
