import React from 'react';
import navLinks from "../../assets/dummy-data/navLinks";
import './sidebarIcon.css'
import { NavLink } from 'react-router-dom';


const SidebarIcon = () => {
  return (
    <div>
      <ul className="sidebarIcon">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                  <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                  <i className={item.icon}></i>

    

                
                </NavLink>                                       
              </li>
              
            ))}
                
          </ul>
    </div>
  )
}

export default SidebarIcon
