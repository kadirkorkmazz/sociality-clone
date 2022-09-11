import React, { useState } from 'react';
import menuIcon1 from '../img/menuIcon1.svg';
import menuIcon2 from '../img/menuIcon2.svg';
import menuIcon3 from '../img/menuIcon3.svg';
import menuIcon4 from '../img/menuIcon4.svg';
import menuIcon5 from '../img/menuIcon5.svg';
import menuIcon6 from '../img/menuIcon6.svg';

function Menu() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const menuContent = [
    {
      index: 1,
      title: 'NOTIFICATIONS',
      icon: menuIcon1,
    },
    {
      index: 2,
      title: 'SUMMARY',
      icon: menuIcon2,
    },
    {
      index: 3,
      title: 'PUBLISH',
      icon: menuIcon3,
    },
    {
      index: 4,
      title: 'ENGAGE',
      icon: menuIcon4,
    },
    {
      index: 5,
      title: 'LISTEN',
      icon: menuIcon5,
    },
    {
      index: 6,
      title: 'REPORT',
      icon: menuIcon6,
    },
  ];

  return (
    <div className='menu'>
      {menuContent.map((menu) => (
        <div
          key={menu.index}
          onClick={() => toggle(menu.index)}
          className={selected === menu.index ? 'selectedMenu' : ''}
        >
          <div className='menuTop'>
            <img src={menu.icon} alt={`${menu.title} icon`} />
            <span className='content'>{menu.title}</span>
            <span>{selected === menu.index ? '-' : '+'}</span>
          </div>
          <div className='subMenu'>
            <div>Compose</div>
            <div>Feed</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
