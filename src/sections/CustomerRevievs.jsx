import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerRevievs = () => {
  return (
    <section className="max-container bg-blue-50 rounded-lg p-10">
      <h3 className="font-palanquin text-4xl text-center font-bold">
        What our <span className="text-coral-red">customers </span>say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Here genuine stories from our satisfied customers about thier
        expextional experience with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerRevievs;
