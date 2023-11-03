import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "@/routes";

import "react-toastify/dist/ReactToastify.css";
import Header from "./pages/Header";

function App() {
  return (
    <>
      <div className="bg-white">
        <Header />
      </div>

      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
