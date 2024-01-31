import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import GetAllCategorias from "./components/categoria/getAllCategorias/GetAllCategorias";
import CategoriaForm from "./components/categoria/categoriaForm/CategoriaForm";
import DeleteCategoria from "./components/categoria/deleteCategoria/DeleteCategoria";

function App() {
  
  return (
    <>
        <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/categoria" element={<GetAllCategorias />} />
              <Route path="/cadastroCategoria" element={<CategoriaForm />} />
              <Route path="/editarCategoria/:id" element={<CategoriaForm />} />
              <Route path="/deletarCategoria/:id" element={<DeleteCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
