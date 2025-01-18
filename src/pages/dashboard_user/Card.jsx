import React from "react";
import useCard from "../../hooks/useCard";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Card = () => {
  const [card, refetch] = useCard();
  const totalPrice = card.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleRemoveItem = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cards/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        })
      }
    });
  };
  return (
    <div className="bg-white p-8 rounded-xl">
      <div className="flex justify-between">
        <h2 className="text-4xl font-bold">Total Orders : {card.length}</h2>
        <h2 className="text-4xl font-bold">Total Price : {totalPrice}</h2>
        {card.length ?<Link to={`/dashboard/reservation`}>
        <button className="bg-yellow-600 px-4 py-2 rounded-xl text-white font-semibold">
          PAY
        </button>
        </Link>:<button disabled className="btn">
          PAY
        </button>}
      </div>
      <div className="mt-8">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {card.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-lg font-bold">{item.name}</span>
                  </td>
                  <td>
                    <span className="text-lg">${item.price}</span>
                  </td>
                  <th>
                    <button
                      onClick={() => handleRemoveItem(item._id)}
                      className="text-red-600"
                    >
                      <MdDeleteForever size={35} />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Card;
