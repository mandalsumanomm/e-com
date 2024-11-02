import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import routes from '../../routes/routes'; 

const MasterLayout = () => {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <Routes>
              {routes.map((route, idx) => {
                return (
                  <Route
                    key={idx}
                    path={route.path}
                    element={<route.component />}
                  />
                );
              })}
              <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MasterLayout;
