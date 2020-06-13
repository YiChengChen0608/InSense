import React from 'react'
import 'normalize.css'
import Nav from './components/nav'
import ClassDetail from './pages/class/classDetail'
import Footer from './components/footer'
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
