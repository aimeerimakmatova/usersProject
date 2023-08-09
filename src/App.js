import './App.css';
import UserName from './components/UserName';


const array = [
  {
    name:"AIMEERIM",
    age:17,
    date:"2023",
    id:1
  },
  {
    name:"PERIZAT",
    age:18,
    date: "2021",
    id:2
  },
  {
    name:"AIYM",
    age:19,
    date: "2010",
    id:3
  },
  {
    name:"NURIZA",
    age:20,
    date:"2011",
    id:4
  },
]

function App() {
  return (
    <div className="App">
  {
    array.map((el)=>{
      return(
      <UserName key={el.id} name={el.name} age={el.age} date={el.date} />
 
      )
    })
  }
    </div>
  );
}

export default App;

