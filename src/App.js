import React from 'react'
import 'normalize.css'
import Nav from './components/Nav/nav'
import Footer from './components/Footer/footer'
import MainContent from './components/mainContent'
import ClassDetail from './pages/classDetail'

function App() {
  return (
    <>
      <Nav />
      <MainContent>
        <ClassDetail />
      </MainContent>
      <Footer />
    </>
  );
}

export default App;
