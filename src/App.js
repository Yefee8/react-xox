import logo from './logo.svg';
import './App.css';
import {Square} from "./Square"
import {clickEvent} from "./Functions";

export let xox = [
{
    index:1,
    content:''
},
{
    index:2,
    content:''
},
{
    index:3,
    content:''
},
{
    index:4,
    content:''
},
{
    index:5,
    content:''
},
{
    index:6,
    content:''
},
{
    index:7,
    content:''
},
{
    index:8,
    content:''
},
{
    index:9,
    content:''
},
];

let playerTurn = 'X'

const listItems = xox.map((nums) =>
 <Square className='a' key={nums.index} onclick={()=>{
if(clickEvent(nums.content, nums.index-1, playerTurn)){
if(playerTurn === 'X'){
    xox[nums.index-1].content = 'X';
    document.getElementsByClassName('square')[nums.index-1].innerHTML = 'X'
    return playerTurn = 'O'
}
else{
    xox[nums.index-1].content = 'O';
    console.log(nums.index)
    document.getElementsByClassName('square')[nums.index-1].innerHTML = 'O'
    return playerTurn = 'X'
}
}
}}>

 </Square>
);
function App() {
  return (
    <div className="App">
        <header>
          <img src={logo} alt="React logo"/>
            <h1>XOX</h1>
        </header>

        <button className="restart">
            Restart game
        </button>

        <div className="playground">
            {listItems}
        </div>
    </div>
  );
}

export default App;
