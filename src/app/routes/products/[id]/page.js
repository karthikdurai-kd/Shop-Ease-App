import Image from "next/image";
import Link from "next/link";

// Fetching Prouduct Detail by API Call
const fetchProductDetails = async (id) => {
  const productDetailResponse = await fetch(
    `https://dummyjson.com/products/${id}`
  );
  return productDetailResponse.json();
};

const ProductDetail = async ({ params }) => {
  const { id } = params;
  const productDetails = await fetchProductDetails(id);

  return (
    <div
      className="card mx-auto mt-4"
      style={{ textAlign: "center", width: "18rem" }}
    >
      <Image
        className="card-img-top"
        src={productDetails.images[0]}
        alt="Product Image"
        width={200}
        height={200}
      />
      <div className="card-body">
        <h5 className="card-title">{productDetails.title}</h5>
        <p className="card-text">{productDetails.description}</p>
        <Link className="btn btn-primary" href="/routes/products">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
