"use strict";
import { getVanillaData, getStrawberryData } from "../services/api";
import { useEffect, useState } from "react";
import { AgChartsReact } from "ag-charts-react";

const Scatter = () => {
  const [vdata, setVdata] = useState();
  const [sdata, setSdata] = useState();

  const pdata = async () => {
    try {
      const res = await getVanillaData();
      //   const data = await res.json();
      //   console.log(res)
      setVdata(res);
    } catch (error) {
      console.log(error);
    }
  };
  const finaldata = async () => {
    try {
      const res = await getStrawberryData();
      //   const data = await res.json();
      //   console.log(res)
      setSdata(res);
    } catch (error) {
      console.log(error);
    }
  };

  //   console.log(adata);

  const option = {
    title: {
      text: "Apple's Revenue by Product Category",
    },
    subtitle: {
      text: "In Billion U.S. Dollars",
    },
    // data: vdata,
    series: [
      //   {
      //     type: "scatter",
      //     // xKey: "Salesperson",
      //     // yKey: "Units",
      //     yName: "iPhone",
      //     angleKey: "Units",
      //     legendItemKey: "Priceperunit",
      //   },
      // ],
      {
        type: "scatter",
        title: "Vanilla",
        data: vdata,
        xKey: "Units",
        xName: "units",
        yKey: "Sales",
        yName: "Weight",
        marker: {
          shape: "square",
          fill: "#e36f6ab5",
          stroke: "#9f4e4a",
        },
      },
      {
        type: "scatter",
        title: "Strawberry",
        data: sdata,
        xKey: "Units",
        xName: "units",
        yKey: "Sales",
        yName: "Weight",
        marker: {
          fill: "#7b91deb5",
          stroke: "#56659b",
        },
      },
    ],
    axes: [
      {
        type: "number",
        position: "bottom",
        title: {
          text: "Units",
        },
        label: {
          formatter: (params) => {
            return params.value + " pcs";
          },
        },
      },
      {
        type: "number",
        position: "left",
        title: {
          text: "Sales",
        },
        label: {
          formatter: (params) => {
            return params.value + "rs";
          },
        },
      },
    ],
  };

  useEffect(() => {
    pdata();
    finaldata();
  }, []);

  return <AgChartsReact options={option} />;
};

export default Scatter;
