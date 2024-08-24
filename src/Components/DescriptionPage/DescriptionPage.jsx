import React from "react";
import "./DescriptionPage.css";

const DescriptionPage = () => {
  return (
    <div className="descriptionpage">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An ecommerce business is a company that generates revenue from selling
          products or services online, or uses the internet to pursue sales
          leads. For example, an ecommerce company might sell software, apparel,
          housewares, or web design services. You can run an ecommerce business
          from a single website or through multiple online channels like social
          media and email.
        </p>
        <p>
          Ecommerce or "electronic commerce" is the trading of goods and
          services online. The internet allows individuals and businesses to buy
          and sell an increasing amount of physical goods, digital goods, and
          services electronically.
        </p>
      </div>
    </div>
  );
};

export default DescriptionPage;
