// routes.js
import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';
import Category from '../components/admin/Category/Category'
import ViewCategory from '../components/admin/Category/ViewCategory';
import EditCategory from '../components/admin/Category/EditCategory';
import AddProduct from '../components/admin/product/AddProduct';
import ViewProduct from '../components/admin/product/ViewProduct';
//import ViewProduct2 from '../components/admin/product/ViewProduct2';
import ProductView from '../components/admin/product/ProductView';
import ProductStore from '../components/admin/product/ProductStore';
import EditProduct from '../components/admin/product/EditProduct';

const routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/category', name: 'category', component: Category },
  { path: '/view-category', name: 'view-category', component: ViewCategory },
  { path: '/edit-category/:id',exact: true, name: 'edit-category', component: EditCategory },
  { path: '/add-product', exact: true, name: 'add-product', component: AddProduct },
  { path: '/view-product', exact: true, name: 'view-product', component: ViewProduct },
  { path: '/product-view', exact: true, name: 'product-view', component: ProductView },
  { path: '/product-store', exact: true, name: 'product-view', component: ProductStore },
  { path: '/edit-product/:id', exact: true, name: 'edit-product', component: EditProduct },
  

];

export default routes;
