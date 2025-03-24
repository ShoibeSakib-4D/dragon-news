import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import HomeLayout from '../Layout/HomeLayout';
import CategoryPages from '../components/Pages/CategoryPages';
import AuthLayout from '../Layout/AuthLayout';
import Login from '../components/Pages/Login';
import Register from '../components/Pages/Register';
import ReadFullNews from '../components/Pages/ReadFullNews';
import PrivateRoute from './PrivateRoute';


const Router = () => {
  return (
      <Routes>
          {/* HomeLayout as the base layout */}
          <Route path="/" element={<HomeLayout />}>

            <Route path="" element={<Navigate to="/category/01"></Navigate>}/>

              {/* Content will appear inside <Outlet/> in HomeLayout */}
            <Route path="/category/:id" element={<CategoryPages></CategoryPages>}/>
              
          </Route>

          {/* Read More Routes */}
          <Route path="/news/:id" element={
            <PrivateRoute>
              <ReadFullNews></ReadFullNews>
            </PrivateRoute>
          } />

          <Route path="auth" element={<AuthLayout></AuthLayout>}>
              <Route path="/auth/login" element={<Login></Login>} />
              <Route path="/auth/register" element={<Register></Register>} />
          </Route>


          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
  );
}

export default Router;