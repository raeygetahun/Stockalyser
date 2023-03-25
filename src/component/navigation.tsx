import React from 'react';
import euro from 'https://app.divizend.com/static/media/eu.fc2e6a53.svg'
import '../styles/App.css'

interface NavbarProps {
  logo: string;
}

const Navbar: React.FC<NavbarProps> = ({ logo }) => {
  return (
    <nav className='Navbar'>
      <div className="navbar-logo">
        <img src={logo} height='50px' width={'100px'} alt="Logo" />
        <img src='https://app.divizend.com/static/media/eu.fc2e6a53.svg' height='25px' width={'35px'} alt="Logo" />
      </div>
      <div className='list'>
      <a href="/">Home</a>
      </div>
      <div className='list'>
      <a href="/">Application</a>
      </div>
      <div className='list'>
      <a href="/">Help Center</a>
      </div>
      {/* <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/application">Application</a>
        </li>
        <li>
          <a href="/helpcenter">Help Center</a>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
