import ListofPlayers from './components/ListofPlayers';
import Scorebelow70 from './components/Scorebelow70';
import {OddPlayers} from './components/OddPlayers';
import {EvenPlayers} from './components/EvenPlayers';
import ListofIndianPlayers from './components/ListofIndianPlayers';
import './App.css'
var players=[
    {name:"Jack",score:50},
    {name:"Michael",score:70},
    {name:"John",score:40},
    {name:"Ann",score:61},
    {name:"Elisabeth",score:61},
    {name:"Sachin",score:95},
    {name:"Dhoni",score:100},
    {name:"Virat",score:84},
    {name:"Jadeja",score:64},
    {name:"Raina",score:75},
    {name:"Rohit",score:80}
]

var flag=true;

const T20Players=['First Player','Second Player','Third Player'];
const RanjiTrophyPlayers=['Fourth Player','Fifth Player','Sixth Player'];
export const IndianPlayers=[...T20Players, ...RanjiTrophyPlayers];

const IndianTeam=['Sachin','Dhoni','Virat','Rohit','Yuvaraj','Raina'];

function App()
{
    if(flag===true)
    {
        return(
            <div className='App'>
                <h1> List of Players</h1>
                <ListofPlayers players={players}/>
                <hr/>
                <h1> List of Players having Scores Less than 70 </h1>
                <Scorebelow70 players={players}/>
            </div>
        )
    }
    else{
        return(
            <div className='App'>
                <div>
                    <h1> Odd Players </h1>
                    {OddPlayers(IndianTeam)}
                    <hr/>
                    <h1> Even Players</h1>
                    {EvenPlayers(IndianTeam)}
                </div>
                <hr/>
                <div>
                    <h1> List of Indian Players Merged:</h1>
                    <ListofIndianPlayers IndianPlayers={IndianPlayers}/>
                </div>
            </div>
        )
    }
}
export default App;
