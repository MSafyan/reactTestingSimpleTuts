import React from 'react';
import Header from './component/header/index';
import Headline from './component/headline/index'
import './app.scss'

const tempArr=[{
  fName:'joe',
  lName:"Bloggs",
  email:'jcob@gmail.com',
  age:23,
  onlineStatus:true
}]

function App() {
  return (
    <div className="App">
      <Header />

      <section className="main">
        <Headline header="posts" desc="Click the button to render " tempArr={tempArr}/>
      </section>
    </div>
  );
}

export default App;
