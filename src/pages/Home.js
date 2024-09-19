import { InterestCard } from "../components/InterestCard";
import Navbar from "../components/Navbar";

export const Home = () => {
  const cardData = [
    {
      foodname: "Fast Food",
      image: "/images/f1.svg",
      description: "All sorrows are less with bread.",
      price: 5000,
    },
    {
      foodname: "Vegetables & Fruits",
      image: "/images/f2.svg",
      description: "May not want it but good for you.",
      price: 6000,
    },
    {
      foodname: "Drinks & Cocktails",
      image: "/images/f_3.svg",
      description: "I feel sad for those who don't drink.",
      price: 8000,
    },
    {
      foodname: "Resturants",
      image: "/images/f4.svg",
      description: "All sorrows are less with bread.",
      price: 2000,
    },
  ];

  return (
    <>
      <div>
        {/* Navbar */}
        <Navbar />
        <h1>Home Page</h1>
        <div className="interest-cards-container">
          {cardData.map((card) => (
            <InterestCard
              image={card.image}
              name={card.foodname}
              description={card.description}
              price={card.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

// export default Home;
