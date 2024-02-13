"use strict";
import { getSalesData } from "../services/api";
import { useEffect, useState } from "react";
import { AgChartsReact } from "ag-charts-react";

const Bar = () => {
  const [adata, setAdata] = useState();
  const pdata = async () => {
    try {
      const res = await getSalesData();
      //   const data = await res.json();
      //   console.log(res)
      setAdata(res);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(adata);

  const option = {
    title: {
      text: "Apple's Revenue by Product Category",
    },
    subtitle: {
      text: "In Billion U.S. Dollars",
    },
    data: adata,
    series: [
      {
        type: "bar",
        xKey: "Salesperson",
        yKey: "Units",
        yName: "iPhone",
      },
    ],
  };

  useEffect(() => {
    pdata();
  }, []);

  return  <AgChartsReact options={option}/>
};

export default Bar;
