import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import ListarCategoria from "./components/categoria/listarCategoria/ListarCategoria";
import FormCategoria from "./components/categoria/formCategoria/FormCategoria";
import DeletarCategoria from "./components/categoria/deleteCategoria/DeleteCategoria";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path='/categorias' element={<ListarCategoria />} />
            <Route path="/cadastroCategoria" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
    )
  }
  export default App
