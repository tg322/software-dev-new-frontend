import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserContext } from './ContextProvider';

function App() {


  const context = useContext(UserContext);

  if (!context) {
      return <div>Loading...</div>; // Or handle the error appropriately
  }

  const { authorisedUser } = context;

  console.log(authorisedUser);

  return (
    <div>
      <p>Home page before login</p>
      {authorisedUser && <p>Hi {authorisedUser.user.firstName}</p>}
    </div>
  );
}

export default App;
