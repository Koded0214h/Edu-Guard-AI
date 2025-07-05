import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Sidebar from "./components/Sidebar"
import TestimonialsSection from "./components/TestimonialsSection"
import CTASection from "./components/CTASection"
import FAQSection from "./components/FAQSection"
import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection"
import HowItWorksSection from "./components/HowItWorksSection"
import Footer from "./components/Footer"
import { Header } from "./components/Header"
import UploadDoc from "./pages/UploadDoc"
import ScanText from "./pages/ScanText"
import Educate from "./pages/Educate"
import Report from "./pages/Report"
import LoginPage from "./pages/LoginPage"
import LandingPage from "./pages/LandingPage"
import LoginForm from "./components/LoginForm"
import SignupForm from "./components/SignupForm"
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
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Add others as you go */}
      </Routes>
    </Router>
  )
}

export default App