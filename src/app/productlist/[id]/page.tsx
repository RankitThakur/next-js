"use client";
import { useEffect, useState } from "react";

const ProductsList = (props: any) => {
  const [productData, setProductData] = useState([]);
  console.log(props.params.id);
  useEffect(() => {
    fetch(`http://localhost:3000/api/users/${props.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProductData(res);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {productData.map((item: any, key: number) => (
        <div key={key}>
          <p>name: {item.data.name}</p>
          <p>Email: {item.data.mobile_number}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
