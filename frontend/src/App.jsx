import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommunityPage from "./pages/community/community";
import LocationPage from "./pages/location/location";
import HomePage from "./pages/home-page";
import Navbar from "./components/home-components/navbar";
import Signup from "./pages/signup";
import AttendanceTracker from "./pages/security/attendance";
import Appointments from "./pages/security/appointments";
import ComplaintForm from "./pages/complaint";
import Admindashboard from "./pages/admin/admindashboard";
import Payments from "./pages/admin/payments";
import CommunityDashboard from "./pages/communitydashboard";
import Invoice from "./pages/admin/invoice";




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="h-16" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/:id" element={<CommunityPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/attendance" element={<AttendanceTracker/>}/>
        <Route path="/appointment" element={<Appointments/>}/>
        <Route path="/complaint" element={<ComplaintForm />} />
        <Route path="/admin" element={<Admindashboard/>}/>
        <Route path="/payment" element={<Payments/>}/>
        <Route path="/invoice" element={<Invoice/>}/>
        <Route path="/communitydashboard" element={<CommunityDashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
