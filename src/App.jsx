import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NavBar from "./components/NavBar";
import Categories from "./pages/Categories";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
