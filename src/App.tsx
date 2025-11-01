import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WelcomePage, HomePage, ProjectsPage } from "./pages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/about"
          element={
            <div className="min-h-screen bg-white flex items-center justify-center">
              <h1 className="text-4xl font-bold text-gray-800">About Page</h1>
            </div>
          }
        />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route
          path="/contact"
          element={
            <div className="min-h-screen bg-white flex items-center justify-center">
              <h1 className="text-4xl font-bold text-gray-800">Contact Page</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
