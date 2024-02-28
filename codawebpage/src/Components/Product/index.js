import React from "react";
import "./product.css";

const Product = () => {
  return (
    <div className="productBody">
      <svg
        viewBox="0 0 1920 100"
        width="100%"
      >
        <path
          d="M0 35L101 64L202 90L303 78L404 18L505 81L606 59L707 89L808 95L909 34L1011 73L1112 85L1213 26L1314 39L1415 45L1516 89L1617 82L1718 80L1819 39L1920 93L1920 0L1819 0L1718 0L1617 0L1516 0L1415 0L1314 0L1213 0L1112 0L1011 0L909 0L808 0L707 0L606 0L505 0L404 0L303 0L202 0L101 0L0 0Z"
          fill="#eae8f7"
        ></path>
        <path
          d="M0 50L101 51L202 55L303 12L404 17L505 51L606 4L707 6L808 52L909 4L1011 55L1112 13L1213 8L1314 9L1415 44L1516 27L1617 35L1718 42L1819 20L1920 26L1920 0L1819 0L1718 0L1617 0L1516 0L1415 0L1314 0L1213 0L1112 0L1011 0L909 0L808 0L707 0L606 0L505 0L404 0L303 0L202 0L101 0L0 0Z"
          fill="#280031"
        ></path>
      </svg>
      <div className="ProductContainer">
        <h1>Trending Topics</h1>
      </div>
    </div>
  );
};

export default Product;
