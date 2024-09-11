import { InterestCard } from "../components/InterestCard";
import Navbar from "../components/Navbar";

export const Home = () => {
  return (
    <>
      <div>
        {/* Navbar */}
        <Navbar />
        <h1>Home Page</h1>
        <div className="interest-cards-container">
          <InterestCard
            name="Fast Food"
            image="/images/f1.svg"
            description="All sorrows are less with bread."
          />
          <InterestCard
            name="Vegetables & Fruits"
            image="/images/f2.svg"
            description="May not want it but good for you."
          />
          <InterestCard
            name="Drinks & Cocktails"
            image="/images/f_3.svg"
            description="I feel sad for those who don't drink."
          />
          <InterestCard
            name="Resturants"
            image="/images/f4.svg"
            description="All sorrows are less with bread."
          />
        </div>
      </div>
    </>
  );
};

// export default Home;
