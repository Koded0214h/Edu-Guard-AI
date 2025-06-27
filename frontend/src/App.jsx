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
// Import others here...

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scan-text" element={<ScanText />}/>
        <Route path="/educate" element={<Educate />}/>
        <Route path="/report" element={<Report />}/>
        <Route path="/upload-doc" element={ <UploadDoc/>}/>
        {/* Add others as you go */}
      </Routes>
    </Router>
  )
}

export default App