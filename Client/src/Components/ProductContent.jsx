import { useState } from "react";
import { ProductData } from "./ProductData";
const ProductContent = () => {
  const [toggle, setToggle] = useState(1);
  const [stylingOpen, setStylingOpen] = useState(true);
  const [compositionOpen, setCompositionOpen] = useState(true);
  const handleStyling = () => setStylingOpen(!stylingOpen);
  const handleComposition = () => setCompositionOpen(!compositionOpen);
  return (
    <div className="product-container">
      <div className="product-left">
        <div className="product-gallery">
          {ProductData.map(({ id, img }) => {
            return (
              <>
                <img
                  src={img}
                  key={id}
                  onClick={() => setToggle(id)}
                  alt="product gallery"
                />
              </>
            );
          })}
        </div>
        {ProductData.map(({ id, img }) => {
          return (
            <>
              {toggle === id ? (
                <>
                  <div className="product-image">
                    <img src={img} key={id} alt="main product" />
                  </div>
                </>
              ) : null}
            </>
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
          <div className="product-buttons">
            <button className="size-button">CHECK SIZE</button>
            <button className="cart-button">ADD TO CART</button>
          </div>
          <div
            className={
              stylingOpen ? "styling-section" : "styling-section active"
            }
          >
            <button className="styling-button" onClick={handleStyling}>
              + STYLING &amp; FIT
            </button>
            <p
              className={
                stylingOpen
                  ? "styling-section-paragraf"
                  : "styling-section-paragraf active"
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
                ? "composition-section"
                : "composition-section active"
            }
          >
            <button className="composition-button" onClick={handleComposition}>
              + COMPOSITION
            </button>
            <p
              className={
                compositionOpen
                  ? "composition-section-paragraf"
                  : "composition-section-paragraf active"
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
