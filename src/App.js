import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import BottomNav from "./components/BottomNav/BottomNav";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Applications from "./pages/Applications/Applications";
import Documents from "./pages/Documents/Documents";
import Profile from "./pages/Profile/Profile";
import UniversityDetail from "./pages/UniversityDetail/UniversityDetail";
import FinancialPlanning from "./pages/FinancialPlanning/FinancialPlanning";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/university/:id" element={<UniversityDetail />} />
            <Route path="/financial-planning" element={<FinancialPlanning />} />

            {/* Placeholder routes */}
            <Route path="/eligibility" element={<PlaceholderPage title="Eligibility Checker" />} />
            <Route path="/compare" element={<PlaceholderPage title="Compare Universities" />} />
            <Route path="/scholarships" element={<PlaceholderPage title="Scholarships" />} />
            <Route path="/book-consultation" element={<PlaceholderPage title="Book Consultation" />} />
            <Route path="/notifications" element={<PlaceholderPage title="Notifications" />} />
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
        background: '#2563eb',
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
