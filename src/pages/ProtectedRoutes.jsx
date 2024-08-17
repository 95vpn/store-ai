import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

    if (localStorage.getItem('token')) {
        return <Outlet/>        
    } else {
        return <Navigate to='/login'/>
    }

  return (
    <div>ProtectedRoutes
        
    </div>
  )
}

export default ProtectedRoutes;