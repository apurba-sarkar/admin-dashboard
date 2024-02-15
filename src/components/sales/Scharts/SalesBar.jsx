/* eslint-disable react/prop-types */
import { AgChartsReact } from "ag-charts-react";

const SalesBar = ({ allSales}) => {
  console.log(allSales);

  const option = {
    data: allSales,
    series: [
      {
        type: "bar",
    
        xKey: "Salesperson",
        yKey: "Sales",
        yName: "Total UnitsStock",
      },
    //   {
    //     type: "bar",
    //     direction: "horizontal",
    //     xKey: "Category",
    //     yKey: "UnitsOrder",
    //     yName: "Total UnitsOrder",
    //   },
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

export default SalesBar;
