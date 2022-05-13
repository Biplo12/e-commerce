import React from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
`;

const SliderItemsContainer = styled.div``;
const SliderNavNumber = styled.div``;
const SliderTitle = styled.div``;

const Slider = () => {
  return (
    <SliderContainer>
      <SliderItemsContainer>
        <SliderNavNumber>
          <p>01</p>
        </SliderNavNumber>
        <SliderTitle>Beige</SliderTitle>
      </SliderItemsContainer>
    </SliderContainer>
  );
};

export default Slider;
