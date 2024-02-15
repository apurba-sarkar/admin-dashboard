/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// import { getProductAllData } from "../../services/api-products";
import "../styles/global.css";

const PTotalOrders = ({ allProducts,error}) => {
 
 
  
      const totalOrders = allProducts.reduce((acc, curr) => {
        return acc + curr.UnitsOrder;
       } ,0)
       console.log(totalOrders)
    
  
  return (
    <div className="product-boxmodel">
      <span className="topic-boxmodel">Total Orders</span>
      <span style={{ fontSize: "6rem" }}>{totalOrders}</span>
    </div>
  );
};

export default PTotalOrders;
