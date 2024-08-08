import { Link } from "react-router-dom";
import Black from "../../common/Black";
import { ArrowRight } from "lucide-react/dist/umd/lucide-react";

const Home = () => {
  return (
    <div>
      <div>
        {" "}
        <Black
          title={"Vivek Raj Srivastava"}
          subtitle={"Front-end Developer"}
        />
      </div>
      <div className="flex  w-full justify-center">
        <button className="inline-flex items-center rounded-md bg-black px-3.5 py-2.5 text-center p-5 m-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <Link to="/contact" className="flex items-center">
            <ArrowRight className="mr-2" /> {/* Adjust margin as needed */}
            <span>All Projects</span>
          </Link>
        </button>
        <button className="inline-flex  rounded-md bg-black px-3.5 py-2.5  p-5 m-5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <Link to="/contact" className="flex items-center">
            {" "}
            <ArrowRight className="mr-2" /> <span>Contacts</span>
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Home;
