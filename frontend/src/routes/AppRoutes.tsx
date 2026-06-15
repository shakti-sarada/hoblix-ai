import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ProtectedRoute from "../components/common/ProtectedRoute";

import MainLayout from "../components/layout/MainLayout";

import LoginPage from "../pages/Login/LoginPage";
import ChatPage from "../pages/Chat/ChatPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import BookingsPage from "../pages/Bookings/BookingsPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <MainLayout>
                <ChatPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <MainLayout>
                <ProfilePage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <MainLayout>
                <BookingsPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/"
          element={<Navigate to="/chat" replace />}
        />

        <Route
          path="*"
          element={<Navigate to="/chat" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;