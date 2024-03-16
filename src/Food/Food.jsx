import PropTypes from 'prop-types'; 
import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";

const Food = ({food, handleOrders}) => {
    const {recipe_image, recipe_name, short_description, prep_time, calories,ingredients} = food;
    return (
        <div className='p-6 border-[1px] rounded-3xl'>
           <img src={recipe_image} alt="" className='h-[300px] w-full rounded-3xl' />
           <h2>{recipe_name}</h2>
           <p>{short_description}</p>
           <hr></hr>
           <h3>Ingredients: {ingredients.length}</h3>
           <ul>
           {
            ingredients.map((ingredient, idx) => <li key={idx} className='list-disc list-inside'>{ingredient}</li>)
           }
           </ul>
           <hr></hr>
           <div className='flex gap-6'>
           <p><span className='flex'><IoMdTime /> {prep_time} minutes</span></p>
           <p><span className='flex'><FaFire /> {calories} minutes</span></p>
           </div>
           <button type="button" className='text-[#150B2B] bg-[#0BE58A] px-6 py-3 rounded-full' onClick={() => handleOrders(food)}>Want to Cook</button>
           
        </div>
    );
};

Food.propTypes= {
    food : PropTypes.object.isRequired,
    handleOrders: PropTypes.func.isRequired
}
export default Food;