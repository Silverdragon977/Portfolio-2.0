import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-xxl">
        <a href='#Home' className="navbar-brand">
         <span className="fw-bold text-secondary">MichaelHoward977</span>
        </a>

        <button className="navbar-toggler" type='button' data-bs-toggle="collapse"
        data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false"
        aria-label="Toggle navigation">
            <span className='navbar-toggler-icon'></span>
        </button>

      <div className='collapse navbar-collapse justify-content-end align-center' id='main-nav'>
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <a className='nav-link' href='#Projects'>Projects</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href='#Resume'>Resume</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href='#Contact'>Contact</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href='#Admin'>Admin</a>
            </li>
           <li className='nav-item ms-2 d-none d-md-inline'>
                <a className='btn btn-secondary' href='#Login'>Login/SignUp</a>
            </li>
        </ul>
      </div>


      </div>
    </nav>
  );
};

export default Navbar;
