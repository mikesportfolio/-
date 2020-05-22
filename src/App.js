import React, {Component} from 'react';
import './App.css';
import HeadComponent from './components/HomeComponent';
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experiences from "./components/Experiences";
import Resume from "./components/Resume";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

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
                <Resume/>
                <Experiences/>
                <ContactMe/>
                <Footer/>
            </div>
        )
            ;
    }

}

export default App;
