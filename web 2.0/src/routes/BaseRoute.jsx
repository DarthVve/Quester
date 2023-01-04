import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import { HomePage, NotFoundPage, SignUpPage, SignInPage, DashBoardPage, EditPage, VerificationPage } from "../pages";

const BaseRoute = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      {/* <Route path="/dashboard/edit" element={<EditPage />} /> */}
      {/* <Route path="/dashboard/verification" element={<VerificationPage />} /> */}

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashBoardPage />} >
          <Route path="/dashboard/edit" element={<EditPage />} />
          <Route path="/dashboard/verification" element={<VerificationPage />} />
          {/* <Route path="transactions" element={<TransactionsPage />} /> */}
        </Route>
      </Route>

      {/* Catch all */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default BaseRoute;