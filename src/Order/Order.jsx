import PropTypes from 'prop-types';

const Order = ({order,index}) => {
    const {recipe_name, prep_time, calories} =order;
    return (
        <tr className='bg-slate-200'>          
            <td className='pl-6 py-5'>{index + 1}</td>             
            <td className='py-5'>{recipe_name}</td>            
            <td className='py-5'>{prep_time} minutes</td>           
            <td className='py-5'>{calories} calories</td>            
            <td className='pr-6 py-3'>
                <button className='text-[#150B2B] bg-[#0BE58A] px-[18px] py-[9px] rounded-full'>Preparing</button>
            </td>
        </tr>
    );
};

Order.propTypes = {
    order: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default Order;