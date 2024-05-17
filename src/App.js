import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import MainPage from "./pages/Main/index.jsx";
import RegistrationPage from "./pages/Registration/index.jsx";
import ViewPage from "./pages/View/index.jsx";
import { Layout } from "./components/Layout/index.jsx";
import "./App.css";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/view" element={<ViewPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
