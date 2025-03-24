import React, { useContext } from 'react';
import { Link} from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import userIcon from "../assets/user.png"
const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    return (
        <div className='flex justify-between'>
            <div className=''>
            {
                        user && user?.email ? <div>
                            
                          
                            <h2 className='text-blue-900 lg:text-2xl font-bold pt-5'>{user.displayName} <span className='text-black lg:text-2xl text-3 '> </span></h2> 
                            {/* <p >{user.displayName}</p> */}
                        </div> :  <img  src={userIcon} alt="" />
                    }
                   
             {/* <h2 className='text-blue-900 lg:text-2xl font-bold pt-5'>Welcome <span className='text-black lg:text-2xl text-3 '> {}</span></h2>  */}
               
            </div>
            <div className='flex gap-4 items-center'>
                <Link className='font-semibold' to='/'>Home</Link>
                <Link className='font-bold' to='carrier'>Carrier</Link>
                <Link className='font-bold' to='about'>About</Link>
            </div>
            <div className='flex items-center gap-2'>
                <div>
                    {
                        user && user?.email ? <div>
                            
                            <img className='w-10 rounded-full' src={user?.photoURL} alt="" />
                         
                        </div> :  <img  src={userIcon} alt="" />
                    }
                   
                </div>
            
                    {
                       user && user?.email ?
                        (<button onClick={logOut} className='btn btn-neutral'>Log-Out</button>) 
                        :
                         ( <Link to="/auth/login" className='btn btn-neutral'>Login</Link>)
                    }

            </div>
        </div>
    );
};

export default Navbar;