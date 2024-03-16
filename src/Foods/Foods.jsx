import { useEffect, useState } from "react";
import Food from "../Food/Food";
import PropTypes from 'prop-types'; 

const Foods = ({handleOrders}) => {

    const [foods , getFoods]= useState([]);
    const [clickedItems, setClickedItems] = useState([]);
    

    useEffect( () => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => getFoods(data));
    },[]);

    const handleFoodClick = (food) => {
        if (!clickedItems.includes(food.recipe_id)) {
            setClickedItems([...clickedItems, food.recipe_id]);
            handleOrders(food);
        }
    }; 

    return (
        <div className="md:w-[60%] grid md:grid-cols-2 gap-6">
            {
                foods.map( food => <Food key={food.recipe_id} food={food} handleFoodClick={handleFoodClick}></Food>)
            }
        </div>
    );
}

Foods.propTypes ={
    handleOrders : PropTypes.func
}

export default Foods;