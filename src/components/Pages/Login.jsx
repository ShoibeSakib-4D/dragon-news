import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
  const location = useLocation()
  const nevigate = useNavigate()
  console.log(location)
  const {userLogin,setUser} = useContext(AuthContext)
  const [error,setError] =useState({})
  const handleSubmit = event =>{
    event.preventDefault()

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    
    userLogin(email,password)
    .then((result) =>{
      const user = result.user;
      setUser(user)
      nevigate(location?.state ? location.state : "/")
    })
    .catch((err)=>{
      setError({...error, login:err.code})
    })
  }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
                <h1 className='text-2xl text-center font-semibold'>Login to Your Account</h1>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="fieldset-label ">Email</label>
          <input name="email" type="email" className="input w-full" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input name="password" type="password" className="input w-full" placeholder="Password" />
          {
            error.login && (
              <label className="fieldset-label text-red-500">{error.login}</label>
            )
          }
          <div><a className="link link-hover">Forgot password?</a></div>
        
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
      <h3 className='text-center'>Dont’t Have An Account ? <Link className='text-red-800' to="/auth/register">Register</Link></h3>
    </div>
  </div>
        
    );
};

export default Login;