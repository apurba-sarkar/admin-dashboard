import supabase from "./supabase";

export async function getSalesData() {
  let { data: sales, error } = await supabase.from("sales").select("*");

  if (error) {
    console.error(error);
    throw new Error("sales could not be loaded");
  }
  return sales;
}