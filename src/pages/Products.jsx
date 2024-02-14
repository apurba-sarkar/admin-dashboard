import ProductsAllData from "../components/products/ProductsAllData";

const Products = () => {
  return (
    <div style={{ marginLeft: "3rem" }}>
      <div>Product Traffic Status</div>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            backgroundColor: "red",
            width: "100vw",
            columnGap: "10rem",

            // height:"25rem"
          }}
        >
          <div style={{ backgroundColor: "#E3FFEC", paddingLeft: "2rem" }}>
            <ProductsAllData />
          </div>
          <div style={{ backgroundColor: "blue" }}>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          backgroundColor: "green",
          // width:"100vw",
        }}
      >
        <div>1</div>
        <div>2</div>
      </div>
    </div>
  );
};

export default Products;
