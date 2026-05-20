import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import AppLayout from './components/layout/AppLayout';
import ToastContainer from './components/ui/Toast';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import RoadmapView from './pages/RoadmapView';
import ProgressTracker from './pages/ProgressTracker';
import Settings from './pages/Settings';
import PublicProfile from './pages/PublicProfile';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/u/:slug" element={<PublicProfile />} />

            {/* Authenticated routes */}
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/roadmap/:pathId" element={<RoadmapView />} />
              <Route path="/progress" element={<ProgressTracker />} />
              <Route path="/settings" element={<Settings />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
