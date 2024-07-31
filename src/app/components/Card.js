import { AiOutlineSun } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";

const Card = () => {
  return (
    <div className="card bg-base-100 border-2 rounded-md p-4">
      <div className="flex justify-between items-center pb-2 font-semibold text-sm">
        <p className="uppercase text-gray-600">Obecna pogoda</p>
        <p>13:39</p>
      </div>
      <div className="-mx-4 w-[calc(100%+2rem)] border-b-2 border-gray-200"></div>

      <div className="mx-auto lg:mx-0 lg:grid lg:grid-cols-2">
        {/* TOP / LEFT INFOS WITH SUN */}

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

        {/* RIGHT INFOS */}

        <div className="card-body divide-y-2 lg:content-stretch">
          <div className="lg:flex lg:py-2">
            <p className="grow">RealFeel Shade™</p>
            <span className="font-semibold">71°</span>
          </div>

          <div className="lg:flex lg:py-2">
            <p className="grow">Wiatr</p>
            <span className="font-semibold">WSW 5 mili/h</span>
          </div>

          <div className="lg:flex lg:py-2">
            <p className="grow">Porywy wiatru</p>
            <span className="font-semibold">11 mili/h</span>
          </div>

          <div className="lg:flex lg:py-2">
            <p className="grow">Jakość powietrza</p>
            <span className="font-semibold text-amber-400">Niedobre</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
