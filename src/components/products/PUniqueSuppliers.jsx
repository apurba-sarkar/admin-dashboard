/* eslint-disable react/prop-types */
import "../styles/global.css";
const PUniqueSuppliers = ({ error, allProducts }) => {
  console.log(allProducts);

  const uniqueObjects = Array.from(
    new Set(allProducts.map((obj) => obj.Supplier))
  ).map((Supplier) => {
    return allProducts.find((obj) => obj.Supplier === Supplier);
  });
  console.log(uniqueObjects);

  const uniqueSuppliers = uniqueObjects.length;
  console.log(uniqueSuppliers);


  const previousValue = 26;
  const growthRate = (
    ((uniqueSuppliers - previousValue) / previousValue) *
    100
  ).toFixed(2);

  console.log(growthRate);


const style={
  color: growthRate> 0 ?"green":"red"
}


  return (
    <div className="product-boxmodel">
      <span className="topic-boxmodel"> Total Suppliers</span>
      <span style={{ fontSize: "6rem" }}>{uniqueSuppliers}</span>
      <div style={{ display: "flex", justifyContent: "end" ,fontSize:"2rem",gap:"1rem",marginTop:"1.5rem"}}>
        <span style={style}>{growthRate} % </span> <span>this month</span>
      </div>
    </div>
  );
};

export default PUniqueSuppliers;
