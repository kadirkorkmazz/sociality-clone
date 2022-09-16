import React, { useState } from 'react';
import logo1 from '../img/logo1.svg';
import logo2 from '../img/logo2.svg';
import logo3 from '../img/logo3.svg';
import logo4 from '../img/logo4.svg';
import logo5 from '../img/logo5.svg';
import logo6 from '../img/logo6.svg';

function Clients() {
  const [selected, setSelected] = useState(null);

  const clients = [
    {
      index: 1,
      title: 'Client 1',
      logo: logo1,
    },
    {
      index: 2,
      title: 'Client 2',
      logo: logo2,
    },
    {
      index: 3,
      title: 'Client 3',
      logo: logo3,
    },
    {
      index: 4,
      title: 'Client 4',
      logo: logo4,
    },
    {
      index: 5,
      title: 'Client 5',
      logo: logo5,
    },
    {
      index: 6,
      title: 'Client 6',
      logo: logo6,
    },
  ];

  return (
    <div className='client-logos'>
      {clients.map((client) => (
        <div
          key={client.index}
          onClick={() => setSelected(client.index)}
          className={selected === client.index ? 'selectedClient' : ''}
        >
          <div className='clientLocation'></div>
          <img src={client.logo} alt={`${client.title} logo`} />
          <span>99</span>
        </div>
      ))}
    </div>
  );
}

export default Clients;
