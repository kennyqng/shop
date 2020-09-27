import React from "react";
import banner from "../../assets/banner.svg";
import "./style.css";


function Home() {
    return (
        <>
        <img src={banner} className="banner" alt="puppy banner"></img>
        <div className="products"></div>
        </>
    );
}
export default Home;