import PropTypes from 'prop-types';
import Order from '../Order/Order';
import { useState } from 'react';
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
        <div className="md:w-[40%] ml-6 border-[1px] p-6 rounded-3xl h-fit">
            <div className="text-center">
                <h3>Want to cook: {orders.length}</h3>
                <hr className="w-[350px] mx-auto" />
                <div>
                    <table className='w-[100%] border-collapse'>
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
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
            <h3>Currently cooking: {prepare.length}</h3>
            <hr className="w-[350px] mx-auto" />
                <div>
                    <table className='w-[100%] border-collapse'>
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                        </thead>
                        <tbody className=''>
                        {
                        prepare.map((prepitem,index) => (
                                <tr key={prepitem.recipe_id}>
                                    <td>{index +1}</td>
                                    <td>{prepitem.recipe_name}</td>
                                    <td>{prepitem.prep_time} minutes</td>
                                    <td>{prepitem.calories} calories</td>
                                </tr>
                            ))
                        }
                        <tr> 
                            <td></td>
                            <td></td>
                            <td>Total Time = <br></br>
                                {totalTime} minutes</td>
                            <td>Total Calories = <br></br>
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