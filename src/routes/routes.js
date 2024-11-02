// routes.js
import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';

const routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', name: 'Profile', component: Profile },
];

export default routes;
