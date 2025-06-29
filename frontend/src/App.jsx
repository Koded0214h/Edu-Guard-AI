import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Sidebar from "./components/Sidebar"
import UploadDoc from "./pages/UploadDoc"
import ScanText from "./pages/ScanText"
import Educate from "./pages/Educate"
import Report from "./pages/Report"
import Landing from "./pages/Landing"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Support from "./pages/Support";
import ReportScam from "./pages/ReportScam";
// Import others here...

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scan-text" element={<ScanText />}/>
        <Route path="/educate" element={<Educate />}/>
        <Route path="/report" element={<Report />}/>
        <Route path="/upload-doc" element={ <UploadDoc/>}/>
        <Route path="/support" element={<Support />} />
        <Route path="/report-scam" element={<ReportScam />} />
        {/* Add others as you go */}
      </Routes>
    </Router>
  )
}

export default App