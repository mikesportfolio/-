import React, {Component} from "react";
import Typed from "react-typed";
import HeaderMenu from "./HeaderMenu";
import {properties} from './Properties/VariableComponent'


class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.spanRef = React.createRef();
    }

    state = {
        menu: null
    };

    toggleMenu = () => {
        this.setState((prevState) => {
            return {menu: true}
        });
        console.log("header component current state " + this.state.menu)
    }

    handleMainPageTitleColor = (text) => {
        let span = this.spanRef;
        let str = text.split('');

    }

    componentDidMount() {
        //let text = this.spanRef.current.textContent = properties.mainPageTitle;

        let arrayText = properties.mainPageTitle.split('');
        let retVal = arrayText.map((char) => {
            if (char == "." || char == "\'") {
                return '<span class="charSpan' + '">' + char + '</span>';
            }
            return char;
        }).join('');
        this.spanRef.current.innerHTML = retVal;
        console.log(this.spanRef.current);
    }

    render() {
        const show = (this.state.menu) ? "show" : "";
        return (
            <div>
                <div id="home">
                    <div className="container text-center">
                        <nav id="menu" data-toggle="offcanvas" data-target=".navmenu" onClick={this.toggleMenu}>
                            <span className={"fa fa-bars"}>
                            </span>
                        </nav>

                        <div className="content">
                            <h4><span id="phrase" ref={this.spanRef}> hello </span></h4>
                            <hr/>
                            <div className="header-text btn">
                                <h1>
                            <span id="head-title">
                             <Typed
                                 strings={["I make applications^1000",
                                     "24/7 available for hire^1000",
                                     "Web design with a diffence^1000",
                                     "Software re-engineering and development^1000"]}
                                 typeSpeed={100}
                                 loop={true}
                                 startDelay={100}
                             />
                        </span>
                                </h1>
                            </div>
                        </div>

                        <a href="#meet-us" className="down-btn page-scroll">
                            <span className="fa fa-angle-down"></span>
                        </a>
                    </div>
                </div>
                <HeaderMenu showValue={this.state.menu}/>
            </div>
        )
    }
}

export default (HomeComponent);