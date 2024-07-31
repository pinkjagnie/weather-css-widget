import { AiOutlineSun } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";

const SunPart = () => {
  return (
    <div className="flex flex-col items-start p-4 mx-auto lg:justify-around">
      <div className="flex items-start space-x-4">
        <AiOutlineSun className="text-8xl text-amber-500" />
        <div>
          <div className="flex items-start font-bold">
            <p className="text-6xl leading-none">73</p>
            <div className="flex flex-col items-start text-2xl leading-none">
              <span className="leading-none">o</span>
              <span className="font-semibold text-gray-600">F</span>
            </div>
          </div>
          <div className="text-lg">
            <p>RealFeel®</p>
            <span>81°</span>
          </div>
        </div>
      </div>
      <div className="mt-4 font-semibold">
        <p className="text-xl">Słonecznie</p>
        <div className="flex items-center text-sm uppercase cursor-pointer">
          <span>Więcej szczegółów</span>
          <MdKeyboardArrowRight className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default SunPart;
