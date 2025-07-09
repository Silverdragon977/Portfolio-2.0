import React from 'react';
import ThemeToggleButton from './ThemeToggleButton'; 

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
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
          {/* Navigation link items */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/public/index.php" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Portfolio
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Projects</a></li>
              <li><a className="dropdown-item" href="#">Resume</a></li>
              <li><a className="dropdown-item" href="#">Contact</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Admin</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Games
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Click Hero</a></li>
          </ul>
        </li>
          <li className="nav-item">
            <ThemeToggleButton />
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
