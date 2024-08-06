import { Link } from "react-router-dom";

const AllFoodItemsCard = ({ food }) => {
  const { _id, name, img, category, price, quantity } = food;

  return (
    <div className="card bg-base-100 w-4/5 mx-auto shadow-xl border border-red-400">
      <figure className="py-4">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Category: {category}</p>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}pcs</p>
        <div className="card-actions">
          <Link to={`/singleitem/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllFoodItemsCard;
