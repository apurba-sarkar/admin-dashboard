// import { useEffect, useState } from "react";
// import { getProductAllData } from "../../services/api-products";
import "../styles/global.css";

const PTotalStocks = ({allProducts,error}) => {

 console.log(allProducts)
 
      // eslint-disable-next-line react/prop-types
      const totalStocks = allProducts.reduce((acc, curr) => {
        return acc + curr.UnitsStock;
      }, 0);

   
    console.log(totalStocks);
  


  return (
    <div className="product-boxmodel">
      <span className="topic-boxmodel">Total Stocks</span>
      <span style={{ fontSize: "6rem" }}>{totalStocks}</span>
    </div>
  );
};

export default PTotalStocks;
