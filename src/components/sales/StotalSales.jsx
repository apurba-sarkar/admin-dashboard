const StotalSales = ({ allSales }) => {
  // eslint-disable-next-line react/prop-types
  const totalSales = allSales.reduce((acc, curr) => {
    return acc + curr.Sales;
  }, 0);
  console.log(totalSales);

  const fixedSales = totalSales.toFixed(2);

  const previousValue = 29000;
  const growthRate = (
    ((fixedSales - previousValue) / previousValue) *
    100
  ).toFixed(2);

  const style = {
    color: growthRate > 0 ? "green" : "red",
  };
  return (
    <div className="product-boxmodel">
      <span className="topic-boxmodel">Total Sales</span>
      <span style={{ fontSize: "6rem" }}>{fixedSales}</span>
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

export default StotalSales;
