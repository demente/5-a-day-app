import React from 'react';
import {recommendedIntake} from "../domain/data";
import {NT, Nutrition} from "../domain/types";
import {
  AmountBarBackground,
  AmountBarFilled, Name,
  RecommendedIntakeContainer,
} from "./RecommendedIntake.style";

const RecommendedIntake = (props: { totalNutrition: Nutrition }): JSX.Element => {

  const {totalNutrition} = props;

  const percentageFromRecommended: NT[] = [
    {
      value: (totalNutrition.a * 100) / recommendedIntake.a, name: 'a'
    },
    {
      name: 'c', value: (totalNutrition.c * 100) / recommendedIntake.c
    },
    {
      name: 'iron', value: (totalNutrition.iron * 100) / recommendedIntake.iron
    },
    {
      name: 'k', value: (totalNutrition.k * 100) / recommendedIntake.k
    },
    {
      name: 'fiber', value: (totalNutrition.fiber * 100) / recommendedIntake.fiber
    },
    {
      name: 'calcium', value: (totalNutrition.calcium * 100) / recommendedIntake.calcium
    },
    {
      name: 'omega3', value: (totalNutrition.omega3 * 100) / recommendedIntake.omega3
    },
    {
      name: 'omega6', value: (totalNutrition.omega6 * 100) / recommendedIntake.omega6
    },
    {
      name: 'zinc', value: (totalNutrition.zinc * 100) / recommendedIntake.zinc
    },
    {
      name: 'd', value: (totalNutrition.d * 100) / recommendedIntake.d
    },
    {
      name: 'iodine', value: (totalNutrition.iodine * 100) / recommendedIntake.iodine
    },
    {
      name: 'selenium', value: (totalNutrition.selenium * 100) / recommendedIntake.selenium
    },
  ];

  return (<RecommendedIntakeContainer>
        {percentageFromRecommended.map((item: NT) => (
            <tr>
              <td><Name>{item.name}</Name></td>
              <td><AmountBarBackground><AmountBarFilled defaultValue={item.value}>{`${Math.round(item.value)} %`}</AmountBarFilled></AmountBarBackground></td>
            </tr>
        ))}
      </RecommendedIntakeContainer>
  );
}

export {RecommendedIntake};
