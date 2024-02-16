import "../components/styles/global.css";
import { useEffect, useState } from "react";
// import StotalSales from "../components/sales/StotalSales";
// import STotalUnitSales from "../components/sales/STotalUnitSales";
// import SUniqueSalesPerson from "../components/sales/SUniqueSalesPerson";
// import SUniqueProducts from "../components/sales/SUniqueProducts";
// import StackedRadical from "../components/sales/Scharts/StackedRadical";
// import SalesBar from "../components/sales/Scharts/SalesBar";
// import SalesPersonBar from "../components/sales/Scharts/SalesPersonBar";
// import RadicalColumn from "../components/sales/Scharts/RadicalColumn";
// import RangedBar from "../components/sales/Scharts/RangedBar";
// import Histogram from "../components/sales/Scharts/Histogram";
// import CTotalPurchases from "../components/customers/CTotalPurchases";
import { CustomerAllData } from "../services/api-customers";

import CUniqueCustomer from "../components/customers/CUniqueCustomer";
import CTotalPurchases from "../components/customers/CTotalPurchases";
import CUniqueCity from "../components/customers/CUniqueCity";
import CUniqueCountry from "../components/customers/CUniqueCountry";
import Heatmap from "../components/customers/Ccharts/Heatmap";
const Sales = () => {
  const [allCustomers, setAllCustomers] = useState([]);
  const [error, setError] = useState(null);
  const processData = async () => {
    try {
      const res = await CustomerAllData();
      setAllCustomers(res);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };
  console.log(allCustomers);
  useEffect(() => {
    processData();
  }, []);

  return (
    <div style={{ marginLeft: "5rem" }}>
      <div className="header">Product Traffic Status</div>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,35rem)",

            columnGap: "3rem",
            marginTop: "1rem",
          }}
        >
          <div
            style={{
              backgroundColor: "#E3FFEC",
              padding: "2rem",
              borderRadius: ".8rem",
              // height:"1rem"
            }}
          >
            <CTotalPurchases allCustomers={allCustomers} />
          </div>
          <div
            style={{
              backgroundColor: "#FBFDDF",
              padding: "2rem",
              borderRadius: ".8rem",
            }}
          >
            <CUniqueCustomer allCustomers={allCustomers} />
          </div>
          <div
            style={{
              backgroundColor: "#EEF8FF",
              padding: "2rem",
              borderRadius: ".8rem",
            }}
          >
            <CUniqueCity allCustomers={allCustomers} />
          </div>
          <div
            style={{
              backgroundColor: "#FFEEEF",
              padding: "2rem",
              borderRadius: ".8rem",
            }}
          >
            <CUniqueCountry allCustomers={allCustomers} />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto",
          marginTop: "4rem",
          rowGap: "2rem",
        }}
      >
        <div>
         <Heatmap allCustomers={allCustomers}/>
        </div>

       
      </div>
    </div>
  );
};

export default Sales;
