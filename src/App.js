import React, {Component} from 'react';
import './App.css';
import HeadComponent from './components/HomeComponent';
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

class App extends Component {

    state = {
        menu: false
    };

    manipulateState = (menu) => {
        this.menu = menu;
    }

    render() {
        return (
            < div className="App">
                <HeadComponent manipulateState={this.manipulateState}/>
                <AboutMe/>
                <Skills/>
                <Portfolio/>
            </div>
        )
            ;
    }

}

export default App;
