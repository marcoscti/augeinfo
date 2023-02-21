import React from 'react';
import Header from './components/Header';
import './App.css'
import TopBanner from './components/Content/TopBanner';
import Card from './components/Content/Card';
function App() {
  return (
    <div className=''>
      <Header/>
      <TopBanner/>
      <Card/>
    </div>
  );
}

export default App;
