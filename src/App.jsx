import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Recipes from './components/Recipes/Recipes'

function App() {


  return (
    <>
      <Navbar />
      <Banner />
      <div className='w-11/12 md:w-3/5 mx-auto mt-20 space-y-4'>
        <h2 className='text-4xl font-bold text-center'>Our Recipes</h2>
        <p className='text-[#150B2B99] text-center'>Welcome to our collection of delectable recipes! Explore a variety of classic Italian dishes crafted with care and passion. From the savory Spaghetti Bolognese to the refreshing Chicken Caesar Salad, our recipes are designed to delight your taste buds and nourish your body.</p>
      </div>
      <Recipes />
    </>
  )
}

export default App
