import { BsExclamationTriangleFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

const WarningBadge = () => {
  return (
    <div className="w-[100%] h-auto badge bg-red-600 gap-2 p-2 rounded-md text-slate-50 cursor-pointer">
      <BsExclamationTriangleFill className="text-[2rem] text-slate-50" />
      <div className="relative -top-2 -left-1">3</div>
      <div className="border-l h-6 mx-2 border-white"></div>
      <div className="grow">Pomarańczowe ostrzeżenie - upały</div>
      <FiArrowRight className="text-[2rem] text-slate-50" />
    </div>
  );
};

export default WarningBadge;
