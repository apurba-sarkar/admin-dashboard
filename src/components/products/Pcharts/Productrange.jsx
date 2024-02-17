/* eslint-disable react/prop-types */
import { AgChartsReact } from "ag-charts-react";

const Productrange = ({ error, allProducts }) => {
  console.log(allProducts);

  const option = {
    theme: myTheme,
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
    height: 550,overlays: {
        noData: {
          renderer: () => "<h2> data is loading..</h2>",
        },
      },
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
var myTheme = {
  baseTheme: "ag-default",
  palette: {
    fills: ["#4CB9E7", "#C1F2B0", "#21B372", "#FDDE02", "#F76700", "#D30018"],
    strokes: ["black"],
  }
}