/* eslint-disable react/prop-types */
import { AgChartsReact } from "ag-charts-react";

const RadicalColumn = ({ allSales }) => {
  console.log(allSales);

  const quantityMap = {};
  const salesMap = {};

  // Iterate over the products array and sum quantities for each product
  // eslint-disable-next-line react/prop-types
  allSales.forEach((product) => {
    if (!quantityMap[product.Salesperson]) {
      quantityMap[product.Salesperson] = 0;
      salesMap[product.Salesperson] = 0;
    }
    quantityMap[product.Salesperson] += product.Units;
    salesMap[product.Salesperson] += product.Sales;
  });

  // Convert the quantityMap object back to an array of objects
  const summedProducts = Object.keys(quantityMap).map((name) => ({
    name: name,
    quantity: quantityMap[name],
    sales: salesMap[name]
  }));

  console.log(summedProducts);

  const option = {
    theme:myTheme,
    data: summedProducts,
    series: [
      {
        type: "radial-column",
        angleKey: "name",
        radiusKey: "quantity",
        radiusName: "quantity",
        // stacked:"true"
      },
      {
        type: "radial-column",
        angleKey: "name",
        radiusKey: "sales",
        radiusName: "sales",
      },
      
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
        style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: "1.5rem" }}
      >
        Units and Sales based on Salesperson
      </div>
      <AgChartsReact options={option} />
    </div>
  );
};

export default RadicalColumn;
var myTheme = {
  baseTheme: "ag-default",
  palette: {
    fills: [ "#FFB996","#DC84F3", "#21B372", "#FDDE02", "#F76700", "#D30018"],
    strokes: ["black"],
  }
}