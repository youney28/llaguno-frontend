import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticleList from './pages/ArticleListPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import DashboardPage from './Pages/DashboardPages/DashboardPage';
import ReportPage from './Pages/DashboardPages/ReportPage';
import UsersPage from './Pages/DashboardPages/UsersPage';
import DashLayout from './Components/DashLayout'; 
import DashArticlePageList from './Pages/DashboardPages/DashArticlePageList';

import './styles/Layout.css';

function AppLayout() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const hideNavbarOn = ['/login', '/register'];

  const shouldHideNavbar = hideNavbarOn.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route path="/articles/list" element={<ArticleList />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        
        {/* Dashboard routes wrapped in DashLayout */}
        <Route element={<DashLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/reports" element={<ReportPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/dashboard/articles" element={<DashArticlePageList />} />
        </Route>
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;