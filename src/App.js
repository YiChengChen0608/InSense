import React from 'react'
import 'normalize.css'
import Nav from './components/nav'
import Footer from './components/footer'
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
