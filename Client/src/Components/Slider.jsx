import React from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      <SliderItemsContainer>
        <SliderNavNumber>
          <p>02</p>
        </SliderNavNumber>
        <SliderTitle>Beige</SliderTitle>
      </SliderItemsContainer>
      <SliderItemsContainer>
        <SliderNavNumber>
          <p>03</p>
        </SliderNavNumber>
        <SliderTitle>Beige</SliderTitle>
      </SliderItemsContainer>
      <SliderItemsContainer>
        <SliderNavNumber>
          <p>04</p>
        </SliderNavNumber>
        <SliderTitle>Beige</SliderTitle>
      </SliderItemsContainer>
    </SliderContainer>
  );
};

export default Slider;
