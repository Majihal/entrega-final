import './App.css'
import {Routes, Route} from "react-router-dom"


// Pages
import Home from './Pages/Home'
import Contacto from './Pages/Contacto'
import Categorias from './Pages/Categorias'
import ProductsView from './Pages/ProductsView'
import ProductList from './Pages/ProductList'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>   
      <Route path='/categorias' element={<Categorias/>}/>
      <Route path='/categorias/:categoriaSeleccionada/:id' element={<ProductsView/>}/>
      <Route path='/categorias/:categoriaSeleccionada' element={<ProductList/>}/>
      <Route path='/contacto' element={<Contacto/>}/>  
    </Routes>
  )
}

export default App
