import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MusicList from './pages/MusicList'; // Importe o componente MusicList
import Evaluation from './pages/Evaluation';
import NotificationPopup from './components/NotificationPopup';
import Profile from './pages/Profile';
import Withdraw from './pages/Withdraw';
import Verification from './pages/Verification';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
        <NotificationPopup /> {/* Adiciona o pop-up de avaliações */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Header />
                <Home />
              </ProtectedRoute>
            } />
            <Route path="/music-list" element={
              <ProtectedRoute>
                <Header />
                <MusicList /> {/* Adicione a rota do MusicList */}
              </ProtectedRoute>
            } />
            <Route path="/evaluation/:id" element={
              <ProtectedRoute>
                <Header />
                <Evaluation />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Header />
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/withdraw" element={
              <ProtectedRoute>
                <Header />
                <Withdraw />
              </ProtectedRoute>
            } />
            <Route path="/verification" element={
              <ProtectedRoute>
                <Header />
                <Verification />
              </ProtectedRoute>
            } />
            <Route path="/logout" element={
              <ProtectedRoute>
                <Header />
                <Logout />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;