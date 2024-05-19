import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import EventsPage from "./pages/Events/index.jsx";
import RegistrationPage from "./pages/Registration/index.jsx";
import EventDetails from "./pages/EventDetails/index.jsx";
import { Layout } from "./components/Layout/index.jsx";
import "./App.css";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Routes>
          <Route exact path="/" element={<EventsPage />} />
          <Route path="/:eventId" element={<EventDetails />} exact/>
          <Route path="/:eventId/registration" element={<RegistrationPage />} exact/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
