import { useEffect, useState } from "react";
import { getCutomerAllData } from "../../services/api-customers";

const CustomerAllData = () => {
  const [cusAlldata, setCusAlldata] = useState();
  const [totalPurchased, setTotalPurchased] = useState(0);
  const processData = async () => {
    try {
      const res = await getCutomerAllData();
      //   const data = await res.json();
      //   console.log(res)
      setCusAlldata(res);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(cusAlldata);

  useEffect(() => {
    processData();
  }, []);

  useEffect(() => {
    if (cusAlldata && cusAlldata.length > 0) {
      const total = cusAlldata.reduce((acc, curr) => {
        return acc + curr.Purchased;
      }, 0);
      setTotalPurchased(total);
    } else {
      setTotalPurchased(0);
    }
  }, [cusAlldata]);
  console.log(totalPurchased);

  const currencyValue = totalPurchased.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  console.log(currencyValue);

  return (
    <div>
      <div>Total Puchased by All Cutomer</div>
      <div>{currencyValue}</div>
    </div>
  );
};

export default CustomerAllData;