import logo from './logo.svg';
import './App.css';
import data from "./data.json";
import Card from"./components/Card";


function App() {
  console.log(data);
  return (
    <div className="App">
  
      {data.datafirst.map((card)=>
      <Card {...card} card={card}/>
      )}


    </div>
  );
}

export default App;
