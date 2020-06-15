import React from 'react'
import 'normalize.css'
import Nav from './components/Nav/nav'
import Footer from './components/Footer/footer'
import MainContent from './components/mainContent'
import IndexPage from './pages/indexPage'
function App() {

  return (
    <>
      <Nav />
      <MainContent>
        <IndexPage />
      </MainContent>
      <Footer />
    </>
  );
}
export default App;
