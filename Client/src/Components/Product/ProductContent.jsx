import React from "react";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import { addToCart } from "../../Redux/cartReducer";
const ProductContent = () => {
  //Image change on click
  const [toggle, setToggle] = useState(0);

  //Styling and composition divs appears on click
  const [stylingOpen, setStylingOpen] = useState(true);
  const [compositionOpen, setCompositionOpen] = useState(true);
  const handleStyling = () => setStylingOpen(!stylingOpen);
  const handleComposition = () => setCompositionOpen(!compositionOpen);

  const [quantity, setQuantity] = useState(1);

  //Product ID
  const productId = useLocation().pathname.split("/")[2];

  //Fetching data from DB
  const [product, setProduct] = useState([]);
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
  //Color and size select states
  //Dispatching to redux
  const dispatch = useDispatch();
  const handleClick = () => {
    quantity > 0 && setQuantity(1);
    dispatch(addToCart({ ...product, quantity, color, size }));
  };
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
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
              <select name="sizes" onChange={(e) => setSize(e.target.value)}>
                <option value="size">Size</option>
                {product.size?.map((s) => {
                  return (
                    <option value={s} key={s}>
                      {s}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="product-colors">
              <select
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="colorSelect"
              >
                <option value="color">Color</option>

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
          <button
            className="cart-button"
            disabled={size === "" || color === "" ? true : false}
            onClick={handleClick}
          >
            ADD TO CART
          </button>
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
