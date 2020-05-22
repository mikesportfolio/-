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
import ReactGa from 'react-ga';

class App extends Component {

initAnalytics = ()=>{
    ReactGa.initialize("UA-117514705-1")
    ReactGa.pageview('/')
}
    state = {
        menu: false
    };

    manipulateState = (menu) => {
        this.menu = menu;
    }

    render() {
        this.initAnalytics();
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
