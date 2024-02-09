
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shope from './Components/Pages/Shope'
import Shopecatagary from  './Components/Pages/Shopecatagary'
import Card from './Components/Pages/Card'
import Loginsingup from  "./Components/Pages/Loginsingup"
import Product from './Components/Pages/Product'
import { Footer } from './Components/Footer/Footer'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
<Routes>
<Route path='/' element={<Shope/>}/>
<Route path='/mens' element={<Shopecatagary category="Men"/>}/>
<Route path='/Woman' element={<Shopecatagary category="Woman"/>}/>
<Route path='/Kids' element={<Shopecatagary category="Kid"/>}/>
<Route path='/Product' element={<Product/>}>
<Route path=':ProductId' element={<Product/>}/>
</Route>
<Route path='/Card' element={<Card/>}/>
<Route path='/Loginsingup' element={<Loginsingup/>}/>

</Routes>
<Footer/>  
    </BrowserRouter>
    </>
  )
}

export default App
