// import { useEffect, useState } from "react";
// import { getProductAllData } from "../../services/api-products";

import "../styles/global.css";

const PTotalStocks = ({ allProducts, error }) => {


  console.log(allProducts);


  // eslint-disable-next-line react/prop-types
  const totalStocks = allProducts.reduce((acc, curr) => {
    return acc + curr.UnitsStock;
  }, 0);

  console.log(totalStocks);

  const previousValue = 2500;
  const growthRate = (
    ((totalStocks - previousValue) / previousValue) *
    100
  ).toFixed(2);

  console.log(growthRate);


const style={
  color: growthRate> 0 ?"green":"red"
}

  return (
    <div className="product-boxmodel">
      <span className="topic-boxmodel">Total Stocks</span>
      <span style={{ fontSize: "6rem" }}>{totalStocks}</span>
      <div style={{ display: "flex", justifyContent: "end" ,fontSize:"2rem",gap:"1rem",marginTop:"1.5rem"}}>
        <span style={style}>{growthRate} % </span> <span>this month</span>
      </div>
    </div>
  );
};

export default PTotalStocks;
