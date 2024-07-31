import { AiOutlineSun } from "react-icons/ai";

const Card = () => {
  return (
    <div className="card lg:card-side bg-base-100 border-2 rounded-md">
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
