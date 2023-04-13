import React from "react";
import "./App.css";
import Donation from "./Components/Donation/Donation";
import NavBar from "./Components/NavBar/NavBar";
import Carouselr from "./Components/Carouselr/Carouselr";
import { Routes, Route } from "react-router-dom";
import Beneficiaries from "./Components/Beneficiaries/Beneficiaries";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Cart from "./Components/Cart/Cart";
import Partners from "./pages/Partners";
import AboutMe from "./pages/AboutMe";
import Case from "./Components/Case/Case";
import Cases from "./pages/Cases";
import CasesFilter from "./Components/Case/CasesFilter";
import Casecompleted from "./Components/Case/Casecompleted";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carouselr />
              <Donation />
              <Case />
              <About />
              <Beneficiaries />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route  path="/allcases"  element={<Cases />} />
        <Route  path="/casecompleted"  element={<Casecompleted />} />
        <Route path="/allcases/sreach" element={<CasesFilter />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
