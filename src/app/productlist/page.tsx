"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import demoImage from "../favicon.ico";
import { Roboto } from "next/font/google";

const roboto: any = Roboto({
  weight: "100",
  subsets: ["latin"],
});

const productsList = () => {
  console.log(demoImage);
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProductData(res.products);
        console.log(res.products);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {productData.map((item: any, key: number) => (
        <div key={key}>
          <p>Title: {item.title}</p>
          <Image alt="image" src={item.thumbnail} height={100} width={100} />
        </div>
      ))}
    </div>
  );
};

export default productsList;
