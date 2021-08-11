import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import logo from '../../assets/popcorn.png'
import "./MenuTop.sass"




const MenuTop = () => {
    return (
        <div className="menu-top">
           <div className="menu-top__logo">
              <img className="menu-top__img" src={logo} alt="popcorn" />
          </div>
      <Menu
        mode="horizontal"
      >
        <Menu.Item key="1">
          <Link to="/proyecto-peliculas">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/new-movies">New Movies</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/popular">Popular</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/search">Search</Link>
        </Menu.Item>
      </Menu>
    </div>
    );
};

export default MenuTop;
