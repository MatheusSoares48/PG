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
          <ul className="flex flex-col items-start lg:flex-row lg:justify-between">
            
            <li>
              <a href='/categoria' className="lg:px-8 p-2 block rounded-xl bg-white">Categoria</a>
            </li>

          </ul>

        </nav>
      </div>
    </header>
  )
}

export default Navbar