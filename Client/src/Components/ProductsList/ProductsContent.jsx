import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Products from "./Products";
import filterIcon from "../../Images/ProductList/filter.png";
import closeIcon from "../../Images/ProductList/close.svg";
import { herokuRequest } from "../../requestMethods";

const ProductsContent = () => {
  const [sortOpen, setSortOpen] = useState(false);
  const handleSort = () => setSortOpen(!sortOpen);
  const [sizeOpen, setSizeOpen] = useState(false);
  const handleSize = () => setSizeOpen(!sizeOpen);
  const [colorOpen, setColorOpen] = useState(false);
  const handleColor = () => setColorOpen(!colorOpen);
  const [filtersOpen, setFiltersOpen] = useState(true);
  const handleFiltersMenu = () => setFiltersOpen(!filtersOpen);

  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredProducts] = useState([]);

  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState("");

  //Category from URL
  const category = useLocation().pathname.split("/")[2];

  //Setting filters on change of select
  const handleFilters = (event) => {
    const value = event.target.value;
    setFilter({
      ...filters,
      [event.target.name]: value,
    });
  };
  let categoryLocation =
    useLocation().pathname.split("/")[2].charAt(0).toUpperCase() +
    useLocation().pathname.split("/")[2].slice(1);
  categoryLocation = categoryLocation.includes("-")
    ? (categoryLocation = categoryLocation.replace("-", " "))
    : categoryLocation;
  //Fetching data from DB
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await herokuRequest.get(
          category ? `/products?category=${category}` : "/products/"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  //Filters
  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  //Sort
  useEffect(() => {
    // if (sort === "newest") {
    //   setFilteredProducts((prev) =>
    //     [...prev].sort((a, b) => a.createdAt - b.createdAt)
    //   );
    // }
    if (sort === "high-price") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    }
  }, [sort]);

  return (
    <>
      <div className="products-filters-container">
        <div className="products-label">
          <h1>{categoryLocation}</h1>
          <div className="filter-icon" onClick={handleFiltersMenu}>
            <img
              src={filtersOpen ? filterIcon : closeIcon}
              alt="filter icon"
              height="22px"
            />
          </div>
        </div>
        <div
          className={filtersOpen ? "products-filters" : "products-filters open"}
        >
          <h4 onClick={handleSort}>Sort By</h4>
          <div
            className={sortOpen ? "product-filter-enabled" : "product-filter"}
          >
            <div className="product-options-container">
              <select onChange={(e) => setSort(e.target.value)}>
                {/* <option value="newest">Newest</option> */}
                <option value="low-price">Low price</option>
                <option value="high-price">High price</option>
              </select>
            </div>
          </div>
          <h4 onClick={handleSize}>Size</h4>
          <div
            className={sizeOpen ? "product-filter-enabled" : "product-filter"}
          >
            <div className="product-options-container">
              <select
                name="size"
                defaultValue="Select"
                onChange={handleFilters}
              >
                <option value="Select" disabled>
                  Please Select One
                </option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>
          </div>
          <h4 onClick={handleColor}>Color</h4>
          <div
            className={colorOpen ? "product-filter-enabled" : "product-filter"}
          >
            <div className="product-options-container">
              <select
                name="color"
                defaultValue="Select"
                onChange={handleFilters}
              >
                <option value="Select" disabled>
                  Please Select One
                </option>
                <option>Black</option>
                <option>White</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Yellow</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="products-content-container">
        {filteredproducts.map((item) => (
          <Products item={item} key={item._id} />
        ))}
      </div>
    </>
  );
};

export default ProductsContent;
