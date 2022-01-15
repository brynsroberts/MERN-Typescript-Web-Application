import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App: React.FC = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="*" element={<Users />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
