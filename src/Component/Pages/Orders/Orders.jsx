import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import OrderRaw from "./OrderRaw";
import Swal from "sweetalert2";
import axios from "axios";

const Orders = () => {
  const { user } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);

  const url = `http://localhost:5000/orders?email=${user?.email}`;
  useEffect(() => {

    axios.get(url, {withCredentials: true})
    .then(res => {
        setOrders(res.data);
    })
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setOrders(data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you wnat to delete !");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = orders.filter((order) => order._id !== id);
          const update = orders.find((order) => order._id === id);
          update.status = "confirm";
          const newOrders = [update, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl text-center font-semibold text-red-400">
        All Yours Order is Here
      </h2>
      <div className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="font-extrabold">Item</th>
              <th className="font-extrabold">Price</th>
              <th className="font-extrabold">Email</th>
              <th className="font-extrabold">Buyer Name</th>
              <th className="font-extrabold">Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {orders.map((order) => (
              <OrderRaw
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></OrderRaw>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
