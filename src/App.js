import React from 'react'
import 'normalize.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ClassList from './pages/class/classList'

function App() {
  return (
    <>
      <Nav />
      <ClassList />
      <Footer />
    </>
  );
}

export default App;
