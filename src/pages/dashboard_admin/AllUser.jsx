import React from "react";
import { MdDeleteForever } from "react-icons/md";
import SectionTItle from "../../components/SectionTItle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { HiUserGroup } from "react-icons/hi2";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = user => {
    console.log(user);
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res => {
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                title: "Good job!",
                text: `${user.name} is an Admin Now!`,
                icon: "success"
              });
        }
    })
  }

  const handleRemoveUser = (user) => {
    console.log(user);
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTItle
        subTitle="---How many??---"
        heading="MANAGE ALL USERS"
      ></SectionTItle>
      <div className="bg-white p-8 rounded-xl">
        <div className="flex justify-between">
          <h2 className="text-4xl font-bold">Total Users : {users.length} </h2>
        </div>
        <div className="mt-8">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>ROLE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={user._id}>
                    <th>{idx + 1}</th>
                    <td>
                      <span className="text-lg font-bold"> {user.name}</span>
                    </td>
                    <td>
                      <span className="text-lg">{user.email}</span>
                    </td>
                    <td>
                      {user.role === 'admin' ? 'Admin' : <button
                          onClick={() => handleMakeAdmin(user)}
                        className="p-3 rounded-xl text-white bg-yellow-500"
                      >
                        <HiUserGroup size={25} />
                      </button>}
                    </td>
                    <th>
                      <button
                        onClick={() => handleRemoveUser(user)}
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
    </div>
  );
};

export default AllUser;
