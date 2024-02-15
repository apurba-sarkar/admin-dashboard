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

  return (
    <div className="product-boxmodel">
      <span className="topic-boxmodel"> Total Category</span>
      <span style={{ fontSize: "6rem" }}>{uniqueProducts}</span>
    </div>
  );
};

export default PUniqueCategory;
