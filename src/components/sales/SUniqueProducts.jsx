/* eslint-disable react/prop-types */
import "../styles/global.css";
const SUniqueProducts = ({ error,allSales}) => {
  console.log(allSales);

  const uniqueObjects = Array.from(
    new Set(allSales.map((obj) => obj.Product))
  ).map((Category) => {
    return allSales.find((obj) => obj.Category === Category);
  });
  console.log(uniqueObjects);

  const uniqueProducts = uniqueObjects.length;
  console.log(uniqueProducts);


  const previousValue = 6;
  const growthRate = (
    ((uniqueProducts - previousValue) / previousValue) *
    100
  ).toFixed(2);

  console.log(growthRate);


const style={
  color: growthRate> 0 ?"green":"red"
}


  return (
    <div className="product-boxmodel">
      <span className="topic-boxmodel"> Total Products</span>
      <span style={{ fontSize: "6rem" }}>{uniqueProducts}</span>
      <div style={{ display: "flex", justifyContent: "end" ,fontSize:"2rem",gap:"1rem",marginTop:"1.5rem"}}>
        <span style={style}>{growthRate} % </span> <span>this month</span>
      </div>
    </div>
  );
};

export default SUniqueProducts;
