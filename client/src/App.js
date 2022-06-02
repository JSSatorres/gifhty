import React from "react";
import AuthProvider from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Upload from "./pages/Upload";
import MyGifts from "./pages/MyGifts";
import EditGift from "./pages/EditGift";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/mygifts" element={<MyGifts />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/editgift/:id" element={<EditGift />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
