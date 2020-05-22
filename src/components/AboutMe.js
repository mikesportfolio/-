import React from "react";
import {properties} from "./Properties/VariableComponent";
import '../css/style.css'
import {Link} from "react-scroll";


const AboutMe = () => {
    return (
        <div>
            <div id="meet-us">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md">
                            <div className="section-title">
                                <h2 className="section-title">About Me</h2>
                                <hr/>
                            </div>
                            <p className="innerText"> {properties.aboutMeText}</p>
                            <Link className="down-btn page-scroll"
                                  activeClass="active"
                                  to="services"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                            >
                                <div className="col-md-12"><span className="fa fa-angle-down"></span></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="overview-video">
                <div className="overlay">
                    <div className="container">

                        <Link className="down-btn page-scroll"
                              activeClass="active"
                              to="services"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                        >
                            <div className="col-12"><span className="fa fa-play"></span></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutMe;