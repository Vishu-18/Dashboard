import React from "react";
import { TbHexagonLetterO} from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <span className="sidebar_top">
        <TbHexagonLetterO size={30} />
        <h2>Dashboard</h2>
      </span>
      <div className="sidebar_content">
        <div className="menu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                  <i className={item.icon}></i>

                  {item.display}
                <div className="arrow"><i className={item.arrow}></i></div>

                
                </NavLink>                                        
              </li>
              
            ))}
            <div className="profile">
                    <div ><AiOutlineUser className="user_icon"/></div>
                    <div className="user_det" t>
                      <h5>Avano</h5>
                      <h6>Project Manager</h6>
                      <span ><IoIosArrowDown className="profarrow"/></span>
                    
                    </div>
                </div> 
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
