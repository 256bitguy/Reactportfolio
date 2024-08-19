import {
    AlignJustify,
    BriefcaseBusiness,
  } from "lucide-react/dist/umd/lucide-react";
import Options from "./Options";
  
  const Black = ({ title, subtitle }) => {
    return (
      <div className="flex flex-col bg-black w-full gap-10  h-screen">
        <div className="flex flex-2/9 justify-between m-5 text-white">
          <div className="h-32 w-32 sm:h-52 sm:w-52">
            <img
              src="https://github.com/256bitguy/Reactportfolio/blob/master/public/vivek.png?raw=true"
              alt="sdf"
              
              className="object-cover rounded-full"
            />
          </div>
          <div>
            <Options/>
          </div>
        </div>
        <div className="flex-7/9  h-full  flex justify-center items-center">
          <div className="flex  gap-4 flex-col text-white items-center text-3xl sm:text-8xl">
            <div className="font-serif tracking-wide">{title}</div>
            <div className="items-center">
              <p className="font-serif tracking-wide text-3xl sm:text-6xl">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Black;
  