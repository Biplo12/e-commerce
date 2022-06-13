import { Link } from "react-router-dom";
const HomeProduct = ({ item }) => {
  return (
    <div className="home-product">
      <Link to={`/product/${item._id}`}>
        <div className="home-product-image">
          <img
            src={item.src ? item.src : "./Assets/Product/example-2.png"}
            alt="product"
          />
        </div>
      </Link>
    </div>
  );
};

export default HomeProduct;
