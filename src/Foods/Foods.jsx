import { useEffect, useState } from "react";
import Food from "../Food/Food";

const Foods = () => {

    const [foods , getFoods]= useState([]);

    useEffect( () => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => getFoods(data));
    },[]);

    return (
        <div className="md:w-[60%]">
            <p>Foods : {foods.length}</p>
            <Food food={foods}></Food>
        </div>
    );
}

export default Foods;