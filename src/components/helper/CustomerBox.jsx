// import "../helper/boxStyle.css";

const CustomerBox = ({ data }) => {
  console.log(data);
  const { Name, Designation, Country, Purchased } = data;
  // console.log(data.Name)

  return (
    <div
      className="boxstyle"
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        width:"20rem"
        // justifyContent: "start",
      }}
    >
      <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>{Name}</div>
      <div style={{ display: "flex",justifyContent:"space-between", }}>
        <div>{Designation === "Owner" ? "Business Man" : Designation}</div>
        <div>{Country}</div>
      </div>
      <div>
        <span>Total Spends </span>
        <span style={{color:"#37C9F1",backgroundColor:"white",padding:".3rem",borderRadius:".8rem"}}>
          {Purchased.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      </div>
      {/* <div>-----------</div> */}
    </div>
  );
};

export default CustomerBox;
