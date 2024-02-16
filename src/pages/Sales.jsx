import "../components/styles/global.css";
import { useEffect, useState } from "react";
import { getSalesData } from "../services/api";
import StotalSales from "../components/sales/StotalSales";
import STotalUnitSales from "../components/sales/STotalUnitSales";
import SUniqueSalesPerson from "../components/sales/SUniqueSalesPerson";
import SUniqueProducts from "../components/sales/SUniqueProducts";
import StackedRadical from "../components/sales/Scharts/StackedRadical";
import SalesBar from "../components/sales/Scharts/SalesBar";
import SalesPersonBar from "../components/sales/Scharts/SalesPersonBar";
import RadicalColumn from "../components/sales/Scharts/RadicalColumn";
import RangedBar from "../components/sales/Scharts/RangedBar";
import Histogram from "../components/sales/Scharts/Histogram";

const Sales = () => {
  const [allSales, setAllSales] = useState([]);
  const [error, setError] = useState(null);
  const processData = async () => {
    try {
      const res = await getSalesData();
      setAllSales(res);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };
  console.log(allSales);
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
            <StotalSales allSales={allSales} />
          </div>
          <div
            style={{
              backgroundColor: "#FBFDDF",
              padding: "2rem",
              borderRadius: ".8rem",
            }}
          >
            <STotalUnitSales allSales={allSales} />
          </div>
          <div
            style={{
              backgroundColor: "#EEF8FF",
              padding: "2rem",
              borderRadius: ".8rem",
            }}
          >
            <SUniqueSalesPerson allSales={allSales} />
          </div>
          <div
            style={{
              backgroundColor: "#FFEEEF",
              padding: "2rem",
              borderRadius: ".8rem",
            }}
          >
            {" "}
            <SUniqueProducts allSales={allSales} />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "40rem 60rem 60rem",
          marginTop: "4rem",
          rowGap:"2rem"
          
        }}
      >
        <div>
          <StackedRadical allSales={allSales} />{" "}
        </div>
        <div>
          <SalesBar allSales={allSales} />{" "}
        </div>
        <div>
          <SalesPersonBar allSales={allSales} />{" "}
        </div>
        <div>
          <RadicalColumn allSales={allSales} />{" "}
        </div>
        <div>
          <RangedBar allSales={allSales} />{" "}
        </div>
        <div>
          <Histogram allSales={allSales} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Sales;
