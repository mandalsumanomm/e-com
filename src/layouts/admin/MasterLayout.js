import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import routes from '../../routes/routes';

const MasterLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <div className="flex-1 overflow-auto p-4">
          <Routes>
            {routes.map((route, idx) => {
              const Component = route.component;
              return (
                <Route
                  key={idx}
                  path={route.path}
                  element={<Component />}
                />
              );
            })}
            <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
          </Routes>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MasterLayout;
