import {
    AlignJustify,
    BriefcaseBusiness,
  } from "lucide-react/dist/umd/lucide-react";
  
  const Black = ({ title, subtitle }) => {
    return (
      <div className="flex flex-col bg-black w-full gap-10  h-screen">
        <div className="flex flex-2/9 justify-between m-5 text-white">
          <div>
            <img
              src="https://github.com/256bitguy/Reactportfolio/blob/master/public/vivek.png?raw=true"
              alt="sdf"
              style={{ height: "150px", width: "150px" }}
              className="object-cover rounded-full"
            />
          </div>
          <div>
            <AlignJustify size={65} />
          </div>
        </div>
        <div className="flex-7/9  h-full  flex justify-center items-center">
          <div className="flex  gap-4 flex-col text-white items-center text-8xl">
            <div className="pl-10">{title}</div>
            <div className="items-center">
              <p className="font-serif tracking-wide text-4xl">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Black;
  