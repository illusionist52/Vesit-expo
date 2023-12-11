import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ForumPage from "./pages/ForumPage";
import ExperiencesPage from "./pages/ExperiencesPage";
import CompaniesPages from "./pages/CompaniesPages";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import Applayout from "./pages/Applayout";
import ProfilePage from "./pages/ProfilePage";
import ProfileDetails from "./pages/ProfileDetails";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Applayout/>}>
          <Route path="/" element={<Homepage />} />
          <Route path="/forums" element={<ForumPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/companies" element={<CompaniesPages />} />
          </Route>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/details" element={<ProfileDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Toaster/>
    </div>
  );
}

export default App;
