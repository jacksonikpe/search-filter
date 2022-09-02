import './App.css';
import Data from './MOCK_DATA.json'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  return (
    <div className="App">
      {/* Search Input */}
      <input 
        type="text" 
        placeholder='Search Name...'
        onChange={(e) => setName(e.target.value)}
      />
      {/* Filter name when searched */}
        {Data.filter((value) => {
          if(name === '') {
            return value
          } else if ( value.first_name.toLowerCase().includes(name.toLowerCase())){
            return value
          }         
        }).map((name, index) => {
          return(<p key={index}>{name.first_name}</p>)
        })}
        {console.log(name)}
    </div>    
  );
}

export default App;
