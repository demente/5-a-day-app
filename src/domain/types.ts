enum FoodType {
  FRUIT,
  VEGETABLE,
  BEAN
}

interface Nutrition {
  a: number;
  c: number;
  iron: number;
  k: number;
  fiber: number;
  calcium: number;
  omega3: number;
  omega6: number;
  zinc: number;
  d: number;
  iodine: number;
  selenium: number;
}

interface Food {
  name: string;
  description: string;
  type: FoodType;
  gramsInPortion: number;
  nutritionInPortion: Nutrition;
}

interface NT {
  value: number;
  name: string
};


export type {Food, Nutrition, NT};

export {FoodType};
