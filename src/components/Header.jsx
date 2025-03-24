import React from 'react';
import logo from '../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-2 py-2'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <p className='text-gray-500 text-2xl '>Journalism Without Fear or Favour</p>
            <div className='text-xl'>
               {
 moment().format("dddd, MMMM MM, YYYY.")
               } 
           </div>

        </div>
    );
};

export default Header;