

// eslint-disable-next-line react/prop-types
const CUniqueCity = ({allCustomers}) => {
    console.log(allCustomers);

    const uniqueObjects = Array.from(
      // eslint-disable-next-line react/prop-types
      new Set(allCustomers.map((obj) => obj.Country))
    ).map((Country) => {
      // eslint-disable-next-line react/prop-types
      return allCustomers.find((obj) => obj.Country === Country);
    });
    console.log(uniqueObjects);
  
    const uniqueProducts = uniqueObjects.length;
    console.log(uniqueProducts);
  
  
    const previousValue = 21;
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
    <span className="topic-boxmodel"> Total Country</span>
    <span style={{ fontSize: "6rem" }}>{uniqueProducts}</span>
    <div style={{ display: "flex", justifyContent: "end" ,fontSize:"2rem",gap:"1rem",marginTop:"1.5rem"}}>
      <span style={style}>{growthRate} % </span> <span>this month</span>
    </div>
  </div>
  )
}

export default CUniqueCity