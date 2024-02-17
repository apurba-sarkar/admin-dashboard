/* eslint-disable react/prop-types */
import { AgChartsReact } from "ag-charts-react";

const RangedBar = ({ allSales }) => {
  console.log(allSales);

//   const quantityMap = {};
//   const salesMap = {};

  // Iterate over the products array and sum quantities for each product
  // eslint-disable-next-line react/prop-types
//   allSales.forEach((product) => {
//     if (!quantityMap[product.Salesperson]) {
//       quantityMap[product.Salesperson] = 0;
//       salesMap[product.Salesperson] = 0;
//     }
//     quantityMap[product.Salesperson] += product.Units;
//     salesMap[product.Salesperson] += product.Sales;
//   });

//   // Convert the quantityMap object back to an array of objects
//   const summedProducts = Object.keys(quantityMap).map((name) => ({
//     name: name,
//     quantity: quantityMap[name],
//     sales: salesMap[name]
//   }));

//   console.log(summedProducts);

  const option = {
    theme:myTheme,
    data: allSales,
    series: [
        {
          type: "range-bar",
          direction: 'horizontal',
          xKey: "Product",
          yLowKey: "lowPriceperunit",
          yHighKey: "Priceperunit",
        //   label: {
        //     padding: 10,
        //     formatter: ({ itemId, value }) => {
        //       return `£${value.toFixed(0)}K ${itemId === "low" ? "↓" : "↑"}`;
        //     },
        //   },
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
        Price range of per unit price
      </div>
      <AgChartsReact options={option} />
    </div>
  );
};

export default RangedBar;

var myTheme = {
  baseTheme: "ag-default",
  palette: {
    fills: ["#FF8080", "#FFF67E", "#21B372", "#FDDE02", "#F76700", "#D30018"],
    strokes: ["black"],
  }
}