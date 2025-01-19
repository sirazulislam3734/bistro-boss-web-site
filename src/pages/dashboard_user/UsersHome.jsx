import useAuth from "../../hooks/useAuth";

const UsersHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="font-bold text-4xl">
        <span>Hi, Welcome </span>{" "}
        {user?.displayName ? user?.displayName : "Back!"}
      </h2>
    </div>
  );
};

export default UsersHome;
