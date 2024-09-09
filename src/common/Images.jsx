import { Link } from "react-router-dom";

const Images = ({ title, subtitle, src, imgsrc }) => {
  return (
    <div className="relative w-80 max-w-lg mx-auto bg-white border rounded-lg shadow-lg overflow-hidden">
      {/* Image section */}
      <div className="relative">
        <a href={imgsrc} target="_blank" rel="noopener noreferrer">
          <img
            src={imgsrc}
            alt="Descriptive Alt Text"
            className="w-full h-48 object-cover"
          />
        </a>
      </div>

      {/* Content section */}
      <div className="p-4">
        <a href={`https://${src}.netlify.app/`} target="_blank" rel="noopener noreferrer">
          <h1 className="text-2xl font-bold mb-2 cursor-pointer hover:underline">
            {title}
          </h1>
        </a>
        <p className="text-lg text-gray-700">{subtitle}</p>
      </div>
    </div>
  );
};

export default Images;
