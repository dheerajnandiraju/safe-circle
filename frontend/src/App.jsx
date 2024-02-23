import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommunityPage from "./pages/community/community";
import LocationPage from "./pages/location/location";
import HomePage from "./pages/home-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/location" element={<LocationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
