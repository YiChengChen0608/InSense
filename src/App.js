import React from 'react'
import 'normalize.css'
import Nav from './components/nav'
import Footer from './components/footer'
import ClassDetail from './pages/class/classDetail'
function App() {
  return (
    <>
      <Nav />
      <ClassDetail />
      <Footer />
    </>
  );
}

export default App;
