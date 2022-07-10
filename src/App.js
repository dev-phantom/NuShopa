import React from "react";
import styles from "../src/styles/app.module.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing';

const App = () => {
  return (
    <div className={styles["container"]}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
