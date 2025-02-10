import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <FloatingContact />
      <Footer />
    </div>
  );
};

export default Layout;