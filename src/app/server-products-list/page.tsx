import ProductPrice from "./productPrice";

const productData = async () => {
  const data = await fetch("https://dummyjson.com/product")
    .then((res) => res.json())
    .then((res) => res.products);
  return data;
};

const serverProductsList = async () => {
  const product = await productData();
  console.log(product);
  return (
    <div>
      {product.map((item: any, key: number) => (
        <div key={key}>
          <p>{item.title}</p>
          <ProductPrice price={item.price} />
        </div>
      ))}
    </div>
  );
};

export default serverProductsList;
