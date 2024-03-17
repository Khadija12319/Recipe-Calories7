import PropTypes from 'prop-types';
import Order from '../Order/Order';
import { useState } from 'react';
import '../App.css'
const Orders = ({orders, updateOrders}) => {

    const [prepare, setPrepare] = useState([]);
    const [clickedItems, setClickedItems] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    const handlePrepareItem = (item) => {
        if (!clickedItems.includes(item.recipe_id)) {
            const newItem = [...prepare, item];
            const updatedOrders = orders.filter(order => order.recipe_id !== item.recipe_id);
            setPrepare(newItem);
            setTotalTime(prevTime => prevTime + parseInt(item.prep_time));
            setTotalCalories(prevCalories => prevCalories + parseInt(item.calories));
            setClickedItems([...clickedItems, item.recipe_id]);
            updateOrders(updatedOrders);

    
        }
    };

    return (
        <div className="lg:w-[40%] md:w-[50%] m-2 md:m-0 md:ml-6 border-[1px] p-2 md:p-6 rounded-3xl h-fit font">
            <div className="text-center">
                <h3 className='text-[#282828] text-2xl font-semibold pb-4'>Want to cook: {orders.length}</h3>
                <hr className="lg:w-[350px] mx-auto" />
                <div className='pt-6 pb-8'>
                    <table className='w-[100%] border-collapse'>
                        <thead>
                        <tr>
                            <th className='text-[#878787] font-medium text-base pb-4'></th>
                            <th className='text-[#878787] font-medium text-base pb-4'>Name</th>
                            <th className='text-[#878787] font-medium text-base pb-4'>Time</th>
                            <th className='text-[#878787] font-medium text-base pb-4'>Calories</th>
                            <th className='text-[#878787] font-medium text-base pb-4'></th>
                        </tr>
                        </thead>
                        <tbody className=''>
                        {
                         orders.map((order, index) => <Order key={order.recipe_id} order={order} index={index} handlePrepareItem={handlePrepareItem}></Order>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="text-center">
            <h3 className='text-[#282828] text-2xl font-semibold pb-4'>Currently cooking: {prepare.length}</h3>
            <hr className="lg:w-[350px] mx-auto" />
                <div className='pt-6 pb-8'>
                    <table className='w-[100%] border-collapse'>
                        <thead>
                        <tr>
                            <th className='text-[#878787] font-medium text-base pb-4'></th>
                            <th className='text-[#878787] font-medium text-base pb-4'>Name</th>
                            <th className='text-[#878787] font-medium text-base pb-4'>Time</th>
                            <th className='text-[#878787] font-medium text-base pb-4'>Calories</th>
                        </tr>
                        </thead>
                        <tbody className=''>
                        {
                        prepare.map((prepitem,index) => (
                                <tr key={prepitem.recipe_id} className='bg-slate-100'>
                                    <td className='text-[#494646] font-light md:font-normal leading-7 text-sm lg:text-base py-5 lg:pl-6'>{index +1}</td>
                                    <td className='text-[#494646] font-light md:font-normal leading-7 text-sm lg:text-base py-5'>{prepitem.recipe_name}</td>
                                    <td className='text-[#494646] font-light md:font-normal leading-7 text-sm lg:text-base py-5'>{prepitem.prep_time} minutes</td>
                                    <td className='text-[#494646] font-light md:font-normal leading-7 text-sm lg:text-base py-5'>{prepitem.calories} calories</td>
                                </tr>
                            ))
                        }
                        <tr> 
                            <td></td>
                            <td></td>
                            <td className='pt-4 text-[#494646] leading-7 font-medium text-base'>Total Time = <br></br>
                                {totalTime} minutes</td>
                            <td className='pt-4 text-[#494646] leading-7 font-medium text-base'>Total Calories = <br></br>
                                {totalCalories} calories</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
           
        </div>
    );
};

Orders.propTypes = {
    orders: PropTypes.array.isRequired,
    updateOrders:PropTypes.func
}

export default Orders;