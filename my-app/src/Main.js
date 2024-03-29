import React from 'react';
import { useState,useReducer } from 'react'
import { Route, Routes,useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import ConfirmedBooking from'./ConfirmedBooking';
import Booking from "./Booking";
import Header from './Header';
import About from './About';
import Login from './Login';
import Signup from './Signup';

//import Header from './Header';



const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        // For now, returning the same state, you can update it based on the selected date
        return state;
      default:
        return state;
    }
  };
//const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

function Main()
{
  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}
  const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

  const submitAPI = function(formData) {
    return true;
};
  const initialState = {availableTimes:  fetchAPI(new Date())}
        // Use useReducer to manage state
        const [state, dispatch] = useReducer(updateTimes, initialState);

        // Function to handle state change based on selected date
        function updateTimes(state, date) {
          return {availableTimes: fetchAPI(new Date(date))}
      }

      const navigate = useNavigate();
      function submitForm (formData) {
          if (submitAPI(formData)) {
              navigate("/confirmed")
          }
      }
  

    return(
        <main>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/reservation" element={<Booking availableTimes={state} updateTimes={updateTimes}  dispatch={dispatch} submitForm={submitForm}/>} />
      <Route path="/confirmed" element={<ConfirmedBooking/> } />
      <Route path="/about" element={<About/> } />
      <Route path="/login" element={<Login/> } />
      <Route path="/signup" element={<Signup/> } />
      
      
    </Routes>
   
        </main>
    )
}
export default Main;