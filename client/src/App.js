import React from 'react'
import AuthProvider from './context/AuthContext'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Upload from './pages/Upload'
import MyGifts from './pages/MyGifts'
import EditGift from './pages/EditGift'
import Register from './pages/Register'
import Login from './pages/Login'
import ProtectedRoute from './components/protectedRoutes'
import LayOut from './pages/LayOut'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route  path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="profile" element={<Profile />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/editgift/:id" element={<EditGift />} />
            <Route path="/mygifts" element={<MyGifts />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
