import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppEmpty from './App';
import reportWebVitals from './reportWebVitals';
import ContextProvider from './ContextProvider';
import './custom.scss';
import Login from './Login';
import AuthWrapper from './utils/AuthWrapper';

function App(){
  return(
  <ContextProvider>
    <Routes>
      <Route  path="/" element={ <AuthWrapper><AppEmpty /></AuthWrapper>
          
      }/>
      <Route  path="/Login" element={<Login/>} />
    </Routes>
  </ContextProvider>
  );
  
}
export default App

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <App/>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
