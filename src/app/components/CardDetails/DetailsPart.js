const DetailsPart = () => {
  return (
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
  );
};

export default DetailsPart;
