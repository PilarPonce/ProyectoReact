import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Peliculas from './components/Peliculas/Peliculas';



function App() {
  return (
    <div>
      <Header/>
      <main>
        <Peliculas/>
      </main>
      
      <Footer/>
    </div>
  
  );
}

export default App;
