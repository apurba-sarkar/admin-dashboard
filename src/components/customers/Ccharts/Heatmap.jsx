import { WidthFull } from "@mui/icons-material";
import { AgChartsReact } from "ag-charts-react";
// eslint-disable-next-line react/prop-types
const Heatmap = ({ allCustomers }) => {
//   // Function to group products by city
//   function groupProductsByCity(allCustomers) {
//     const groupedProducts = {};
//     // eslint-disable-next-line react/prop-types
//     allCustomers.forEach((product) => {
//       if (!groupedProducts[product.Country]) {
//         groupedProducts[product.Country] = [];
//       }
//       groupedProducts[product.Country].push(product);
//     });
//     return groupedProducts;
//   }

//   // Group the products
//   const groupedProducts = groupProductsByCity(allCustomers);

//   // Function to transform grouped products
//   function transformGroupedProducts(groupedProducts) {
//     const transformedData = [];
//     for (const country in groupedProducts) {
//       transformedData.push({
//         Designation: country,
//         children: groupedProducts[country],
//       });
//     }
//     return transformedData;
//   }

//   // Transform the grouped products
//   const transformedData = transformGroupedProducts(groupedProducts);

function transformProducts(products) {
    const transformedData = {};
  
    products.forEach(product => {
    //   const { city, person, quantity } = product;
      const { Designation, Country, Purchased } = product;
  
      if (!transformedData[Country]) {
        transformedData[Country] = {};
      }
  
      if (!transformedData[Country][Designation]) {
        transformedData[Country][Designation] = 0;
      }
  
      transformedData[Country][Designation] += Purchased ;
    });
  
    const result = [];
    for (const country in transformedData) {
      const children = [];
      for (const person in transformedData[country]) {
        children.push({
            Designation: person,
          Purchased : transformedData[country][person],
          Country: country
        });
      }
      result.push({
        Designation: country,
        children: children
      });
    }
  
    return result;
  }
  
  // Transform the products
  const transformedData = transformProducts(allCustomers);
  
  // Output the transformed data
  console.log(transformedData);
  // Output the transformed data
//   console.log(transformedData);
  const option = {
    data: transformedData,
    series: [
      {
        type: "treemap",
        labelKey: "Designation",
        secondaryLabelKey: "Purchased",
        sizeKey: "Designation",
        sizeName: "Designation",
        // stacked:"true"
      },
    ],

    height: 500,
    // Width:800,
    overlays: {
      noData: {
        renderer: () => "<h2> data is loading..</h2>",
      },
    },
  };
  return (
    <div style={{ fontSize: "3rem", fontWeight: "bold", marginLeft: "1.5rem" }}>
      <div> Purchased based on Every Profession each Country</div>
      <AgChartsReact options={option} />
    </div>
  );
};

export default Heatmap;
