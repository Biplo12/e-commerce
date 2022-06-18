import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
const ProductContent = () => {
  const [toggle, setToggle] = useState(0);
  const [stylingOpen, setStylingOpen] = useState(true);
  const [compositionOpen, setCompositionOpen] = useState(true);
  const [filter, setFilter] = useState({});

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const handleFilters = (event) => {
      const value = event.target.value;
      setFilter({
        ...filter,
        [event.target.name]: value,
      });
    };
  }, [filter]);
  console.log(filter);
  const productId = useLocation().pathname.split("/")[2];

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${productId}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [productId]);
  const handleStyling = () => setStylingOpen(!stylingOpen);
  const handleComposition = () => setCompositionOpen(!compositionOpen);
  return (
    <div className="product-container">
      <div className="product-left">
        <div className="product-small-gallery">
          {product.image?.map((i, id) => {
            return (
              <img
                src={`/Assets/Product/${i}.png`}
                alt="main product"
                onClick={() => setToggle(id)}
                key={id}
              />
            );
          })}
        </div>
        <div className="product-main-image">
          {product.image?.map((i, id) => {
            return toggle === id ? (
              <img
                src={`/Assets/Product/${i}.png`}
                alt="main product"
                key={id}
              />
            ) : null;
          })}
        </div>
      </div>
      <div className="product-right">
        <div className="product-content">
          <h4>{product.title}</h4>
          <h5>${product.price}</h5>
          <p>{product.description}</p>
          <div className="product-selects">
            <div className="product-sizes">
              <select name="sizes" onChange={(e) => setFilter(e.target.value)}>
                {product.size?.map((s) => {
                  return (
                    <option value={s} key={s}>
                      {s}
                    </option>
                  );
                })}
              </select>
            </div>
            <div
              className="product-colors"
              onChange={(e) => setFilter(e.target.value)}
            >
              <select name="color">
                {product.color?.map((c) => {
                  return (
                    <option value={c} key={c}>
                      {c}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <button className="cart-button">ADD TO CART</button>
          <div
            className={
              stylingOpen ? "product-styling" : "product-styling active"
            }
          >
            <button className="product-styling-button" onClick={handleStyling}>
              + <span className="un">STYLING &amp; FIT</span>
            </button>
            <p
              className={
                stylingOpen
                  ? "product-styling-paragraf"
                  : "product-styling-paragraf active"
              }
            >
              {product.stylingDesc}
            </p>
          </div>
          <div
            className={
              compositionOpen
                ? "product-composition"
                : "product-composition active"
            }
          >
            <button
              className="product-composition-button"
              onClick={handleComposition}
            >
              + <span className="un">COMPOSITION</span>
            </button>
            <p
              className={
                compositionOpen
                  ? "product-composition-paragraf"
                  : "product-composition-paragraf active"
              }
            >
              {product.compositionDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
