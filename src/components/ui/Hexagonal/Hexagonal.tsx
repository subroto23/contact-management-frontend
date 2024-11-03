type THexagonal = {
  number: number;
  text: string;
};

const Hexagonal = ({ number, text }: THexagonal) => {
  return (
    <>
      <div className="relative p-5 justify-self-center">
        <div className="relative w-36 h-36 clip-hexagon p-2 bg-gradient-to-t from-primaryColor to-secondaryColor">
          <div className="relative w-full h-full clip-hexagon flex items-center justify-center bg-gradient-to-t from-blue-900 to-blue-950 via-blue-700 p-4">
            <span className="text-white text-center font-extrabold uppercase text-xl">
              {text}
            </span>
          </div>
        </div>
        {/* secound hexagonal */}
        <div className="absolute top-0 left-3 w-16 h-16 clip-hexagon p-2 bg-gradient-to-t from-primaryColor to-secondaryColor">
          <div className="relative w-full h-full clip-hexagon flex items-center justify-center bg-gradient-to-t from-blue-900 via-blue-700 to-blue-800 p-2">
            <h1 className="text-white text-center font-extrabold uppercase text-xl">
              {number}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hexagonal;
