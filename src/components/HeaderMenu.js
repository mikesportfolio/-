import React, {Component} from 'react'
import '../css/jasny-bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/animate.css'
import '../css/responsive.css'
import 'font-awesome/css/font-awesome.min.css'
import '../css/style.css'

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
                    <li><a href="#home" className="page-scroll">Home</a></li>
                    <li><a href="#meet-us" className="page-scroll">Overview</a></li>
                    <li><a href="#services" className="page-scroll">Services</a></li>
                    <li><a href="#works" className="page-scroll">Portfolio</a></li>
                    <li><a href="#about-us" className="page-scroll">About Us</a></li>
                    <li><a href="#contact" className="page-scroll">Contact Us</a></li>
                </ul>
            </div>
        )
    }
}

export default (HeaderMenu);