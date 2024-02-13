import supabase from "./supabase";

export async function getSalesData() {
  let { data: sales, error } = await supabase.from("sales").select("*");

  if (error) {
    console.error(error);
    throw new Error("cabin could not be loaded");
  }
  return sales;
}
export async function getProductData() {
  let { data: products, error } = await supabase.from("products").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabin could not be loaded");
  }
  return products;
}

export async function getCustomerData() {
  let { data: customer, error } = await supabase.from("customer").select("*");

  if (error) {
    console.error(error);
    throw new Error("cabin could not be loaded");
  }
  return customer;
}
export async function getVanillaData() {
  let { data: vanilla, error } = await supabase
    .from("sales")
    .select("*")
    // Filters
    .eq("Product", "Vanilla");

  if (error) {
    console.error(error);
    throw new Error("cabin could not be loaded");
  }
  return vanilla;
}
export async function getStrawberryData() {
  let { data: Strawberry, error } = await supabase
    .from("sales")
    .select("*")
    // Filters
    .eq("Product", "Strawberry");

  if (error) {
    console.error(error);
    throw new Error("cabin could not be loaded");
  }
  return Strawberry;
}
