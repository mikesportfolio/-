import React, {Component} from 'react';
import './App.css';
import HeadComponent from './components/HomeComponent';

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
            </div>
        )
            ;
    }

}

export default App;
