import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom"

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className='bg-emerald-300 py-4'>
      <div className='flex items-center justify-between xl:max-w-9xl xl:mx-auto px-[4%] flex-wrap w-full'>
        <a href='/home' className="text-2xl font-bold">Farmacia</a>
      {
        open ?  
          
          <X 
            size={24} 
            color="#050505" 
            weight="bold"   
            className="lg:hidden block h-6 w-6 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        
          :
          <List 
          size={24} 
          color="#050505" 
          weight="bold" 
          className="lg:hidden block h-6 w-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      }
        

        <nav className={`${open ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>
          
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Farmacia</Link>

            <div className='flex gap-4'>
              <Link to='/postagens' className='hover:underline'>Categoria</Link>
              <Link to='/temas' className='hover:underline'>Temas</Link>
              <Link to='/cadastroTema' className='hover:underline'>Cadastrar tema</Link>
            </div>
          </div>

        </nav>
      </div>
    </header>
  )
}

export default Navbar