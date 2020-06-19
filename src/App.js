import React from 'react'
import 'normalize.css'
import Nav from './components/nav'
import Footer from './components/footer'
import CSContent from './components/class/csContent'
// import ClassDetail from './pages/class/classDetail'

function App() {
  return (
    <>
      <Nav />
      <CSContent />
      <Footer />
    </>
  );
}

export default App;
