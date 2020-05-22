import React from "react";
import {Link} from "react-scroll";

const Footer = () => {

    return (<>
        <nav id="footer">
            <div className="container">
                <div className="pull-left">
                    <p>2020 © DNA. All Rights Reserved. Coded & Designed by <a
                        href="https://mikesportfolio.github.io">Mike</a></p>
                </div>
                <div className="pull-right">
                    <Link className="page-scroll"
                          activeClass="active"
                          to="home"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                    >
                        <div>Back to Top <span className="fa fa-angle-up"></span></div>
                    </Link>
                </div>
            </div>
        </nav>
    </>)
}
export default Footer;