import React from 'react';
import './App.css';
import {calculateTotalNutrition, generateRandomList} from "./domain/service";
import {foodCollection} from "./domain/data";
import {Food, Nutrition} from "./domain/types";
import {FoodCard} from "./components/FoodCard";
import {RecommendedIntake} from "./components/RecommendedIntake";

const App = () => {

  const food: Food[] = generateRandomList(foodCollection);

  const totalNutrition: Nutrition = calculateTotalNutrition(food);


  return (
      <div className="App">
        {food.map((food, index) => (
            <FoodCard food={food} key={`${food.name}_${index}`}/>
        ))}
        <RecommendedIntake totalNutrition={totalNutrition}/>
      </div>
  );
}

export default App;
