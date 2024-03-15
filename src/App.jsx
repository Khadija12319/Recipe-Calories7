import './App.css'
import Banner from './Banner/Banner'
import Foods from './Foods/Foods'
import Header from './Header/Header'
import Orders from './Orders/Orders'

function App() {

  return (
    <>
      <Header className='font'></Header>
      <Banner className='font'></Banner>
      <div className='md:flex container mx-auto'>
        <Foods></Foods>
        <Orders></Orders>
      </div>
    </>
  )
}

export default App
