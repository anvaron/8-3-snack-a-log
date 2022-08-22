// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import NotFound from "./Pages/NotFound";

//import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snacks" element={<Index />} />
          <Route path="/snacks/:id" element={<Show />} />
          <Route path="/snacks/:id/edit" element={<Edit />} />
          <Route path="/snacks/new" element={<New />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}