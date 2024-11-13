// import React, { useEffect, useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import MasterLayout from './layouts/admin/MasterLayout';
// import axios from 'axios';

// const AdminPrivateRoute = () => {
//   const [isAuthenticated, setAuthenticated] = useState(null); // Start as null to distinguish initial loading state

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const res = await axios.get(`/api/checkingAuthenticated`);
//         if (res.status === 200) {
//           setAuthenticated(true);
//         } else {
//           setAuthenticated(false);
//         }
//       } catch (error) {
//         setAuthenticated(false); // Set to false on error
//       }
//     };

//     checkAuth();
//   }, []);

//   // Handle loading state
//   if (isAuthenticated === null) {
//     return <div>Loading...</div>; // Display loading indicator while checking auth status
//   }

//   return isAuthenticated ? <MasterLayout /> : <Navigate to="/login" replace />;
// };

// export default AdminPrivateRoute;


import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import axios from 'axios';

const AdminPrivateRoute = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    axios.get('/api/admin/checkAuthenticated', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('auth_token')}`
      }
    }).then(res => {
      if (res.status === 200) {
        setAuthenticated(true);
      }
    }).catch(() => {
      setAuthenticated(false);
    });
  }, []);

  return isAuthenticated ? <MasterLayout /> : <Navigate to="/admin/login" />;
};

export default AdminPrivateRoute;
