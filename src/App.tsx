import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Building2, Users, Wallet, BarChart2, AlertCircle, Bell } from 'lucide-react';
import Sidebar from './components/Sidebar';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './lib/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Properties from './pages/Properties';
import Tenants from './pages/Tenants';
import Finances from './pages/Finances';
import Disputes from './pages/Disputes';
import Reminders from './pages/Reminders';

const navigation = [
  { name: 'Dashboard', icon: BarChart2, path: '/' },
  { name: 'Properties', icon: Building2, path: '/properties' },
  { name: 'Tenants', icon: Users, path: '/tenants' },
  { name: 'Finances', icon: Wallet, path: '/finances' },
  { name: 'Disputes', icon: AlertCircle, path: '/disputes' },
  { name: 'Reminders', icon: Bell, path: '/reminders' },
];

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <div className="flex h-screen bg-gray-100">
                  <Sidebar navigation={navigation} />
                  <main className="flex-1 overflow-y-auto p-8">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/properties" element={<Properties />} />
                      <Route path="/tenants" element={<Tenants />} />
                      <Route path="/finances" element={<Finances />} />
                      <Route path="/disputes" element={<Disputes />} />
                      <Route path="/reminders" element={<Reminders />} />
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                  </main>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;