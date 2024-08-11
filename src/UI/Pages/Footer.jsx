import { Link } from "react-router-dom";
import Resume from "./Resume";

const Footer = () => {
  return (
    <>
      <div className=" flex sm:flex-col lg:flex-row sm:items-center justify-between sm:justify-between w-full   sm:p-12 bg-black text-white ">
        <div className="grid grid-flow-row  gap-5">
          <div>
            <Link to="/projects">Projects</Link>
          </div>
          <div>
            <Link to="/contact">Contacts</Link>
          </div>
          <div>
            <Link to="/">Menu</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
        </div>
        <div className="grid grid-flow-row    gap-5">
          <div>
            <h3>67vivekraj@gmail.com</h3>
          </div>
          <div>
            <h3>+91 93353 22592</h3>
          </div>
        </div>
        <div className="mr-5"><Link to="/resume">Resume</Link></div>
      </div>
      <div className=" flex justify-center bg-black   text-white">
        <h3>&#169; Copyright 2024</h3>
      </div>
    </>
  );
};
export default Footer;
