import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './data';

function App() {
  const cardElement = data.map(item => 
    {
      return (
      <Card 
       key = {item.id}
       item = {item}
      />
      )
    })
  return (
    <div>
         <Navbar/>
         <Hero/>
         <section className = "cards--div">
             {cardElement}
         </section>

         {/* <Card
         img = "./ankur-warikoo.png"
         rating = "5.0"
         noOfPeople = "16"
         country = "USA"
         topic = "Life lessons with Ankur Warikoo"
         price= "2500"
         />

         <Card
         img = "./scuba-diving.png"
         rating = "4"
         noOfPeople = "14"
         country = "India"
         topic = "Swim With us"
         price = "8500"
         />

        <Card
        img = "./japan-forest.png"
         rating = "3.9"
         noOfPeople = "140"
         country = "Nigeria"
         topic = "Devotion"
         price = "485"
         /> */}

         
    </div>
  );
}

export default App;
