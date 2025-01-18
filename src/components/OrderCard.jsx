import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCard from "../hooks/useCard";



const OrderCard = ({item}) => {
    const {name, price, recipe, image, _id} = item;
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const [, refetch] = useCard();
    const handleAddToCard = food => {
      if(user && user.email){
        console.log(user.email, food);
        const cardItem = {
          menuId: _id,
          email: user.email,
          name,
          price,
          image
        }
        axiosSecure.post('/cards', cardItem)
        .then(res => {
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              title: "success!",
              text: `${name} Add To Your Card!`,
              icon: "success",
            });
            {/**refetch card */}
            refetch();
          }
        })
    }else{
      Swal.fire({
        title: "You are not Sign In?",
        text: "Please Sign in to add to the card!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Sign in!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/signin', { state: {from: location}})
        }
      });
    }
    }
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <p className="absolute right-6 top-6 bg-black text-white px-3 py-1">${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button
            onClick={() => handleAddToCard(item)}
             className="border-orange-400 text-orange-400 font-semibold bg-slate-100 border-b-4 px-4 py-3 rounded-xl hover:bg-black hover:text-orange-400">ADD TO CARD</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
