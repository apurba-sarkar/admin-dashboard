/* eslint-disable react/prop-types */
import { AgChartsReact } from "ag-charts-react";

const Histogram = ({ allSales }) => {
  console.log(allSales);

  const option = {
    theme:myTheme,
    data: allSales,
    series: [
      {
        type: "histogram",
        xKey: "lowPriceperunit",
        xName: "Product",
        // binCount: 20,
      },
    ],
    axes: [
      {
        type: "number",
        position: "bottom",
        title: { text: "Number of Units" },
      },
      {
        type: "number",
        position: "left",
        title: { text: "Number of Units" },
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
        Histogram of lowPrice per Unit
      </div>
      <AgChartsReact options={option} />
    </div>
  );
};

export default Histogram;

var myTheme = {
  baseTheme: "ag-default",
  palette: {
    fills: ["#FFCF96", "#FFF67E", "#21B372", "#FDDE02", "#F76700", "#D30018"],
    strokes: ["white"],
  }
}