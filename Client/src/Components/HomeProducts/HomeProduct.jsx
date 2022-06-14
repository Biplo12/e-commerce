import { Link } from "react-router-dom";
import homeProductExample from "../../Images/Product/example-3.png";
const HomeProduct = ({ item }) => {
  return (
    <div className="home-product">
      <Link to={`/product/${item._id}`}>
        <div className="home-product-image">
          <img src={item.src ? item.src : homeProductExample} alt="product" />
        </div>
      </Link>
    </div>
  );
};

export default HomeProduct;
