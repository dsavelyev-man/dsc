import React, { useCallback, useState } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routing from "./roting";

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={routing} />
    </React.StrictMode>
  );
};

createRoot(document.getElementById("root") as HTMLDivElement).render(<App />);
