import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Box } from "./Box";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("../pages/Home"));
const Gallery = lazy(() => import("../pages/Gallery"));
const RegisterForm = lazy(() => import("../pages/RegisterForm"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="register" element={<RegisterForm />} />
      </Route>
    </Routes>
  );
};
