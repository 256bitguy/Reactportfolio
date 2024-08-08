import { Link } from "react-router-dom";
import Black from "../../common/Black";
import ImageGrid from "../../common/ImageGrid";
import Footer from "./Footer";
import { ArrowRight } from "lucide-react/dist/umd/lucide-react";

const projectsDesc = [
  {
    title: "Project 1",
    Subtitle: "here is the description of project one",
    src: "https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Project 1",
    Subtitle: "here is the description of project one",
    src: "https://images.unsplash.com/photo-1576158114254-3ba81558b87d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Project 1",
    Subtitle: "here is the description of project one",
    src: "https://images.unsplash.com/photo-1576158114131-f211996e9137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Project 1",
    Subtitle: "here is the description of project one",
    src: "https://images.unsplash.com/photo-1579818277109-ad8de2e7cf80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlfGVufDB8fDB8fHww",
  },
  {
    title: "Project 1",
    Subtitle: "here is the description of project one",
    src: "https://images.unsplash.com/photo-1579781354186-012d7e850ad7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlfGVufDB8fDB8fHww",
  },
  {
    title: "Project 1",
    Subtitle: "here is the description of project one",
    src: "https://www.shutterstock.com/image-photo/happy-african-american-man-playing-football-1518200261",
  },
  {
    title: "Project 1",
    Subtitle: "here is the description of project one",
    src: "https://www.shutterstock.com/image-photo/mature-confident-business-woman-standing-against-2321865463",
  },
];
export const Projects = () => {
  return (
    <>
      <div>
        <Black title={"My Projects"} subtitle={"Contains different tech."} />
      </div>
      <div>
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
