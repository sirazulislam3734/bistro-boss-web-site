import React from "react";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTItle from "../../components/SectionTItle";
import { MdDeleteForever } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <SectionTItle
        subTitle="---How many??---"
        heading="PAYMENT HISTORY"
      ></SectionTItle>
      <div className="bg-white p-8 rounded-xl">
        <div className="flex justify-between">
          <h2 className="text-4xl font-bold">Total Payments : {payments.length} </h2>
        </div>
        <div className="mt-8">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>EMAIL</th>
                  <th>TRANSACTION ID</th>
                  <th>PRICE</th>
                  <th>STATUS</th>
                  <th>DATE</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, idx) => (
                  <tr key={user._id}>
                    <th>{idx + 1}</th>
                    <td>
                      <span className="text-lg font-bold"> {payment.email}</span>
                    </td>
                    <td>
                        {payment.transactionId}
                    </td>
                    <td>
                      <span className="text-lg">${payment.price}</span>
                    </td>
                    <td>
                      <span className="text-lg">{payment.status}</span>
                    </td>
                    <th>
                      {payment.date}
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

export default PaymentHistory;
