import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import LabList from './components/LabsList'

function App() {


  return (
    <>
      <Header />

      <div className="main_page">
        <LabList />
        <Content />
      </div>

      <Footer />

    </>
  )
}

export default App
