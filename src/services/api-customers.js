import supabase from "./supabase";

export async function CustomerAllData() {
  let { data: customer, error } = await supabase.from("customer").select("*");

  if (error) {
    console.error(error);
    throw new Error("cabin could not be loaded");
  }
  return customer;
}

// export async function TopFiveCustomer() {
//   let { data: topCustomer, error } = await supabase
//     .from("customer")
//     .select("*")
//     .order("Purchased", { ascending: false })
//     .limit(5);

//   if (error) {
//     console.error(error);
//     throw new Error("cabin could not be loaded");
//   }
//   return topCustomer;
// }
