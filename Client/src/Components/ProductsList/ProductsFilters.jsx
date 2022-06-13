import { useState } from "react";
import { useLocation } from "react-router-dom";
const ProductsContent = () => {
  const [sortOpen, setSortOpen] = useState(false);
  const handleSort = () => setSortOpen(!sortOpen);
  const [sizeOpen, setSizeOpen] = useState(false);
  const handleSize = () => setSizeOpen(!sizeOpen);
  const [colorOpen, setColorOpen] = useState(false);
  const handleColor = () => setColorOpen(!colorOpen);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const handleCategory = () => setCategoryOpen(!categoryOpen);
  const [filtersOpen, setFiltersOpen] = useState(true);
  const handleFilters = () => setFiltersOpen(!filtersOpen);

  let categoryLocation =
    useLocation().pathname.slice(1).charAt(0).toUpperCase() +
    useLocation().pathname.slice(1).slice(1);
  categoryLocation = categoryLocation.includes("-")
    ? (categoryLocation = categoryLocation.replace("-", " "))
    : categoryLocation;
  return (
    <>
      <div className="products-filters-container">
        <div className="products-label">
          <h1>{categoryLocation}</h1>
          <div className="filter-icon" onClick={handleFilters}>
            <img
              src={
                filtersOpen
                  ? "./Assets/ProductList/filter.png"
                  : "./Assets/ProductList/close.svg"
              }
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
            className={
              sortOpen ? "product-filter-enabled first" : "product-filter first"
            }
          >
            <div className="product-options-container">
              <select name="High price" defaultValue="Select">
                <option value="Select" disabled>
                  Please Select One
                </option>
                <option value="High price">High price</option>
                <option value="Low price">Low price</option>
                <option value="Best sales">Best sales</option>
                <option value="Most populars">Most populars</option>
              </select>
            </div>
          </div>
          <h4 onClick={handleSize}>Size</h4>
          <div
            className={sizeOpen ? "product-filter-enabled" : "product-filter"}
          >
            <div className="product-options-container">
              <input type="checkbox" />
              <p>40</p>
            </div>
            <div className="product-options-container">
              <input type="checkbox" />
              <p>39</p>
            </div>
            <div className="product-options-container">
              <input type="checkbox" />
              <p>38</p>
            </div>
            <div className="product-options-container">
              <input type="checkbox" />
              <p>38.5</p>
            </div>
            <div className="product-options-container">
              <input type="checkbox" />
              <p>37</p>
            </div>
            <div className="product-options-container">
              <input type="checkbox" />
              <p>36</p>
            </div>
          </div>
          <h4 onClick={handleColor}>Color</h4>
          <div
            className={colorOpen ? "product-filter-enabled" : "product-filter"}
          >
            <div className="product-options-container">
              <input type="checkbox" />
              <p>Black</p>
            </div>
            <div className="product-options-container">
              <input type="checkbox" />
              <p>White</p>
            </div>
            <div className="product-options-container">
              <input type="checkbox" />
              <p>Red</p>
            </div>
            <div className="product-options-container">
              <input type="checkbox" />
              <p>Green</p>
            </div>
            <div className="product-options-container">
              <input type="checkbox" />
              <p>Blue</p>
            </div>
          </div>
          <h4 onClick={handleCategory}>Category</h4>
          <div
            className={
              categoryOpen ? "product-filter-enabled" : "product-filter"
            }
          >
            <div className="product-options-container">
              <input type="checkbox" />
              <p>T-shirt</p>
            </div>
            <div className="product-options-container">
              <input type="checkbox" />
              <p>Hoodie</p>
            </div>
            <div className="product-options-container">
              <input type="checkbox" />
              <p>Shorts</p>
            </div>
            <div className="product-options-container">
              <input type="checkbox" />
              <p>Boots</p>
            </div>
            <div className="product-options-container">
              <input type="checkbox" />
              <p>Others</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsContent;
