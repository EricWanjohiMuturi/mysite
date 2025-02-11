import './App.css'
import { NavbarDefault } from './Components/Includes/Navbar'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './Components/Views/Home'
import About from './Components/Views/About'
import Projects from './Components/Views/Projects'
import Insights from './Components/Views/Insights'


function App() {
  

  return (
    <>
    <Router>
      <NavbarDefault />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about/' element={<About />} />
        <Route path='/projects/' element={<Projects />} />
        <Route path='/insights/' element={<Insights />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
