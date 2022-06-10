import { useState } from "react";
import { ProductData } from "./ProductData";
import SizeButton from "./SizeButton";
const ProductContent = (LinkTo, LinkName) => {
  const [toggle, setToggle] = useState(1);
  const [stylingOpen, setStylingOpen] = useState(true);
  const [compositionOpen, setCompositionOpen] = useState(true);
  const handleStyling = () => setStylingOpen(!stylingOpen);
  const handleComposition = () => setCompositionOpen(!compositionOpen);
  return (
    <div className="product-container">
      <div className="product-left">
        <div className="product-small-gallery">
          {ProductData.map(({ id, img }) => {
            return (
              <img
                src={img}
                key={id}
                onClick={() => setToggle(id)}
                alt="product gallery"
              />
            );
          })}
        </div>
        {ProductData.map(({ id, img }) => {
          return (
            <div key={id}>
              {toggle === id ? (
                <>
                  <div className="product-main-image">
                    <img src={img} alt="main product" />
                  </div>
                </>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="product-right">
        <div className="product-content">
          <h4>BOWLING SHIRT BLACK</h4>
          <h5>$355</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni
            voluptatem reiciendis ipsa reprehenderit alias facilis voluptatibus
            recusandae, pariatur unde, debitis sint corrupti repellat ea
            adipisci iste impedit. Totam, reiciendis.
          </p>
          <div className="product-sizes">
            <SizeButton size={"S"} />
            <SizeButton size={"M"} />
            <SizeButton size={"L"} />
            <SizeButton size={"XL"} />
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              assumenda architecto maxime minus repellendus button ullam
              explicabo perferendis voluptatem! Quisquam assumenda ratione,
              delectus facilis in voluptatem neque aliquid animi laborum!
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              debitis necessitatibus placeat illo nostrum, eum quos consectetur
              eius veritatis quis vero fugit consequuntur molestiae consequatur,
              ea provident temporibus repudiandae ullam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
