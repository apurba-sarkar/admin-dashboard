import "ag-charts-enterprise";
import { AgChartsReact } from "ag-charts-react";
// import { AgCharts } from 'ag-charts-enterprise';
const StackedRadical = ({ error, allSales }) => {
  //   const quantityMap = {};

  //   // Iterate over the products array and sum quantities for each product
  //   // eslint-disable-next-line react/prop-types
  //   allSaless.forEach((product) => {
  //     if (!quantityMap[product.Supplier]) {
  //       quantityMap[product.Supplier] = 0;
  //     }
  //     quantityMap[product.Supplier] += product.UnitsStock;
  //   });

  //   // Convert the quantityMap object back to an array of objects
  //   const summedProducts = Object.keys(quantityMap).map((name) => ({
  //     name: name,
  //     quantity: quantityMap[name],
  //   }));

  console.log(allSales);

  // console.log(groupedProducts);

  const option = {
    theme: myTheme,
    data: allSales,
    series: [
      {
        type: "radial-bar",
        radiusKey: "Product",
        angleKey: "Units",
        angleName: "Units",
        stacked: true,
      },
      {
        type: "radial-bar",
        radiusKey: "Product",
        angleKey: "Priceperunit",
        angleName: "Sales",
        stacked: true,
      },
    ],
    // height: 300,
    // width: 300,
    overlays: {
      noData: {
        renderer: () => "<h2> data is loading..</h2>",
      },
    },
  };

  return (
    <div style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: "1.5rem"}}>
      <div> Sales and Units per Catergory</div>
      <AgChartsReact options={option} />
    </div>
  );
};

export default StackedRadical;

var myTheme = {
  baseTheme: "ag-default",
  palette: {
    fills: ["#9BCF53", "#FFF67E", "#21B372", "#FDDE02", "#F76700", "#D30018"],
    strokes: ["black"],
  }
}