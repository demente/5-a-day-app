import React from 'react';
import {Food} from "../domain/types";
import {Description, StyledCard, ImageContainer, ImageSkew} from "./FoodCard.style";

const FoodCard = (props: { food: Food }): JSX.Element => {
  const {food} = props;
  return (
      <StyledCard>
        <ImageContainer>
            <ImageSkew><img src={`/${food.name}.png`} alt={food.name}/></ImageSkew>
        </ImageContainer>
        <Description>
          <h3>{food.description}</h3>
        </Description>

      </StyledCard>
  );
}

export {FoodCard};

