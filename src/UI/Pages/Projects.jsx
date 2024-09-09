import { Link } from "react-router-dom";
import Black from "../../common/Black";
import ImageGrid from "../../common/ImageGrid";
import Footer from "./Footer";
import { ArrowRight } from "lucide-react/dist/umd/lucide-react";

const projectsDesc = [
  {
    imgsrc: 'public/coctail.png',
    title: "Juice Order App",
    subtitle: "An intuitive e-commerce platform for ordering a variety of fresh juices online.",
    src: "foodjuicestore",
  },
  {
    imgsrc: 'public/chatapp.png',
    title: "Chat Application",
    subtitle: "A real-time messaging app designed for seamless multi-user communication.",
    src: "chatappcloud",
  },
  {
    imgsrc: 'public/redux.png',
    title: "Redux Demo",
    subtitle: "A comprehensive demonstration of Redux for state management in React applications.",
    src: "resonant-clafoutis-d39f5e",
  },
  {
    imgsrc: 'public/thunk.png',
    title: "Redux-Thunk Example",
    subtitle: "Showcasing the integration of Redux-Thunk middleware for handling asynchronous actions.",
    src: "reactthunk2",
  },
  {
    imgsrc: 'public/rdom.png',
    title: "React Router DOM Basics",
    subtitle: "A fundamental project illustrating the core concepts and usage of React Router DOM for navigation.",
    src: "vivekrdom",
  },
  {
    imgsrc: 'public/demo.png',
    title: "Admin Dashboard",
    subtitle: "A robust admin center for managing and overseeing institutional data effectively.",
    src: "adminakalpitkademo",
  },
];

export const Projects = () => {
  return (
    <>
      <div>
        <Black title={"My Projects"} subtitle={"Contains different tech."} />
      </div>
      <div className="w-screen">
        <ImageGrid desc={projectsDesc} />
      </div>
      <div className="flex w-full justify-center">
        <button className="inline-flex bg-black rounded-md p-3 m-5 justify-center text-white">
          <Link to="/contact" className="inline-flex ">
            <ArrowRight className="mr-4" />
            <span>Contact me</span>
          </Link>
        </button>
      </div>
      <Footer />
    </>
  );
};
