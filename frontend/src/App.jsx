import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommunityPage from "./pages/community/community";
import LocationPage from "./pages/location/location";
import HomePage from "./pages/home-page";
import Navbar from "./components/home-components/navbar";
import Signup from "./pages/signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="h-16" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
