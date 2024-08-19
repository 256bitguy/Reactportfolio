import { Github, Linkedin } from "lucide-react/dist/umd/lucide-react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="flex sm:items-center sm:justify-center h-screen w-screen  bg-gray-100">
    <div className="grid sm:grid-flow-col gap-5  grid-flow-row">
      {/* Vertical Menu */}
      <div className=" text-center flex justify-center items-start writing-mode-vertical py-10">
          <h3 className="block transform sm:-rotate-90 text-4xl sm:text-2xl justify-center">Menu</h3>
        </div>
      <div className="grid  gap-20 justify-center">
      {/* Main Content */}
        <div className="lg:w-96 h-48">
           
          <div>
         
          <button className=" md:text-5xl text-4xl   hover:text-7xl rounded-lg mt-5">
              <Link to="/projects">Projects</Link>
            </button>
            
          </div>
          <div>
            <h2 className=" md:text-5xl text-4xl   hover:text-7xl rounded-lg mt-5">
              <Link to="/about">About</Link>
            </h2>
          </div>
          <div>
            <h2 className=" md:text-5xl text-4xl   hover:text-7xl rounded-lg mt-5">
              <Link to="/contact">Contact</Link>
            </h2>
          </div>
          <div>
            <h2 className="md:text-5xl text-4xl   hover:text-7xl rounded-lg mt-5">
              <Link to="/resume">Resume</Link>
            </h2>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="w-96 flex justify-center items-end sm:gap-4 p-5 font-sans">
        <div className="grid  gap-0 sm:gap-4">
          <div>
            <h1 className="text-lg lg:text-3xl p-2  tracking-wide">67vivekraj@gmail.com</h1>
          </div>
          <div>
            <h1 className="text-lg lg:text-3xl p-2 tracking-wide">+91 93353 22592</h1>
          </div>
          <div className="flex gap-8 pt-3 justify-center items-center lg:pt-5">
            <div>
              <h1 className="text-lg lg:text-2xl">
               <a href="https://www.linkedin.com/in/vivek-raj-sde/"> <Linkedin /></a>
              </h1>
            </div>
            <div>
              <h1 className="text-lg lg:text-2xl"><a href="https://github.com/256bitguy"><Github /></a></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Menu;
