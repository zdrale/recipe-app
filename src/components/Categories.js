import React, {useState, useEffect} from 'react';
import './Categories.css';
import { useHistory } from "react-router-dom";
import Category from './Category';



const Categories = () => {
    useEffect(() => {
        fetchCategories();
    }, []); 

   const [category, setCategory] = useState([]);
   
   const history = useHistory();

   const routeChange = () =>{ 
     let path = {Category}; 
     history.push(path);
   }


    const fetchCategories = async () => {
        const categories = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const categoriesJson = await categories.json();
        setCategory(categoriesJson.categories);
        console.log(categoriesJson.categories);
    }

    const onCategoryClick = (item) => {
      const selectedCategory = item;
      console.log(selectedCategory);
    }

    return (
        <div className="categories" id="categories">
            {category.map(
                item=>(<div onClick={()=>onCategoryClick(item)}><a href="/category"><img src={item.strCategoryThumb}/></a><p>{item.strCategory}</p></div>))}
        </div>      
    )
}

    
export default Categories;