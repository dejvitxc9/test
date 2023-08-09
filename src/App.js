import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Main from "./components/main/Main";
import db from "./database.json";
import AboutMe from "./components/about-me/AboutMe";
import ProjectDetails from "./components/project-details/ProjectDetails";

function App() {
  const [theme, setTheme] = useState("App-dark");
  document.body.classList.add("dark-theme");

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme[0]);
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(newTheme[1]);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout handleThemeChange={handleThemeChange} theme={theme} />
          }
        >
          <Route index element={<Main db={db} />} />
          {db.reactJsProjects.map((appData, index) => {
            return (
              <Route
                key={index}
                path={appData.name}
                element={<ProjectDetails appData={appData} />}
              />
            );
          })}
          {db.androidProjects.map((appData, index) => {
            return (
              <Route
                key={index}
                path={appData.name}
                element={<ProjectDetails appData={appData} />}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
