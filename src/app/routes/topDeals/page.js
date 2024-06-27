// This "Client Server Rendering" because when we come this page, server sends JSON data as response and not the complete HTML CSS code because we use Hooks
// In this page, we will hooks like useEffect. So it will should be client side as per the documentation - https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns
"use client";
import { useEffect } from "react";

const TopDeals = () => {
  // API Call to fetch top deal products
  const fetchTopDealProducts = async () => {
    const fetchTopDealProducts = await fetch("https://dummyjson.com/carts");
    const topDealsProducts = await fetchTopDealProducts.json();
    console.log(topDealsProducts);
  };

  // useEffect hook
  useEffect(() => {
    fetchTopDealProducts();
  }, []);
  return <div>Top Deals</div>;
};

export default TopDeals;
