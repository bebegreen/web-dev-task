import React from 'react';
import './header.scss';

const Header = ({handleStartNow}) => (
  <header>
    <img src='https://pages.sisense.com/rs/601-OXE-081/images/2016-lp-logo-sisense-1.svg' alt='logo' className='logo' />
    <nav>
      <ul>
        <li>Why Sisense</li>
        <li>Platform</li>
        <li>Solutions</li>
        <li>Resourses</li>
        <li>Customers</li>
        <li>
          <a className='start-now-btn' onClick={handleStartNow}>
            Start Now
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;