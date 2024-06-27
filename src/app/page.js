/* eslint-disable react/no-unescaped-entities */
"use client";

import styles from "./page.module.css";
import Image from "next/image";
import welcomeImage from "./images/Shopping_Image.jpeg";
import { useRouter } from "next/navigation";

const handleReadMoreButtonEvent = (routerObj) => {
  routerObj.push("/routes/about"); // Navigating to about page
};

const handleContactButtonEvent = (routerObj) => {
  routerObj.push("/routes/contact"); // Navigating to contact page
};

const Page = () => {
  const router = useRouter(); // Using Router for naving to different pages when an event occured. In general we can use "Link" element from NextJS for navigating but we will use "useRouter" if we need to implement dynamic routing
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>ShopEase</h1>
            <p className={styles.textJustify}>
              Welcome to ShopEase, your ultimate destination for all things
              shopping! At ShopEase, we believe in making your online shopping
              experience as smooth and enjoyable as possible. Whether you're
              searching for the latest fashion trends, top-of-the-line
              electronics, home essentials, or unique gifts, ShopEase has it
              all. Our extensive range of products, coupled with unbeatable
              prices and exceptional customer service, ensures that you find
              exactly what you need, whenever you need it.
            </p>
            <button
              className="btn btn-warning mx-1"
              onClick={() => {
                handleReadMoreButtonEvent(router);
              }}
            >
              Read more
            </button>
            <button
              className="btn btn-outline-primary mx-1"
              onClick={() => {
                handleContactButtonEvent(router);
              }}
            >
              Contact
            </button>
          </div>
          <div className="col-lg-6">
            <Image
              src={welcomeImage}
              alt="Welcome Pic"
              width={478}
              height={400}
              className="ms-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
