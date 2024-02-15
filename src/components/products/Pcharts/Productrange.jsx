/* eslint-disable react/prop-types */
import { AgChartsReact } from "ag-charts-react";

const Productrange = ({ error, allProducts }) => {
  console.log(allProducts);

  const option = {
    data: allProducts,
    series: [
      {
        type: "bar",
        direction: "horizontal",
        xKey: "Category",
        yKey: "UnitsStock",
        yName: "Total UnitsStock",
      },
      {
        type: "bar",
        direction: "horizontal",
        xKey: "Category",
        yKey: "UnitsOrder",
        yName: "Total UnitsOrder",
      },
    ],
    height: 550,
  };

  return (
    <div>
      <div
        style={{ fontSize: "3rem", fontWeight: "bold", marginLeft: "1.5rem" }}
      >
        Product's Stock Units and Orders{" "}
      </div>
      <AgChartsReact options={option} />
    </div>
  );
};

export default Productrange;
