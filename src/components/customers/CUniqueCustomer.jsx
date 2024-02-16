

// eslint-disable-next-line react/prop-types
const CUniqueCustomer = ({allCustomers}) => {
  console.log(allCustomers);

  // eslint-disable-next-line react/prop-types
  const uniqueCustomers = allCustomers.length;
  console.log(uniqueCustomers);

  const previousValue = 85;
  const growthRate = (
    ((uniqueCustomers - previousValue) / previousValue) *
    100
  ).toFixed(2);

  console.log(growthRate);

  const style = {
    color: growthRate > 0 ? "green" : "red",
  };

  return (
    <div className="product-boxmodel">
      <span className="topic-boxmodel"> Total Dealer</span>
      <span style={{ fontSize: "6rem" }}>
        {uniqueCustomers}
        </span>
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

export default CUniqueCustomer;
