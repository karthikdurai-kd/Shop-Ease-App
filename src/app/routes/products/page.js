/* eslint-disable react/jsx-key */
import React from "react";
import Card from "../../components/Card";
import styles from "./products.module.css";

// Fetching Products from dummy API
const fetchData = async () => {
  const response = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 10 },
  }); // Here whenever we do API call, the response data will be cached in the server for 10 seconds. If we send same api call again within 10 seconds, cached data will be used. After 10 seconds if we do same api call then api call will be made again to fetch latest data. This process will be continued. Refer - https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
  const jsonResponse = await response.json();
  return jsonResponse.products;
};

const Blog = async () => {
  const productsData = await fetchData();
  console.log(productsData);
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="row">
        {productsData.map((product) => {
          return (
            <div key={product.id} className="col-lg-3 col-md-6 col-sm-12 mt-4">
              <Card
                id={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                thumbnail={product.thumbnail}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
