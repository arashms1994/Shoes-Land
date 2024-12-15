import { Product } from "../types/type";
import Api from "./Base";

export async function getProduct(params?: { id: number }) {
  return (
    await Api.get<Product[]>("/products", {
      params,
    })
  ).data;
}

export async function getProductsById(id: number) {
  const res = await Api.get<Product>("/products" + id);
  return res.data;
}
