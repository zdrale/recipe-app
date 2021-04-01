import React from 'react';
import './Category.css';
import Categories from './Categories';

const Category = ()=> {

    return (
        <div className="recommendationsWrapper">
            <div className="recommendations">
                <h1>{}</h1>
                <p>Our Recommendation</p>
                {/* <img src={}/> */}
            </div>
            <p></p>
            <br/>
        </div>
    )
    
}


export default Category;