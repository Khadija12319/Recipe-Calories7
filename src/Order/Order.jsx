import PropTypes from 'prop-types';

const Order = ({order,index}) => {
    const {recipe_name, prep_time, calories} =order;
    return (
        <tr>          
            <td>{index + 1}</td>             
            <td>{recipe_name}</td>            
            <td>{prep_time} minutes</td>           
            <td>{calories} calories</td>            
            <td>
                <button>Preparing</button>
            </td>
        </tr>
    );
};

Order.propTypes = {
    order: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default Order;