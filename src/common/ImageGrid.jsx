import Images from "./Images";

const ImageGrid = ({ desc }) => {
  return (
    <div className="p-4">
      <div class="grid  lg:grid-cols-3 gap-4  sm:grid-cols-2 xs:grid-cols-1 ">
        {desc.map((item) => {
          return (
            <div>
              <Images title={item.title} subtitle={item.Subtitle} src={item.src} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGrid;
