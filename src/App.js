import './App.css';
import Item from './component/Item';
import Navbar from './component/Navbar';
import Wishlist from './component/Wishlist';
import {BrowserRouter as Router, Route, Routes}  from 'react-router-dom';
import Commodity from './component/Commodity';

function App() {
  return (
   <>

   <Navbar />
   <Routes>
    <Route exact path ="/" element= {<Item/>}/>
    <Route exact path ="/wishlist" element = {<Wishlist/>} />
    <Route exact path ="/wishlist/:id" element = {<Commodity/>} />
   </Routes>
   
   </>
  );
}

export default App;
