import { Link } from "react-router-dom";

const Images = ({ title, subtitle, src }) => {
  return (
    <div className="relative w-full max-w-lg mx-auto m-5 rounded-lg ">
      <button>
        <Link to="https://www.linkedin.com/in/vivek-raj-sde/">
          <img
            src={src}
            alt="Descriptive Alt Text"
            className="object-cover  object-center group-hover:opacity-75 rounded-2xl"
            style={{ height: "512px", width: "512px" }}
          />
        </Link>{" "}
      </button>

      <div className="absolute inset-0 flex flex-col items-center  text-left bg-black bg-opacity-50 text-white rounded-2xl">
        <a href="https://www.linkedin.com/in/vivek-raj-sde/" target="_blank">
          <h1 className="text-4xl font-bold mb-4 cursor-pointer hover:underline">
            {title}
          </h1>
        </a>
        <p className="text-lg">{subtitle}</p>
      </div>
    </div>
  );
};
export default Images;
