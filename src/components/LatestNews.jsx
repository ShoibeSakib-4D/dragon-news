import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router';

const LatestNews = () => {
    return (
        <div className='bg-gray-500 px-3 py-2 flex gap-2 items-center rounded'>
            <div className='bg-[#D72050] px-3 py-2 rounded'>
                <p className='text-white'>Lates</p>
            </div>
         <Marquee pauseOnHover={true}>
         <p className='text-white space-x-2'>
                <Link to='/news'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, numquam. </Link>
                <Link to='/news'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, numquam.</Link>
                <Link to='/news'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, numquam.</Link>
                <Link to='/news'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, numquam.</Link>
                <Link to='/news'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, numquam.</Link>
            </p>
         </Marquee>
        </div>
    );
};

export default LatestNews;