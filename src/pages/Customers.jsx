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
        marginLeft: "2rem",
      }}
    >
      <div
        style={{
          height: "10rem",
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <h1 style={{ fontSize: "4rem" }}> CUSTOMER TRAFFIC REPORT</h1>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          width: "100%",
          // height: "100vh",
          // backgroundColor: "green",
          gap: "2rem",
          fontSize: "2rem",
        }}
      >
        <div
          style={{
            // backgroundColor: "red",
            display: "grid",
            gridTemplateColumns: "repeat(1,1fr)",
          }}
        >
          <div
            style={{
              // backgroundColor: "green",
              padding: "2rem",
              // border: "black 2px solid",
              // height: "20rem",
              marginBottom: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:"#3FDAD8",
              fontWeight:"bold",
              color:"white",
              borderRadius:".5rem"

            }}
          >
            <CustomerAllData />
          </div>
          <div style={{backgroundColor:"#37C9F1",padding:"3rem",}} >
            {" "}
            <TopCustomer />
          </div>
       
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
