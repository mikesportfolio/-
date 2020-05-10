import React, {Component} from 'react'
import '../css/jasny-bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/animate.css'
import '../css/responsive.css'
import 'font-awesome/css/font-awesome.min.css'
import '../css/style.css'
import {Link} from "react-scroll";

class HeaderMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cancel: null
        }
    }


    handleCancel = () => {
        this.setState((prevState) => {
            return {cancel: !prevState.cancel}
        })
    }

    render() {
        const {showValue} = this.props;
        let displayProperty = false;
        if (showValue) {
            displayProperty = showValue ? 'block' : 'none';
        }
        if (this.state.cancel) {
            displayProperty = this.state.cancel ? 'none' : 'block'
            console.log("cancel is called and value is " + this.state.cancel)
            this.state.cancel = false
        }

        console.log("show value at this point  " + showValue + '   and displayProperty value ' + displayProperty)
        return (
            <div className="navmenu navmenu-default navmenu-fixed-left offcanvas" style={{display: displayProperty}}>
                <div className="close" data-toggle="offcanvas" data-target=".navmenu">
                    <span className={"fa fa-close"} onClick={this.handleCancel}></span>
                </div>
                <div className="add-margin"></div>
                <ul className="navmenu-nav">
                    <li>
                        <Link className="down-btn page-scroll" href="#"
                              activeClass="active"
                              to="home"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                        >Home</Link>
                    </li>
                    <li>
                        <Link className="down-btn page-scroll" href="#"
                              activeClass="active"
                              to="meet-us"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                        >About Me</Link>
                    </li>
                    <li>
                        <Link className="down-btn page-scroll" href="#"
                              activeClass="active"
                              to="services"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                        >Skills</Link>
                    </li>
                    <li>
                        <Link className="down-btn page-scroll" href="#"
                              activeClass="active"
                              to="works"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                        >Portfolio</Link>
                    </li>
                    <li>
                        <Link className="down-btn page-scroll" href="#"
                              activeClass="active"
                              to="about-us"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                        >About Us</Link>
                    </li>
                    <li>
                        <Link className="down-btn page-scroll" href="#"
                              activeClass="active"
                              to="contact"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                        >Contact Us</Link>

                    </li>
                </ul>
            </div>
        )
    }
}

export default (HeaderMenu);