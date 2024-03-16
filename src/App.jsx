import { useState } from 'react'
import './App.css'
import Banner from './Banner/Banner'
import Foods from './Foods/Foods'
import Header from './Header/Header'
import Orders from './Orders/Orders'
//import PropTypes from 'prop-types'; 

function App() {
  const [orders, setOrders] = useState([]);

  const handleOrders = food => {
    const newFood = [...orders, food];
    setOrders(newFood);
  }

  const handleUpdateOrders = (updatedOrders) => {
    setOrders(updatedOrders);
};

  return (
    <>
      <Header className='font'></Header>
      <Banner className='font'></Banner>
      <div className='md:flex container mx-auto'>
        <Foods handleOrders ={handleOrders}></Foods>
        <Orders orders={orders} updateOrders={handleUpdateOrders}></Orders>
      </div>
    </>
  )
}

// App.propTypes ={
//   handleOrders: PropTypes.func.isRequired
// }

export default App
