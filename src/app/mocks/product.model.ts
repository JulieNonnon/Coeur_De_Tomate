export type Category = 'classic' | 'cocktail' | 'original';
export interface Product {
    id: number;
    title: string;
    image: string;
    small_description: string;
    long_description: string;
    price: number;
    pitch: string;
    feature1:string;
    feature2:string;
    feature3:string;
    category: Category;
  }