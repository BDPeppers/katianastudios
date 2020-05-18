import React from 'react';
import Nav from './components/nav';
import './App.sass';

//design assets
// import aww from './imgs/aww.PNG';
// import kissy from './imgs/kissy.PNG';
// import panda from './imgs/panda.PNG';
// import snapchat from './imgs/snapchat.png';
// import insta from './imgs/insta.png';

//custom components
import Landing from './components/landing';

function App() {
  return (
    <div className="App">
      <header className="nav">
        <Nav/>
      </header>
      <Landing/>
      
      
    </div>
  );
}

export default App;
