import React from 'react';
import './HeaderStyle.css';
import {Link} from 'react-router-dom'


class Header extends React.Component {
    

    render() {
        return (
        <div className="center">
            <div className="search-bar ui segment">
                <form  className="ui form">
                    <div className="field">
                        <input type="text" placeholder="Search Recipes" className="input" />
                    </div>
                </form>
                <div className="nav">
                        <i className="far fa-user-circle"></i>
                        <Link to='/about'>
                            <a href="#">About Us</a>
                        </Link>
                        <Link to='/contact  '>    
                            <a href="#">Contact</a>
                        </Link>
                    </div>
            </div>
        </div>
           
        )
    }
}

    
export default Header;