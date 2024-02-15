/* eslint-disable react/prop-types */
import "../styles/global.css";
const SUniqueSalesPerson = ({ error, allSales }) => {
  console.log(allSales);

  const uniqueObjects = Array.from(
    new Set(allSales.map((obj) => obj.Salesperson))
  ).map((Supplier) => {
    return allSales.find((obj) => obj.Supplier === Supplier);
  });
  console.log(uniqueObjects);

  const uniqueSuppliers = uniqueObjects.length;
  console.log(uniqueSuppliers);


  const previousValue = 5;
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
      <span className="topic-boxmodel"> Total SalesPerson</span>
      <span style={{ fontSize: "6rem" }}>{uniqueSuppliers}</span>
      <div style={{ display: "flex", justifyContent: "end" ,fontSize:"2rem",gap:"1rem",marginTop:"1.5rem"}}>
        <span style={style}>{growthRate} % </span> <span>this month</span>
      </div>
    </div>
  );
};

export default SUniqueSalesPerson;
