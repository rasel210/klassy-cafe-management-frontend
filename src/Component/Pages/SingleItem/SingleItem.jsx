import { Link, useLoaderData } from "react-router-dom";

const SingleItem = () => {
  const allfooditems = useLoaderData();
  console.log(allfooditems);
  
  const {_id, name, img, category, price } = allfooditems;

  return (
    <div className="hero bg-base-100 mt-10">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="py-3">
            Provident cupiditate voluptatem et in. <br /> Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. <br /> In deleniti eaque
            aut repudiandae et a id nisi.
          </p>
          <h3>Category: {category}</h3>
          <h4 className="text-red-400 text-base mt-3 font-medium">
            Price: ${price}
          </h4>
          <Link to={`/foodpurchase/${_id}`}>
            <button className="btn btn-primary mt-4">Order Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
