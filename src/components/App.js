import React from 'react';
import Header from './Header'
import Hero from './Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Category from './Category';
import Categories from './Categories';
import Stake from './video/video.mp4';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Footer from './Footer';


class App extends React.Component {
    state = {term: ''};
    
    render() {
        return ( 
            <Router> 
                    <video style={{position:"absolute",
                                    width:"100%",
                                    left:"50%",
                                    top:"50%",
                                    height:"100%",
                                    objectFit:"cover", 
                                    transform:"translate(-50%,-50%)", 
                                    zIndex:"-1",
                                    filter: "blur(3px)"
                                 }} 
                           autoPlay loop muted>
                        <source src={Stake} type="video/mp4" />
                    </video>
                    <Route path="/" component={Header}/>
                    <Route path="/" exact component={Hero}/>
                    <Route path="/" component={Categories}/>
                    
                    <Switch>
                        <Route path="/category" exact component={Category} />
                    </Switch>
                    <Route path="/" component={AboutUs}/>
                    <Route path="/" component={ContactUs}/>
                    <Route path="/" component={Footer}/>

            </Router>
        )

    }
}

export default App;