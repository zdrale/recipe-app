import React, {useState, useEffect} from 'react';
import './HeroStyle.css';


function Hero() {
        useEffect(() => {
            fetchRandomMeal();
        }, []); 

       const [image, setImage] = useState([]);

     

        const fetchRandomMeal = async () => {
            const data = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            const randomMeal = await data.json();
            setImage(randomMeal.meals);
            console.log(randomMeal.meals);
        }
   

        return (
            <div className="hero">
                <div className="about">
                    <h1>Food Recipes</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,specimen book. </p>
                    <button className="categoriesBtn">Categories</button>
                </div>
              
                   {image.map(item=>(
                       <img className="herroImage" src={item.strMealThumb}/>
                   ))}
               
          
            </div>
           
        )
    
}

    
export default Hero;