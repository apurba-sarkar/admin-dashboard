/* eslint-disable react/prop-types */
import { AgChartsReact } from "ag-charts-react";

const SalesPersonBar= ({ allSales}) => {
  console.log(allSales);

  const option = {
    data: allSales,
    series: [
      {
        type: "bar",
        xKey: "Product",
        yKey: "Units",
        yName: "Total Sales",
      }
    ],
    // width: 600,
    overlays: {
        noData: {
          renderer: () => "<h2> data is loading..</h2>",
        },
      },
  };

  return (
    <div>
      <div
       style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: "1.5rem"}}
      >
       Units per Products
      </div>
      <AgChartsReact options={option} />
    </div>
  );
};

export default SalesPersonBar;
