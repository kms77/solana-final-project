import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
