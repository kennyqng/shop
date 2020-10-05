import React from "react";
import "./style.css";
import banner from "../../assets/banner.svg";
import Card from "../../components/Card";
import bowl from "../../assets/bowl.svg";
import fries from "../../assets/fries.svg";
import frisbie from "../../assets/frisbie.svg";

function Home() {
  const dummy = [
    {
      id: 1,
      thumbnail: bowl,
      title: "Customizable Bowl",
      price: 19.99,
      category: "bowls"
    },
    {
      id: 2,
      thumbnail: fries,
      title: "Fries Baseball Shirt",
      price: 14.99,
      category: "apparels"
    },
    {
      id: 3,
      thumbnail: frisbie,
      title: "Customizable Frisbie",
      price: 9.99,
      category: "toys"
    },
    {
      id: 6,
      thumbnail: frisbie,
      title: "Customizable Frisbie",
      price: 9.99,
      category: "toys"
    },
    {
      id: 4,
      thumbnail: bowl,
      title: "Customizable Bowl",
      price: 19.99,
      category: "bowls"
    },
    {
      id: 5,
      thumbnail: fries,
      title: "Fries Baseball Shirt",
      price: 14.99,
      category: "apparels"
    }
  ];
  return (
    <>
      <img src={banner} className="banner" alt="puppy banner"></img>
      <h2 style={{ padding: "0% 0% 0% 3%" }}>New arrivals!</h2>
      <div className="products">
        {dummy.map(dummy => (
          <Card
            key={dummy.id}
            thumbnail={dummy.thumbnail}
            title={dummy.title}
            price={dummy.price}
          />
        ))}
      </div>
    </>
  );
}
export default Home;
