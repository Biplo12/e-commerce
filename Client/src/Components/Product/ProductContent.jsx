import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import { ProductData } from "./ProductData";
import SingleProduct from "./SingleProduct";
import homeProductExample from "../../Images/Product/example-1.png";
const ProductContent = () => {
  const [toggle, setToggle] = useState(1);
  const [stylingOpen, setStylingOpen] = useState(true);
  const [compositionOpen, setCompositionOpen] = useState(true);
  const [productData, setProductData] = useState({});
  const [filters, setFilter] = useState({});

  const handleFilters = (event) => {
    const value = event.target.value;
    setFilter({
      ...filters,
      [event.target.name]: value,
    });
  };

  const productId = useLocation().pathname.split("/")[2];

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${productId}`);
        setProductData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [productId]);

  const imageArray = productData.image;

  const handleStyling = () => setStylingOpen(!stylingOpen);
  const handleComposition = () => setCompositionOpen(!compositionOpen);

  return (
    <div className="product-container">
      {/* {ProductData.map(({ id, imageArray }) => {
            return (
              <img
                src={imageArray}
                key={id}
                onClick={() => setToggle(id)}
                alt="product gallery"
              />
            );
          })}
        </div>
        {ProductData.map(({ id, src }) => {
          return (
            <React.Fragment key={id}>
              {toggle === id ? (
                <>
                  <div className="product-main-image">
                    <img src={src} alt="main product" />
                  </div>
                </>
              ) : null}
            </React.Fragment>
          );
        })} */}
      <div className="product-left">
        <div className="product-small-gallery">
          <SingleProduct image={imageArray} />
        </div>
        <div className="product-right">
          <div className="product-content">
            <h4>BOWLING SHIRT BLACK</h4>
            <h5>$355</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni
              voluptatem reiciendis ipsa reprehenderit alias facilis
              voluptatibus recusandae, pariatur unde, debitis sint corrupti
              repellat ea adipisci iste impedit. Totam, reiciendis.
            </p>
            <div className="product-sizes">
              <select name="sizes">
                <option value="">Select Size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <button className="cart-button">ADD TO CART</button>
            <div
              className={
                stylingOpen ? "product-styling" : "product-styling active"
              }
            >
              <button
                className="product-styling-button"
                onClick={handleStyling}
              >
                + <span className="un">STYLING &amp; FIT</span>
              </button>
              <p
                className={
                  stylingOpen
                    ? "product-styling-paragraf"
                    : "product-styling-paragraf active"
                }
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti assumenda architecto maxime minus repellendus button
                ullam explicabo perferendis voluptatem! Quisquam assumenda
                ratione, delectus facilis in voluptatem neque aliquid animi
                laborum!
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis debitis necessitatibus placeat illo nostrum, eum quos
                consectetur eius veritatis quis vero fugit consequuntur
                molestiae consequatur, ea provident temporibus repudiandae
                ullam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
