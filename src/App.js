import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Detail } from './pages';


class App extends Component {
    render() {
        return (
            <div className="appMain"> 
                <Route exact path="/" component={Home}/>
                <Route path="/detail" component={Detail}/>
            </div>
        );
    }
}

export default App;