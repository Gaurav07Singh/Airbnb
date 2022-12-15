import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';

function App() {
  return (
    <div>
         <Navbar/>
         <Hero/>

         <div className = "cards--div">

        
         <Card
         img = "./scuba-diving.png"
         rating = "5.0"
         noOfPeople = "16"
         country = "USA"
         topic = "Life lessons with Ankur Warikoo"
         price= "2500"
         />

         <Card
         rating = "4"
         noOfPeople = "14"
         country = "India"
         topic = "Swim With us"
         price = "8500"
         />

        <Card
         rating = "3.9"
         noOfPeople = "140"
         country = "Nigeria"
         topic = "Devotion"
         price = "485"
         />

         </div>
    </div>
  );
}

export default App;
