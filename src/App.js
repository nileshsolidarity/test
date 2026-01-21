import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import BottomNav from "./components/BottomNav/BottomNav";
import Home from "./pages/Home/Home";
import Destinations from "./pages/Destinations/Destinations";
import Packages from "./pages/Packages/Packages";
import Bookings from "./pages/Bookings/Bookings";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/destination/:id" element={<PlaceholderPage title="Destination Details" />} />
          </Routes>
        </div>
        <BottomNav />
      </BrowserRouter>
    </div>
  );
}

// Placeholder component for incomplete pages
const PlaceholderPage = ({ title }) => (
  <div style={{
    padding: '60px 20px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto'
  }}>
    <h1 style={{ fontSize: '28px', color: '#1f2937', marginBottom: '15px' }}>
      {title}
    </h1>
    <p style={{ color: '#6b7280', fontSize: '16px', marginBottom: '30px' }}>
      This feature is coming soon!
    </p>
    <div style={{ fontSize: '60px', marginBottom: '20px' }}>🚀</div>
    <a
      href="/"
      style={{
        display: 'inline-block',
        background: '#667eea',
        color: 'white',
        padding: '12px 30px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: '600'
      }}
    >
      Back to Home
    </a>
  </div>
);

export default App;
