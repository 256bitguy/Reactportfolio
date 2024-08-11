import { Github, Linkedin } from "lucide-react/dist/umd/lucide-react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
    <div className="grid grid-flow-col gap-5 ">
      {/* Vertical Menu */}
      <div className=" text-center flex justify-top items-start writing-mode-vertical py-10">
          <h3 className="block transform -rotate-90 text-2xl">Menu</h3>
        </div>
      <div className="grid  gap-20">
      

        {/* Main Content */}
        <div className="lg:w-96 h-48">
           
          <div>
         
          <button className=" sm:text-6xl text-6xl lg:text-6xl hover:text-7xl rounded-lg mt-5">
              <Link to="/projects">Projects</Link>
            </button>
            
          </div>
          <div>
            <h2 className=" text-2xl md:text-4xl lg:text-6xl hover:text-7xl  rounded-lg mt-5">
              <Link to="/about">About</Link>
            </h2>
          </div>
          <div>
            <h2 className=" text-2xl md:text-4xl lg:text-6xl hover:text-7xl  rounded-lg mt-5">
              <Link to="/contact">Contact</Link>
            </h2>
          </div>
          <div>
            <h2 className=" text-2xl md:text-4xl lg:text-6xl hover:text-7xl  rounded-lg mt-5">
              <Link to="/resume">Resume</Link>
            </h2>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="w-96 flex justify-cemter items-end gap-4 p-5 font-sans">
        <div className="grid gap-4">
          <div>
            <h1 className="text-lg lg:text-3xl p-2 hover:text-4xl tracking-wide">67vivekraj@gmail.com</h1>
          </div>
          <div>
            <h1 className="text-lg lg:text-3xl p-2 tracking-wide">+91 93353 22592</h1>
          </div>
          <div className="flex gap-8 pt-3 justify-center items-center lg:pt-5">
            <div>
              <h1 className="text-lg lg:text-2xl">
                <Linkedin />
              </h1>
            </div>
            <div>
              <h1 className="text-lg lg:text-2xl"><Github /></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Menu;
