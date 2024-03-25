import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import WelcomePage from "./components/WelcomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import PredictionPage from "./components/PredictionPage";
import DiabetesStages from "./components/DiabetesStages";
import PreDiabetes from "./components/PreDiabetes";
import Diabetes from "./components/Diabetes";
import Type2Diabetes from "./components/Type2Diabetes";
import Type1Diabetes from "./components/Type1Diabetes";
import GestationalDiabetes from "./components/GestationalDiabetes";
import ShowResult from "./components/ShowResult";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/prediction" element={<PredictionPage />} />
        <Route path="/diabetes-stages" element={<DiabetesStages />} />
        <Route path="/pre-diabetes" element={<PreDiabetes />} />
        <Route path="/diabetes" element={<Diabetes />} />
        <Route path="/type2-diabetes" element={<Type2Diabetes />} />
        <Route path="/type1-diabetes" element={<Type1Diabetes />} />
        <Route path="/gestational-diabetes" element={<GestationalDiabetes />} />
        <Route path="/show-result/:result" element={<ShowResult />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
