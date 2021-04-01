import React, {useState, useEffect} from 'react';
import './Categories.css';

const Categories = () => {
    useEffect(() => {
        fetchCategories();
    }, []); 

   const [category, setCategory] = useState([]);
 

    const fetchCategories = async () => {
        const categories = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const categoriesJson = await categories.json();
        setCategory(categoriesJson.categories)
        console.log(categoriesJson.categories);
    }

    

    return (
        <div className="categories" id="categories">
            {category.map(
                item=>(<div><img src={item.strCategoryThumb}/><p>{item.strCategory}</p></div>))}
        </div>      
    )
}

    
export default Categories;