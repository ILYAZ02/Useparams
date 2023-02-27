import { useEffect, useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Home'
import AboutParams from './AboutParams'
function App() {
  const [state, setState] = useState()
  const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await response.json()
    setState(json);
  }
  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home state={state}/>} />
        <Route path=':id' element={<AboutParams />} />
      </Routes>
    </div>
  );
}

export default App;
