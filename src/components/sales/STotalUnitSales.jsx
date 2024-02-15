const STotalUnitSales = ({ allSales }) => {
  // eslint-disable-next-line react/prop-types
  const totalUnitSales = allSales.reduce((acc, curr) => {
    return acc + curr.Units;
  }, 0);
  console.log(totalUnitSales);

  const previousValue = 2800;
  const growthRate = (
    ((totalUnitSales - previousValue) / previousValue) *
    100
  ).toFixed(2);

  const style = {
    color: growthRate > 0 ? "green" : "red",
  };
  return (
    <div className="product-boxmodel">
      <span className="topic-boxmodel">Total Units</span>
      <span style={{ fontSize: "6rem" }}>{totalUnitSales}</span>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          fontSize: "2rem",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        <span style={style}>{growthRate} % </span> <span>this month</span>
      </div>
    </div>
  );
};

export default STotalUnitSales;
