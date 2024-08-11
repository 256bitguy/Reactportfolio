import { Link } from "react-router-dom";
import Black from "../../common/Black";
import ImageGrid from "../../common/ImageGrid";
import Footer from "./Footer";
import { ArrowRight } from "lucide-react/dist/umd/lucide-react";

export const About = () => {
  return (
    <>
      <div className=" bg-black">
        <Black title={"About Me"} subtitle={"Front-End Developer"} />
      </div>
      <div className="flex align-center leading-loose  justify-center  ">
        <div className="p-10 text-left w-1/2 sm:w:3/4">
          <div className="self-center">
            {" "}
            <h2 className="text-3xl  self-center mb-4">About me..</h2>
          </div>
          <p>
            👋 Hello! I'm Vivek Raj Srivastava, a dedicated Software Engineer
            Intern currently thriving at{" "}
            <a
              href="https://linktoany.com/"
              target="_blank"
              className="font-bold underline text-xl hover:text-red-400 text-blue-400"
            >
              Link
            </a>{" "}
            in Pune, where I embarked on this exciting journey on April 1, 2024.
            My primary focus is on frontend development, and I’ve been deeply
            immersed in a variety of cutting-edge technologies:
            <br />
            <br />
            <b>Frontend Technologies:</b> HTML, CSS, JavaScript
            <br />
            <b>Frameworks & Libraries:</b> React.js, React Router DOM, Redux
            Toolkit/Thunk
            <br />
            <b>Styling: </b>Tailwind CSS, Material-UI
            <br />
            <b>Frameworks: </b>Next.js
            <br />
            <br />
            My technical prowess is complemented by a solid foundation in Data
            Structures & Algorithms, equipping me with the problem-solving
            skills essential for effective software development. Currently, I'm
            expanding my skill set by delving into backend development,
            exploring tools and technologies such as:
            <br />
            <br />
            <b>Backend Services:</b> Node.js, Express.js
            <br />
            <b>Database: </b>MongoDB
            <br />
            <br />
            My journey is characterized by a passion for building dynamic and
            efficient web applications, coupled with a drive to continuously
            learn and adapt in the fast-paced world of technology.
            <br />
            Feel free to connect with me to explore opportunities or discuss
            technology and development!
          </p>
        </div>
      </div>

      <div className="flex  flex-col  ml-5 algin-center justify-center h-96">
        <div className="flex justify-center">
          <h2 className="text-2xl font-serif self-center mb-10 font-bold">
            My Interests
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-5 gap-y-5 text-center">
          <div className="inline-flex justify-center space-x-5">
            <img
              src="https://raw.githubusercontent.com/256bitguy/Reactportfolio/e858bb2a08b389ad3a636581ef69e0aae0209e76/public/cpp.svg"
              style={{ height: "35px", width: "35px" }}
              className="mr-5"
            />
            C/C++
          </div>
          <div className="inline-flex justify-center space-x-5">
            <img
              src="https://raw.githubusercontent.com/256bitguy/Reactportfolio/e858bb2a08b389ad3a636581ef69e0aae0209e76/public/html.svg"
              style={{ height: "35px", width: "35px" }}
              className="mr-5"
            />
            HTML
          </div>
          <div className="inline-flex justify-center space-x-5">
            <img
              src="https://raw.githubusercontent.com/256bitguy/Reactportfolio/e858bb2a08b389ad3a636581ef69e0aae0209e76/public/css.svg"
              style={{ height: "35px", width: "35px" }}
              className="mr-5"
            />
            CSS
          </div>
          <div className="inline-flex justify-center space-x-5">
            <img
              src="https://raw.githubusercontent.com/256bitguy/Reactportfolio/e858bb2a08b389ad3a636581ef69e0aae0209e76/public/javascript.svg"
              style={{ height: "35px", width: "35px" }}
              className="mr-5"
            />
            JavaScript
          </div>
          <div className="inline-flex justify-center space-x-5">
            <img
              src="https://raw.githubusercontent.com/256bitguy/Reactportfolio/e858bb2a08b389ad3a636581ef69e0aae0209e76/public/react.svg"
              style={{ height: "35px", width: "35px" }}
              className="mr-5"
            />
            ReactJs
          </div>
          <div className="inline-flex justify-center space-x-5">
            <img
              src="https://raw.githubusercontent.com/256bitguy/Reactportfolio/e858bb2a08b389ad3a636581ef69e0aae0209e76/public/typescript.svg"
              style={{ height: "35px", width: "35px" }}
              className="mr-5"
            />
            TypeScript
          </div>
          <div className="inline-flex justify-center space-x-5">
            <img
              src="https://raw.githubusercontent.com/256bitguy/Reactportfolio/e858bb2a08b389ad3a636581ef69e0aae0209e76/public/tailwindcss.svg"
              style={{ height: "35px", width: "35px" }}
              className="mr-5"
            />
            Tailwindcss
          </div>
          <div className="inline-flex justify-center space-x-5">
            <img
              src="https://raw.githubusercontent.com/256bitguy/Reactportfolio/e858bb2a08b389ad3a636581ef69e0aae0209e76/public/python.svg"
              style={{ height: "35px", width: "35px" }}
              className="mr-5"
            />
            Python
          </div>
        </div>
      </div>

      <div className="flex  h-48 w-full justify-center">
        <button className="inline-flex items-center h-10  rounded-md bg-black px-3.5 py-2.5 text-center p-5 m-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <Link to="/projects" className="flex  text-lg  items-center">
            <ArrowRight className="mr-2" /> {/* Adjust margin as needed */}
            <span>All Projects</span>
          </Link>
        </button>
        <button className="inline-flex items-center h-10  rounded-md bg-black px-3.5 py-2.5 text-center p-5 m-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <Link to="/contact" className="flex  text-lg  items-center">
            <ArrowRight className="mr-2" /> {/* Adjust margin as needed */}
            <span>Contacts</span>
          </Link>
        </button>
      </div>
      <Footer />
    </>
  );
};
