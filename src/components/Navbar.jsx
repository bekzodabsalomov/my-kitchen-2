import { Link } from "react-router-dom"
import Login from "./Login"


function Navbar() {
    return (
      <header className="bg-neutral-200 py-2 md:py-4 dark:bg-slate-700">
          <div className="max-container flex flex-col md:flex-row items-center md:justify-between">
              <a href="/" className="text-2xl md:text-4xl md:font-bold md:mb-0 font-medium mb-5 text-dark">My Kitchen</a>
              <nav className="text-center md:text-left md:flex items-center gap-4">
                  <p className="mb-4 md:mb-0 md:font-medium text-dark">Welcome, Beka</p>
                  <div className="flex gap-4">
                  <button className="btn bg-orange-400 ">Logout</button>
                  <a className="btn bg-emerald-400 " href="#">Create</a>
                  </div>
              </nav>
          </div>
      </header>
      )
  }
  
  export default Navbar