import PropTypes from 'prop-types'; 
import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import '../App.css'

const Food = ({food, handleFoodClick}) => {
    const {recipe_image, recipe_name, short_description, prep_time, calories,ingredients} = food;
    return (
        <div className='p-6 border-[1px] rounded-3xl font'>
           <img src={recipe_image} alt="" className='h-[300px] w-full rounded-3xl' />
           <h2 className='pt-6 text-[#282828] text-xl font-semibold'>{recipe_name}</h2>
           <p className='py-4 text-[16px] font-normal leading-8 text-[#878787]'>{short_description}</p>
           <hr></hr>
           <h3 className='pt-6 text-[#282828] text-[18px] font-medium pb-4'>Ingredients: {ingredients.length}</h3>
           <ul className='pb-4'>
           {
            ingredients.map((ingredient, idx) => <li key={idx} className='list-disc list-inside text-[#878787] text-[18px] font-normal leading-8'>{ingredient}</li>)
           }
           </ul>
           <hr></hr>
           <div className='flex gap-6 py-6'>
           <p className='mr-5'><span className='flex text-[#878787]'><IoMdTime className='h-6 w-6 mr-2'/> {prep_time} minutes</span></p>
           <p><span className='flex text-[#878787]'><FaFire className='h-6 w-6 mr-2'/> {calories} minutes</span></p>
           </div>
           <button type="button" className='text-[#150B2B] bg-[#0BE58A] px-6 py-3 rounded-full font-medium text-[18px]' onClick={() => handleFoodClick(food)}>Want to Cook</button>
           
        </div>
    );
};

Food.propTypes= {
    food : PropTypes.object.isRequired,
    handleFoodClick: PropTypes.func.isRequired
}
export default Food;