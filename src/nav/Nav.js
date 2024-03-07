import React, { Component } from "react";
import {Link,useLocation} from "react-router-dom";
import astronuatHelmet from "../assets/astronaut-helmet.png";
import education from "../assets/education.png";
import deadEye from "../assets/dead-eye.png";
import experience from "../assets/experience.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";
import "../styles/nav.css";

export default function Nav() {
    const location=useLocation();

    const getNavPositionClass = () => {

        switch (location.pathname){
            case "/":
                return "nav-about";
            case "/education":
                return "nav-education";
            case "/skills":
                return "nav-skills";
            case "/experience":
                return "nav-experience";
            case "/projects":
                return "nav-projects";
            case "/contact":
                return "nav-contact";
            default:
                return "";
        }
    };

    const getPageTitle=()=>{
        switch (location.pathname){
            case "/":
                return "ABOUT";
            case "/education":
                return "EDUCATION";
            case "/skills":
                return "SKILLS";
            case "/experience":
                return "EXPERIENCE";
            case "/projects":
                return "PROJETCS";
            case "/contact":
                return "CONTACT";
            default:
                return "";
        }
    }

    const NavPositionClass = getNavPositionClass();
    const PageTitle = getPageTitle();

const isCurrentPage = (navClass) => {
    return navClass === NavPositionClass;
};

  const renderNavLink = (to,imgSrc,altText,navClass)=>{
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? "nav-link current" :
    "nav-link"
    return (
        <Link to={to} className={linkClass}>
            <img src={imgSrc} alt={altText}/>
            {isCurrent && <h1 className="page-title">{PageTitle}</h1>}
        </Link>
    );
  };

  return (
    <nav className = {`nav ${NavPositionClass}`}>
        {renderNavLink(
            "/",
            astronuatHelmet,
            "astronaunt helmet icon",
            "nav-about"
        )}
        {renderNavLink(
            "/education",
            education,
            "education icon",
            "nav-education"
        )}
        {renderNavLink(
            "/skills",
            deadEye,
            "deadEye icon",
            "nav-skills"
        )}
        {renderNavLink(
            "/experience",
            experience,
            "experience icon",
            "nav-experience"
        )}
        {renderNavLink(
            "/projects",
            stack,
            "stack icon",
            "nav-projects"
        )}
        {renderNavLink(
            "/contact",
            envelope,
            "envelope icon",
            "nav-contact"
        )}
    </nav>
  );
}
