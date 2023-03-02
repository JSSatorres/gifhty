import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'

const LayOut = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default LayOut
