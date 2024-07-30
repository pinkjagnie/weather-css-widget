import WarningBadge from "./WarningBadge";
import Card from "./Card";
import InfoBadge from "./InfoBadge";

const Container = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <WarningBadge />
      <Card />
      <InfoBadge />
    </div>
  );
};

export default Container;
