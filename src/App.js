import React, {useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

    useEffect(() => {
        let pageLoadEnd = new Date().toISOString()
        console.log("logging page load start and page load end", window.onPageStart, pageLoadEnd)
        if(window.Android && typeof window.Android.addMonitoringTime === 'function'){
            window.Android.addMonitoringTime(window.onPageStart, pageLoadEnd, 'testAppLoadTime')
        }
    }, [])
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Testing App
      </header>
    </div>
  );
}

export default App;
