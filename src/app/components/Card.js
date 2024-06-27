import Image from "next/image";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
const Card = ({ id, title, price, category, thumbnail }) => {
  return (
    <div className="card h-100" style={{ width: "18rem" }}>
      <Image
        height={150}
        width={200}
        src={thumbnail}
        className="card-image img-fluid mx-auto"
        alt="cardImage"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-title">{price}</p>
        <p className="card-title">{category}</p>
        <Link className="btn btn-primary" href={`/routes/products/${id}`}>
          Detail
        </Link>
      </div>
    </div>
  );
};

export default Card;
