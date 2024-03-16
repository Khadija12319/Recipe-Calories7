import PropTypes from 'prop-types';
import Order from '../Order/Order';
const Orders = ({orders}) => {
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
                         orders.map((order, index) => <Order key={order.recipe_id} order={order} index={index}></Order>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
           
        </div>
    );
};

Orders.propTypes = {
    orders: PropTypes.array.isRequired
}

export default Orders;