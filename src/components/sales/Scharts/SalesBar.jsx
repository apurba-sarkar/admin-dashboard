/* eslint-disable react/prop-types */
import { AgChartsReact } from "ag-charts-react";

const SalesBar = ({ allSales}) => {
  console.log(allSales);

  const option = {
    data: allSales,
    series: [
      {
        type: "bar",
        // direction: 'horizontal',
        xKey: "Product",
        yKey: "Sales",
        yName: "Total Sales",
      }
    ],
    // width:400,
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
       Sales per Products
      </div>
      <AgChartsReact options={option} />
    </div>
  );
};

export default SalesBar;
