const InfoBadge = () => {
  return (
    <div className="w-[100%] h-auto badge flex flex-col items-start bg-base-100 gap-2 p-2 rounded-md">
      <p className="uppercase font-semibold text-sm pl-2 text-gray-600">
        Przegląd pogody
      </p>
      <div className="-mx-4 w-[calc(100%+1rem)] border-b-2 border-gray-200"></div>
      <div className="pl-2 pt-2">
        Przewidywane przelotne opady w: czwartek po południu
      </div>
    </div>
  );
};

export default InfoBadge;
