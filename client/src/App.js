import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Upload from "./pages/Upload";
import MyGifts from "./pages/MyGifts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/mygifts" element={<MyGifts />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/editgift" element={<NotFound />} />
      {/* <Route index element={<Home />} /> */}
      {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
          
        </Route> */}
    </Routes>
  );
}

export default App;
