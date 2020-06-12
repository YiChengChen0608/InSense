import React from 'react'
import 'normalize.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import MyClassPage from './pages/class/MyClassPage'

function App() {
  return (
    <>
      <Nav />
      <MyClassPage />
      <Footer />
    </>
  );
}

export default App;
