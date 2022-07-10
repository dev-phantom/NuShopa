import React from "react";
import styles from "../src/styles/app.module.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing';
import Onboard from "./Pages/Onboard";
import Login from "./Pages/Login";

const App = () => {
  return (
    <div className={styles["container"]}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Onboard" element={<Onboard />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
