import { useEffect, useState } from "react";
import { getTopFiveCustomer } from "../../services/api-customers";
import CustomerBox from "../helper/CustomerBox";

const TopCustomer = () => {
  // const [cusAlldata, setCusAlldata] = useState();
  const [topPurchased, setTopPurchased] = useState([]);
  const processData = async () => {
    try {
      const res = await getTopFiveCustomer();
      //   const data = await res.json();
      //   console.log(res)
      setTopPurchased(res);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(topPurchased);

  useEffect(() => {
    processData();
  }, []);

  return (
    <div>
      {topPurchased.map((data) => {
        return (
          <div key={data.ID}>
            <CustomerBox data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default TopCustomer;
