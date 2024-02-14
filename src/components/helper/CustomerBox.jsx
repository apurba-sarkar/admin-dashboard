const CustomerBox = ({ data }) => {
  console.log(data);
  const { Name, Designation, Country, Purchased } = data;
  // console.log(data.Name)

  return (
    <div style={{ display: "flex", flexDirection: "column" ,backgroundColor:"yellow"}}>
      <div>{Name}</div>
      <div style={{ display: "flex" }}>
        <div>{Designation === "Owner" ? "Business Man" : Designation}</div>
        <div>{Country}</div>
      </div>
      <div>
        <span>Total Spends </span>
        {Purchased.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </div>
    </div>
  );
};

export default CustomerBox;
