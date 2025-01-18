import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SectionTItle from "../../components/SectionTItle";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
    return (
        <div>
            <SectionTItle
        subTitle="---How many??---"
        heading="PAYMENT"
      ></SectionTItle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
        </div>
    );
};

export default Payment;