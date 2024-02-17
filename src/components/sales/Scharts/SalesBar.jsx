/* eslint-disable react/prop-types */
import { AgChartsReact } from "ag-charts-react";

const SalesBar = ({ allSales}) => {
  console.log(allSales);

  const option = {
    theme:myTheme,
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
var myTheme = {
  baseTheme: "ag-default",
  palette: {
    fills: ["#96E9C6", "#FFF67E", "#21B372", "#FDDE02", "#F76700", "#D30018"],
    strokes: ["black"],
  }
}