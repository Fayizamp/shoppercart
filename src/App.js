import Footer from "./components/Footer";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Product from "./pages/Product";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register"
import Contacts from "./pages/Contacts";
import Productdetails from "./pages/Productdetails";
import {useEffect, useState } from "react";
import { getAllProducts } from "./redux/productSlice";
import { useDispatch } from "react-redux";


// import Login from "./pages/Contact";

//parrams - parameter passes to                - through path
//useParrams hook uses for it ) --  used to access parrams


//----------cons of props-------
//props drilling - passing props to anotheer and anothe
// unidirection -


// useContext  - global state

function App() {

  const dispatch = useDispatch();

  const [ cartCount , setCartCount] = useState(0);
  const getCount = () =>{
    setCartCount(cartCount +1)
  }

 
  // useEffect (()=>{
  //   getCount();
  // })
  const [product, setProduct] = useState([])

  const getProduct = () => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => dispatch(getAllProducts(data)))
  }

  useEffect(() => {
    getProduct();
  },[]);

  
  return (
    <BrowserRouter>
      <Header cartCount = {cartCount}  />
       <Routes>
         <Route  path="/" element={<Home getCount = {getCount}/>} />
         <Route  path="/products" element= {<Product product = {product} getCount = {getCount} />} />
         <Route  path="/services" element={<Services />} />
         <Route  path="/login" element={<Login />} />
         <Route  path="/register" element={ <Register /> } />
         <Route  path="/contacts" element={<Contacts />} />         
         <Route  path="/productdetails/:id" element={<Productdetails getcount = {getCount} />} />         
       </Routes>
       <Footer />
    </BrowserRouter>
  );
}

export default App;
