import React from 'react';
import logo1 from '../img/logo1.svg';
import logo2 from '../img/logo2.svg';
import logo3 from '../img/logo3.svg';
import logo4 from '../img/logo4.svg';
import logo5 from '../img/logo5.svg';
import logo6 from '../img/logo6.svg';

function Clients() {
  return (
    <div className='client-logos'>
      <img src={logo1} alt='Logo1' />
      <img src={logo2} alt='Logo2' />
      <img src={logo3} alt='Logo3' />
      <img src={logo4} alt='Logo4' />
      <img src={logo5} alt='Logo5' />
      <img src={logo6} alt='Logo6' />
    </div>
  );
}

export default Clients;
