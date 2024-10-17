import React from "react";
import { TbHexagonLetterO} from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";
import SidebarIcon from './SidebarIcon'

import "./sidebar.css";

const Sidebar = () => {
  return (
    <>
    <SidebarIcon/>
    <div className="sidebar">
      <span className="sidebar_top">
        <TbHexagonLetterO  />
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
                
          </ul>
          <div className="profile" >
                    <div ><AiOutlineUser className="user_icon"/></div>
                    <div className="user_detail" t>
                      <h5>Avano</h5>
                      <h6>Project Manager</h6>
                    </div>
                    <div ><IoIosArrowDown className="profarrow"/></div>
          </div> 
        </div>
        
      </div>
    </div>
    </>
  );
};

    
export default Sidebar;
