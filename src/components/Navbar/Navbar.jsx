import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import { images, data } from '../../constants';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#">
          <img src={images.gericht} alt="app logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        {data.links.map((item, index) => (
          <li className="p__opensans" key={`${item.title} ${index} - big`}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <div />
        <a href="#book-table" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#FFF"
          fontSize={27}
          style={{ cursor: 'pointer' }}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div
            className="app__navbar-smallscreen_overlay flex__center slide-bottom"
            onClick={() => setToggleMenu(false)}
          >
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              {data.links.map((item, index) => (
                <li
                  className="p__opensans"
                  key={`${item.title} ${index} - small`}
                >
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
