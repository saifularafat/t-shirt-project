import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='my-container text-right py-4'>
            <Link to= '/' className='link-style'>Home</Link>
            <Link to= '/review' className='link-style'>Order Review</Link>
            <Link to= '/about' className='link-style'>About</Link>
            <Link to= '/contact' className='link-style'>Contact us</Link>
            <Link to= '/login' className='link-style pr-2'>Login</Link>
        </div>
    );
};

export default Header;