import React from 'react';
import Search from './Search';
import logo from '../../content/Logo.png';

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className='navbar navbar-dark bg-dark d-flex flex-row justify-content-around'>
        <div className='d-flex' style={{ flexBasis: '25%' }}>
          <div>
            <img src={logo} className='' />
          </div>
          <div className='d-flex text-white'>
            <h3 className='m-auto pl-3'>Image Finder</h3>
          </div>
        </div>
        <Search />
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
