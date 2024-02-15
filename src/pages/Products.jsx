

import "../components/styles/global.css";
import { useEffect, useState } from "react";
import { getProductAllData } from "./../services/api-products";
import PUniqueSuppliers from "../components/products/PUniqueSuppliers";
import PTotalStocks from "../components/products/PTotalStocks";
import PTotalOrders from "../components/products/PTotalOrderes";
import PUniqueCategory from "../components/products/PUniqueCategory";
import Productrange from "../components/products/Pcharts/Productrange";
import Donut from "../components/products/Pcharts/Donut";

const Products = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [error, setError]= useState(null)
  // const [totalorders, setTotalOrders] = useState(0);
  const processData = async () => {
    try {
      const res = await getProductAllData();
      setAllProducts(res);
    } catch (err) {
      console.log(err);
      setError(err)
    }
  };
  // console.log(allProducts);
  // console.log(error)

  useEffect(() => {
    processData();
  }, []);


  return (
    <div style={{ marginLeft: "5rem" }}>
      <div className="header">Product Traffic Status</div>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,35rem)",
            // backgroundColor: "red",
            // width: "100vw",
            columnGap: "3rem",
            marginTop: "1rem",
            // padding:" 1rem"
            // marginLeft:"2rem"

            // height:"25rem"
          }}
        >
          <div
            style={{
              backgroundColor: "#E3FFEC",
              padding: "2rem",
              borderRadius: ".8rem",
              // height:"1rem"
            }}
          >
            <PTotalStocks  error={error} allProducts={allProducts}/>
          </div>
          <div
            style={{
              backgroundColor: "#FBFDDF",
              padding: "2rem",
              borderRadius: ".8rem",
            }}
          >
            <PTotalOrders  error={error} allProducts={allProducts} />
          </div >
          <div   style={{
              backgroundColor: "#EEF8FF",
              padding: "2rem",
              borderRadius: ".8rem",
            }}> <PUniqueSuppliers error={error} allProducts={allProducts} /></div>
          <div   style={{
              backgroundColor: "#FFEEEF",
              padding: "2rem",
              borderRadius: ".8rem",
            }}> <PUniqueCategory error={error} allProducts={allProducts}/></div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          marginTop:"4rem"
          // backgroundColor: "green",
          // width:"100vw",
        }}
      >
        <div><Productrange error={error} allProducts={allProducts}/> </div>
        <div><Donut error={error} allProducts={allProducts}/></div>
      </div>
    </div>
  );
};

export default Products;
