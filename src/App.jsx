import React from "react";

import Navbar from "./widgets/navbar/navbar";
import MainRoutes from "./routes/MainRoutes";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />

    </div>
  );
};

export default App;
