import PropTypes from 'prop-types';

const Order = ({order,index,handlePrepareItem}) => {
    const {recipe_name, prep_time, calories} =order;

    
    return (
        <tr className='bg-slate-100'>          
            <td className='text-[#494646] font-light md:font-normal leading-7 text-sm lg:text-base lg:pl-6 py-5'>{index + 1}</td>             
            <td className='text-[#494646] font-light md:font-normal leading-7 text-sm lg:text-base py-5'>{recipe_name}</td>            
            <td className='text-[#494646] font-light md:font-normal leading-7 text-sm lg:text-base py-5'>{prep_time} minutes</td>           
            <td className='text-[#494646] font-light md:font-normal leading-7 text-sm lg:text-base py-5'>{calories} calories</td>            
            <td className='font-normal text-base lg:pr-6 py-3'>
                <button className='text-[#150B2B] bg-[#0BE58A] text-sm px-[10px] md:px-[18px] py-[6px] lg:py-[9px] rounded-full font-normal' onClick={() => handlePrepareItem(order)}>Preparing</button>
            </td>
        </tr>
    );
};

Order.propTypes = {
    order: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handlePrepareItem: PropTypes.func.isRequired
}

export default Order;