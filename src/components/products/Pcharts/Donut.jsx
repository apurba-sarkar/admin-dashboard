
import { AgChartsReact } from "ag-charts-react";
const Donut = ({ error, allProducts }) => {


    const quantityMap = {};

    // Iterate over the products array and sum quantities for each product
    // eslint-disable-next-line react/prop-types
    allProducts.forEach(product => {
      if (!quantityMap[product.Supplier]) {
        quantityMap[product.Supplier] = 0;
      }
      quantityMap[product.Supplier] += product.UnitsStock;
    });
    
    // Convert the quantityMap object back to an array of objects
    const summedProducts = Object.keys(quantityMap).map(name => ({
      name: name,
      quantity: quantityMap[name]
    }));
    
    console.log(summedProducts);
    
    // console.log(groupedProducts);



  const option = {
    data: summedProducts,
    series: [
      {
        type: 'pie',
        calloutLabelKey: 'name',
        angleKey: 'quantity',
        innerRadiusRatio: 0.5,
      },
     
    ],
    height: 550,
  };

  return (
    <div  style={{ fontSize: "3rem", fontWeight: "bold", marginLeft: "1.5rem" }}>
        <div> Total UnitsSales of Each Saler</div>
        <AgChartsReact options={option}/></div>
  )
}

export default Donut