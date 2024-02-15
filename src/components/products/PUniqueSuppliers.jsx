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

  return (
    <div className="product-boxmodel">
      <span className="topic-boxmodel"> Total Suppliers</span>
      <span style={{ fontSize: "6rem" }}>{uniqueSuppliers}</span>
    </div>
  );
};

export default PUniqueSuppliers;
