import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext, useState } from 'react';

const Register = () => {
  const {createNewUser,setUser,updateUserProfile} = useContext(AuthContext);

  const[error,setError] = useState({})

  const navigate = useNavigate();

  const handleSubmit = (event) =>{
    
    event.preventDefault()
    const formData = new FormData(event.target);
    const name = formData.get("name");
    if(name.length < 5)
    {
      setError({...error, name:"must be 6 charaters or long" });
      return;
    }
    const photo = formData.get("photo");
    const email = formData.get("email");
    const password = formData.get("password");

    createNewUser(email, password)
    .then((result) => {
      // Signed up 
      const user = result.user;
      setUser(user)
      // console.log(user)
      updateUserProfile({displayName:name,
        photoURL:photo})
        .then(()=>{
          navigate("/")
        })
        .catch((error)=>{
          // console.log(error)
        })
      // ...
    })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.log(errorCode,errorMessage)
    // ..
  })
  }
    return (
  <div className='min-h-screen flex justify-center items-center'>
             <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
                 <h1 className='text-2xl text-center font-semibold'>Register Your Account</h1>
       <div className="card-body">
         <form onSubmit={handleSubmit} className="fieldset">
           <label className="fieldset-label ">Name</label>
           <input name="name" type="text" className="input w-full" placeholder="Name" />
           {
            error.name && (
              <label className="fieldset-label text-red-500">
                {error.name}
              </label>
            )
           }
           <label className="fieldset-label ">Photo</label>
           <input name='photo' type="text" className="input w-full" placeholder="Photo-url" />
           <label className="fieldset-label ">Email</label>
           <input name="email" type="email" className="input w-full" placeholder="Email" />
           <label className="fieldset-label">Password</label>
           <input name="password" type="password" className="input w-full" placeholder="Password" />
           <div><a className="link link-hover">Forgot password?</a></div>
           <button className="btn btn-neutral mt-4">Signup</button>
         </form>
       </div>
       <h3 className='text-center'> Already Have an account? <Link className='text-red-800 ' to="/auth/login">Login</Link></h3>
     </div>
   </div>
     
    );
};

export default Register;