/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// import { getProductAllData } from "../../services/api-products";
import "../styles/global.css";

const PTotalOrders = ({ allProducts, error }) => {
  const totalOrders = allProducts.reduce((acc, curr) => {
    return acc + curr.UnitsOrder;
  }, 0);
  console.log(totalOrders);

  const previousValue = 900;
  const growthRate = (
    ((totalOrders - previousValue) / previousValue) *
    100
  ).toFixed(2);

  console.log(growthRate);

  const style = {
    color: growthRate > 0 ? "green" : "red",
  };

  return (
    <div className="product-boxmodel">
      <span className="topic-boxmodel">Total Orders</span>
      <span style={{ fontSize: "6rem" }}>{totalOrders}</span>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          fontSize: "2rem",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        <span style={style}>{growthRate} % </span> <span>this month</span>
      </div>
    </div>
  );
};

export default PTotalOrders;
