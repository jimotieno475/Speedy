import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AboutUs from './pages/static/AboutUs'
import Careers from './pages/static/Careers'
import Blog from './pages/static/Blog'
import HelpCentre from './pages/static/HelpCentre'
import Safety from './pages/static/Safety'
import ContactUs from './pages/static/ContactUs'
import Terms from './pages/static/Terms'
import Privacy from './pages/static/Privacy'
import Cookies from './pages/static/Cookies'
import CustomerApp from './apps/customer/CustomerApp'
import RiderApp from './apps/rider/RiderApp'
import AdminApp from './apps/admin/AdminApp'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/about" element={<AboutUs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/help" element={<HelpCentre />} />
      <Route path="/safety" element={<Safety />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/cookies" element={<Cookies />} />

      <Route path="/customer/*" element={<CustomerApp />} />
      <Route path="/rider/*" element={<RiderApp />} />
      <Route path="/admin/*" element={<AdminApp />} />
    </Routes>
  )
}