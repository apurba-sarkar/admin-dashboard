import supabase from "./supabase";

export async function getCutomerAllData() {
  let { data: customerAll, error } = await supabase
    .from("customer")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("cabin could not be loaded");
  }
  return customerAll;
}

export async function getTopFiveCustomer() {
  let { data: topCustomer, error } = await supabase
    .from("customer")
    .select("*")
    .order("Purchased", { ascending: false })
    .limit(5);

  if (error) {
    console.error(error);
    throw new Error("cabin could not be loaded");
  }
  return topCustomer;
}
