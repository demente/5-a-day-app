import {Food, FoodType, Nutrition} from "./types";

const generateRandomList = (foodList: Food[]): Food[] => {
  const randomizedList: Food[] = [];

  while (randomizedList.length < 5) {
    const randomElement = foodList[Math.floor(Math.random() * foodList.length)];

    if (!randomizedList.includes(randomElement)) {
      if (randomElement.type === FoodType.BEAN && containsBeans(randomizedList)) {
        continue;
      }
      randomizedList.push(randomElement)
    }
  }

  return randomizedList;
}

const containsBeans = (foodList: Food[]) => {
  return foodList.map(food => food.type).includes(FoodType.BEAN);
}

const calculateTotalNutrition = (food: Food[]) : Nutrition => {
  return {
    a: food.map(f => f.nutritionInPortion.a).reduce((sum, current) => sum + current, 0),
    c: food.map(f => f.nutritionInPortion.c).reduce((sum, current) => sum + current, 0),
    iron: food.map(f => f.nutritionInPortion.iron).reduce((sum, current) => sum + current, 0),
    k: food.map(f => f.nutritionInPortion.k).reduce((sum, current) => sum + current, 0),
    fiber: food.map(f => f.nutritionInPortion.fiber).reduce((sum, current) => sum + current, 0),
    calcium: food.map(f => f.nutritionInPortion.calcium).reduce((sum, current) => sum + current, 0),
    omega3: food.map(f => f.nutritionInPortion.omega3).reduce((sum, current) => sum + current, 0),
    omega6: food.map(f => f.nutritionInPortion.omega6).reduce((sum, current) => sum + current, 0),
    zinc: food.map(f => f.nutritionInPortion.zinc).reduce((sum, current) => sum + current, 0),
    d: food.map(f => f.nutritionInPortion.d).reduce((sum, current) => sum + current, 0),
    iodine: food.map(f => f.nutritionInPortion.iodine).reduce((sum, current) => sum + current, 0),
    selenium: food.map(f => f.nutritionInPortion.selenium).reduce((sum, current) => sum + current, 0),
  };
}

export {generateRandomList, calculateTotalNutrition};
