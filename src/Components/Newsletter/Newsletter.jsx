import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="Newsletter">
      <h1>Get Exclusive Offers On Your Email </h1>
      <p> Subscribe to your newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Enter your email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
