import WarningBadge from "./WarningBadge";
import Card from "./Card";
import InfoBadge from "./InfoBadge";

const Container = () => {
  return (
    <div className="card gap-y-4 p-4 bg-base-100 shadow-xl lg:w-[70%] xl:w-[60%] lg:mx-auto">
      <WarningBadge />
      <Card />
      <InfoBadge />
    </div>
  );
};

export default Container;
