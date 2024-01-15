
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import BookingForm from './BookingForm';
import Menu from './Menu';

import { Route, Routes } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';



function App() {
  return (
    < >
      
      <Nav />
      
      
      <Main/>
      
      <Menu/>
      
      <Footer/>
      
     {/* <Header />
      <Menu/>
      <Main />
      <Footer />
  */}
      

    </>
  );
}

export default App;
