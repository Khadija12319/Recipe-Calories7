import { useEffect, useState } from "react";
import Food from "../Food/Food";
import PropTypes from 'prop-types'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { Toast } from "react-toastify/dist/components";

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
        }else {
            toast('You selected this dish already', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
                });
        }
        }; 

    return (
        <>
        <ToastContainer></ToastContainer>
        <div className="md:w-[60%] grid md:grid-cols-2 gap-6">
            {
                foods.map( food => <Food key={food.recipe_id} food={food} handleFoodClick={handleFoodClick}></Food>)
            }
        </div>
        </>
    );
}


Foods.propTypes ={
    handleOrders : PropTypes.func.isRequired,
    handleFoodClick : PropTypes.func.isRequired
}

export default Foods;