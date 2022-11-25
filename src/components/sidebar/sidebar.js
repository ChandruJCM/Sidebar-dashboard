import React, { useState } from 'react';
import { FaTh,FaBars}from "react-icons/fa";
import {SlLogout} from "react-icons/sl";
import { NavLink } from 'react-router-dom';



const Sidebar = ({children, values}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/#",
            name:"Logout",
            icon:<SlLogout/>
        },
      
      
    ]
    return (
        <div className=" bg-dark">
           <div style={{width: isOpen ? "226px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Hello User </h1>
                   <div style={{marginLeft: isOpen ? "30px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link text-decoration-none" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text ">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
           
        </div>
    );
};

export default Sidebar;