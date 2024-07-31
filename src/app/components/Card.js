import { AiOutlineSun } from "react-icons/ai";

const Card = () => {
  return (
    <div className="card lg:card-side bg-base-100 border-2 rounded-md p-4">
      <div className="flex justify-between items-center pb-2 font-semibold">
        <p className="uppercase text-gray-600">Obecna pogoda</p>
        <p>13:39</p>
      </div>
      <div className="-mx-4 w-[calc(100%+2rem)] border-b-2 border-gray-200"></div>
      <figure>
        <AiOutlineSun size={100} className="text-amber-500" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
