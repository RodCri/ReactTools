import { useState } from 'react';
import './App.css'
import { Count } from './Components/Count';
import { useEffect } from 'react';
import { CardUser } from './Components/CardUser/CardUser';
// import Gallery from './Components/Gallery';

function App() {

  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState();

  const handleCounter = () =>{
    setCounter(counter + 1)
  }
  
  const fetchInfo = async() =>{
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    }catch(error){
      console.log(error)
    }
  }

  // Sincronizar con entidades externas endpoint servicio componentes 
  useEffect(() => {
    fetchInfo();    
  }, [])
  

  return (
    <>
        {/* <Gallery></Gallery> */}
        <button onClick={handleCounter}>Click</button>
        <Count>{counter}</Count>
        <button>fetchUser</button>
        {users
          ? users.map(user=> <li key={user.id}>{user.name}</li>)
          : <p>No</p> 
        }
        <hr />
        <CardUser></CardUser>
    </>
  )
}
export default App