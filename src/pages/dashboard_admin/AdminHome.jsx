import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { GiWallet } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiUserGroup } from "react-icons/hi2";
import { BiSolidFoodMenu } from "react-icons/bi";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  console.log(stats);
  return (
    <div>
      <h2 className="font-bold text-4xl">
        <span>Hi, Welcome </span>{" "}
        {user?.displayName ? user?.displayName : "Back!"}
      </h2>

      <div className="">
        <div className="stats shadow w-full">
          <div className="stat">
            <div className="stat-figure text-secondary">
            <GiWallet size={35} />
            </div>
            <div className="stat-title">Revenue</div>
            <div className="stat-value">$
                {stats?.revenue}
                </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <HiUserGroup size={35} />
            </div>
            <div className="stat-title">Customers</div>
            <div className="stat-value">
                {stats?.users}
                </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <BiSolidFoodMenu size={35} />
            </div>
            <div className="stat-title">Products</div>
            <div className="stat-value">
                {stats?.menuItems}
                </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
            <CiDeliveryTruck size={35} />
            </div>
            <div className="stat-title">Orders</div>
            <div className="stat-value">
                {stats?.orders}
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
