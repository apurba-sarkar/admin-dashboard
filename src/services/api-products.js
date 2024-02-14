import supabase from "./supabase";

export async function getProductAllData() {
  let { data: productAll, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error);
    throw new Error("product could not be loaded");
  }
  return productAll;
}
