import { BsExclamationTriangleFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

const WarningBadge = () => {
  return (
    <div className="w-[100%] badge badge-error gap-2 text-slate-50">
      <BsExclamationTriangleFill className="text-slate-50" />
      <div>|</div>
      <div>Pomarańczowe ostrzeżenie - upały</div>
      <FiArrowRight className="text-slate-50" />
    </div>
  );
};

export default WarningBadge;
