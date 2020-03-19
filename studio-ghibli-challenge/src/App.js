import React from 'react'
import './App.css'
import Card from '../src/components/Card';
import Header from '../src/components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Card />  
      
    </div>
  )
}




// const URL_TO_FETCH = 'https://ghibliapi.herokuapp.com/films';

// fetch(URL_TO_FETCH, {
//   method: 'get'
// })
// .then(function(response => response.json) {
// })
// .catch(function(err) {console.error(err); });


export default App;

