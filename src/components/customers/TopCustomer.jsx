// import { useEffect, useState } from "react";
// import { getTopFiveCustomer } from "../../services/api-customers";
// import CustomerBox from "../helper/CustomerBox";

// const TopCustomer = () => {
//   // const [cusAlldata, setCusAlldata] = useState();
//   const [topPurchased, setTopPurchased] = useState([]);
//   const processData = async () => {
//     try {
//       const res = await getTopFiveCustomer();
//       //   const data = await res.json();
//       //   console.log(res)
//       setTopPurchased(res);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   console.log(topPurchased);

//   useEffect(() => {
//     processData();
//   }, []);

//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",

//         }}
//       >
//         <div style={{display:"flex",justifyContent:"center",marginBottom:"2rem"}}>
//           <div style={{fontSize:"2rem",fontWeight:"bold",color:"white"}}> Top 5 Customer in Spends</div>
//         </div>
//         <div>
//           {topPurchased.map((data) => {
//             return (
//               <div
//                 key={data.ID}
//                 style={{ display: "flex", justifyContent: "start" ,marginBottom:"1rem"}}
//                 // style={{display:"flex"}}
//               >
//                 <CustomerBox data={data} />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopCustomer;
