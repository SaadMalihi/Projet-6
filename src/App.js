import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './pages/error'
import {getData} from './data'
import Home from './pages/home'
import About from './pages/about'
import Lodging from './pages/lodging'


function App() {

const data = getData()

    return (
        
        
      <div>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home/> }/>
            <Route path='*' element={<Error/>}/>
            <Route path='about' element={<About/>}/>
          {data.map((quoicoubeh) =>
          <Route key={quoicoubeh.id} path={"logement/" + quoicoubeh.id} element={<Lodging />}/>
          )}
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
       
        
      );
  
    ;
  }
  
  export default App;