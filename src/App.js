import React from 'react'
import 'normalize.css'
import Nav from './components/Nav/nav'
import Footer from './components/Footer/footer'
import MainContent from './components/mainContent'
import LandingPage from './components/LandingPage/landingPage'
import IndexNewProduct from './components/IndexNewProduct/indexNewProduct'

function App() {
  return (
    <>
      <Nav />
      <MainContent>
        <LandingPage />
        <IndexNewProduct />
      </MainContent>
      <Footer />
    </>
  );
}

export default App;
