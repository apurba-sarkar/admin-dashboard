/* eslint-disable react/prop-types */
import "../styles/global.css";
const PUniqueCategory = ({ error, allProducts }) => {
  console.log(allProducts);

  const uniqueObjects = Array.from(
    new Set(allProducts.map((obj) => obj.Category))
  ).map((Category) => {
    return allProducts.find((obj) => obj.Category === Category);
  });
  console.log(uniqueObjects);

  const uniqueProducts = uniqueObjects.length;
  console.log(uniqueProducts);


  const previousValue = 7;
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
      <span className="topic-boxmodel"> Total Category</span>
      <span style={{ fontSize: "6rem" }}>{uniqueProducts}</span>
      <div style={{ display: "flex", justifyContent: "end" ,fontSize:"2rem",gap:"1rem",marginTop:"1.5rem"}}>
        <span style={style}>{growthRate} % </span> <span>this month</span>
      </div>
    </div>
  );
};

export default PUniqueCategory;
