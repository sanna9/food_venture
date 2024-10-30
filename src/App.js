// src/App.js
import React, { lazy, Suspense } from "react";
import Header from "./components/Header"; // Import your Header
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components from react-router-dom
import config from "./routes/config"; // Import your routing configuration

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {config.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} /> // Define each route
        ))}
      </Routes>
    </Router>
  );
}

export default App;
