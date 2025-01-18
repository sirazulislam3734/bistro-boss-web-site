import React from "react";
import { MdDeleteForever } from "react-icons/md";
import SectionTItle from "../../components/SectionTItle";
import useMenu from "../../hooks/useMenu";
import { FaRegEdit } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCard from "../../hooks/useCard";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu] = useMenu();
  const [, refetch] = useCard();
  const axiosSecure = useAxiosSecure();
  const handleRemoveData = (deleteData) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${deleteData._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${deleteData.name} has been deleted.`,
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div>
      <SectionTItle
        subTitle="---Hurry up!---"
        heading="MANAGE ALL ITEMS"
      ></SectionTItle>
      <div className="bg-white p-8 rounded-xl">
        <div className="flex justify-between">
          <h2 className="text-4xl font-bold">Total Items : {menu.length}</h2>
        </div>
        <div className="mt-8">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="font-bold text-lg">
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Edit</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {menu.map((item, idx) => (
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
                      <Link to={`/dashboard/update/${item._id}`}>
                      <button className="text-white bg-yellow-600 rounded-lg p-3">
                        <FaRegEdit size={25} />
                      </button>
                      </Link>
                    </th>
                    <th>
                      <button
                        onClick={() => handleRemoveData(item)}
                        className="text-white bg-red-600 rounded-lg p-2"
                      >
                        <MdDeleteForever size={32} />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
