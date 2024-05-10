'use client'
import { ProductCard } from "@/components/common/productCard/ProductCard.component";
import { ProductsInterface, addItem } from "@/lib/features/order/orderSlice";
import { AppDispatch } from "@/lib/store";
import { products } from "@/utils/products";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  function addOrder(product: ProductsInterface){
    // console.log("product is >> ", product)
    dispatch(addItem(product))
  }
  const images = useSelector((state: any) => state.order.products);
  console.log("products >> ", images)

  return (
    <main>
      <section className="flex flex-wrap items-center justify-between">
        {
          products.map((item, index) => (
            <ProductCard key={index} product={item} func={addOrder}/>
          ))
        }
      </section>
    </main>
  );
}
