import SunPart from "./CardDetails/SunPart";
import DetailsPart from "./CardDetails/DetailsPart";

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
        <SunPart />
        {/* RIGHT INFOS */}
        <DetailsPart />
      </div>
    </div>
  );
};

export default Card;
