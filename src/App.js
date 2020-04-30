import React from 'react';
import Header from './component/header/index';
import Headline from './component/headline/index'

function App() {
  return (
    <div className="App">
      <Header />

      <section className="main">
        <Headline header="posts" desc="Click the button to render "/>
      </section>
    </div>
  );
}

export default App;
