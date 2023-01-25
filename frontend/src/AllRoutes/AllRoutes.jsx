import { Route, Routes } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import ProtectedRoute from "../components/ProtectedRoute";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductListPage from "../pages/ProductListPage";
import RegisterPage from "../pages/RegisterPage";

// Protected Admin Pages
import AdminAnalyticsPage from "../pages/admin/AdminAnalyticsPage";
import AdminChartPage from "../pages/admin/AdminChartPage";
import AdminCreateProductPage from "../pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "../pages/admin/AdminEditProductPage";
import AdminEditUserPage from "../pages/admin/AdminEditUserPage";
import AdminOrderDetailsPage from "../pages/admin/AdminOrderDetailsPage";
import AdminOrderPage from "../pages/admin/AdminOrderPage";
import AdminProductPage from "../pages/admin/AdminProductPage";
import AdminUsersPage from "../pages/admin/AdminUsersPage";

// Protected User Pages
import UserCartDetailsPage from "../pages/user/UserCartDetailsPage";
import UserOrderDetails from "../pages/user/UserOrderDetailsPage";
import UserOrderPage from "../pages/user/UserOrderPage";
import UserProfilePage from "../pages/user/UserProfilePage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product-list" element={<ProductListPage />} />
      <Route path="/product-details" element={<ProductDetailsPage />} />
      <Route path="/product-details/:id" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<ErrorPage />} />

      {/* user protected routes */}
      <Route element={<ProtectedRoute admin={false} />}>
        <Route path="/user" element={<UserProfilePage />} />
        <Route path="/user/my-orders" element={<UserOrderPage />} />
        <Route path="/user/order-details" element={<UserOrderDetails />} />
        <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
      </Route>

      {/* admin protected routes */}
      <Route element={<ProtectedRoute admin={true} />}>
        <Route path="/admin/users" element={<AdminUsersPage />} />
        <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
        <Route path="/admin/products" element={<AdminProductPage />} />
        <Route
          path="/admin/create-new-product"
          element={<AdminCreateProductPage />}
        />
        <Route path="/admin/edit-product" element={<AdminEditProductPage />} />
        <Route path="/admin/orders" element={<AdminOrderPage />} />
        <Route
          path="/admin/order-details"
          element={<AdminOrderDetailsPage />}
        />
        <Route path="/admin/charts" element={<AdminChartPage />} />
        <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
      </Route>
    </Routes>
  );
}

export default AllRoutes;