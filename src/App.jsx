import { Routes, Route } from "react-router-dom";

import MarketingPage from "./components/MarketingPage";
import Container from "./components/Container";
import RecepieInfo from "./components/RecepieInfo";
import Login from "./components/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MarketingPage />} />

      <Route path="/home" element={<Container />} />
      <Route
        path="/recepie/:id"
        element={<ProtectedRoute Component={RecepieInfo} />}
      />

      <Route path="/login" element={<Login />} />
      {/* <Header/> */}
    </Routes>
  );
};

export default App;
