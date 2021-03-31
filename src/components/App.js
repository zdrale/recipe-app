import React from 'react';
import Header from './Header'
import Hero from './Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Category from './Category';
class App extends React.Component {
    state = {term: ''};
    
   

    render() {
        return ( 
            <Router> 
                <div>
                   
                    <Route path="/" component={Header}/>
                    <Route path="/" exact component={Hero}/>
                    <Switch>
                        <Route path="/category" exact component={Category} />
                    </Switch>
                </div>
            </Router>
        )

    }
}

export default App;