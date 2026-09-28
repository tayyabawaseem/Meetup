import React from 'react'
import { Outlet } from 'react-router-dom'

const protectedroutes = () => {
  return (
    <Outlet />
  )
}

export default protectedroutes