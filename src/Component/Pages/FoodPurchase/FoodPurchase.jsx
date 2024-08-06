import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";





const FoodPurchase = () => {

 const allfooditems = useLoaderData();
 
 const {_id, name, price, img} = allfooditems;

 const {user} = useContext(AuthContext);
 
 
 const handleOrderService = event => {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value;
  const date = form.date.value;
  const price = form.price.value;
  const quantity = form.quantity.value;
  const buyerName = form.buyerName.value;
  const email = form.email.value
  
  const order = {
    foodName: name,
    date,
    price,
    quantity,
    buyerName,
    email,
    img,
    service: _id
   
  }
  console.log(order);

  fetch('http://localhost:5000/orders', {
    method: 'POST', 
    headers: {
        'content-type': 'application/json'
    }, 
    body: JSON.stringify(order)
  })
   .then (res => res.json())
   .then(data => {
    console.log(data);
    if(data.insertedId){
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your order has been confirmed",
        showConfirmButton: false,
        timer: 1500
      });
    }
   })

 }

 



  return (
    <div className="card bg-base-100 w-full max-w-2xl mx-auto mt-10 shrink-0 shadow-2xl">
        <div>
            <h1 className="text-center text-2xl text-red-400 font-poppins font-semibold">Please fillup the form <br /> and confirm your order</h1>
        </div>
      <form onSubmit={handleOrderService} className="card-body mt-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-red-400"> Food Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered font-bold"
              defaultValue={name}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-red-400"> Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder=" Price"
              className="input input-bordered font-bold"
              defaultValue={'$'+ price}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-red-400">Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-red-400"> Buyer Name</span>
            </label>
            <input
              type="text"
              name="buyerName"
              placeholder=" Buyer Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-red-400">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              defaultValue={user?.email}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-red-400">Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default FoodPurchase;
