import React from 'react';
import Header from './components/Header'
import Display from './components/Display'

function App() {
  return (
    <div className="container">
      <header>
        <Header />
      </header>

      <Display />
    </div>
  );
}

export default App;
