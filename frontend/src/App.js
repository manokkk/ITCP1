
import './App.css';
//import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Category from './Pages/Category';
import About from './Pages/About';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/LoginSignup';
import SignUp from './Components/SignUp/SignUp';

import Admin from './Admin Pages/Admin'
import Add_Product from './Admin Pages/Add_Product';
import ListProduct from './Admin Components/ListProduct/ListProduct';
import AdminCategory from './Admin Components/AdminCategory/AdminCategory';


//import Footer from './Components/Footer/Footer';
import smartphone_banner from './Components/Assets/banner_smartphone.png'
import laptop_banner from './Components/Assets/banner_laptop.png'
import wearable_banner from './Components/Assets/banner_wearable.png'
import camera_banner from './Components/Assets/banner_camera.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/category/smartphones' element={<Category banner={smartphone_banner} category="smartphones"/>}/>
        <Route path='/category/laptops' element={<Category banner={laptop_banner} category="laptops"/>}/>
        <Route path='/category/wearables' element={<Category banner={wearable_banner} category="wearables"/>}/>
        <Route path='/category/cameras' element={<Category banner={camera_banner} category="cameras"/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>

        <Route path='/admin' element={<Admin/>}/>
        <Route path='/addproduct' element={<Add_Product/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
        <Route path='/admin-category' element={<AdminCategory/>}/>
        
        

      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;