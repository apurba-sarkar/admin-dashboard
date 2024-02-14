import { useEffect, useState } from "react";
import { getProductAllData } from "../../services/api-products";

const ProductsAllData = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const processData = async () => {
    try {
      const res = await getProductAllData();
      //   const data = await res.json();
      //   console.log(res)
      setAllProducts(res);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(allProducts);

  useEffect(() => {
    processData();
  }, []);

  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      const total = allProducts.reduce((acc, curr) => {
        return acc + curr.UnitsStock;
      }, 0);
      setTotalProduct(total);
    } else {
      setTotalProduct(0);
    }
  }, [allProducts]);
  console.log(totalProduct);
  return (
    <div style={{ display: "flex", flexDirection: "column", fontSize:"2rem", fontWeight:"bold" }}>
      <span>Total UnitsStock</span>
      <span style={{fontSize:"4rem",}}>{totalProduct}</span>
    </div>
  );
};

export default ProductsAllData;
