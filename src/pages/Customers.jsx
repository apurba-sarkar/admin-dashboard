import Bar from "../components/Bar";
import CustomerAllData from "../components/customers/CustomerAllData";
import TopCustomer from "../components/customers/TopCustomer";

const Customers = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
       
      }}
    >
      <div style={{height:"10rem"}}>Customer Report</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          width: "100%",
           height: "auto",
          backgroundColor: "green",
        }}
      >
        <div
          style={{
            backgroundColor: "red",
            display: "grid",
            gridTemplateColumns: "repeat(1,1fr)",
          }}
        >
          <div
            style={{
              backgroundColor: "green",
              padding: "2rem",
              border: "black 2px solid",
            }}
          >
            -------
            <CustomerAllData />
           
          </div>
          <div style={{height:"20rem"}}> <TopCustomer/></div>
          <div>city with most selling</div>
        </div>
        <div style={{ width: "100rem" }}>map</div>
        <div
          style={{
            backgroundColor: "red",
            display: "grid",
            gridTemplateColumns: "repeat(1,1fr)",
          }}
        >
          <div style={{ backgroundColor: "yellow" }}>1</div>
          <div>2</div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
