import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { useHistory } from 'react-router-dom'

function App() {
  const history = useHistory()
  const [toLogin, setToLogin] = useState('toLogin')
  useEffect(() => {
    setTimeout(() => setToLogin('totoLogin'),1000)
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div onClick={() => history.push('/login')}>{toLogin}</div>
      </header>
    </div>
  );
}



export default App;
