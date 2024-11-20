// src/App.js
import React, {
  lazy,
  Suspense,
  useContext,
  useEffect,
  useState,
  useContext,
} from "react";
import Header from "./components/Header"; // Import your Header
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components from react-router-dom
import config from "./routes/config"; // Import your routing configuration
import userContext from "../src/utils/userContext";

function App() {
  const [userName, setUserName] = useState();
  // const { loggedInUser } = useContext(userContext);

  useEffect(() => {
    const data = {
      name: "Sanna K",
    };
    setUserName(data.name);
  }, []);
  return (
    <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <Router>
        <Header />
        <Routes>
          {config.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} /> // Define each route
          ))}
        </Routes>
      </Router>
    </userContext.Provider>
  );
}

export default App;
