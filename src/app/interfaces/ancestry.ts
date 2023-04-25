import { Category } from "./category";
import { Subcategory } from "./subcategory";
import { Type } from "./type";

export interface Ancestry {
    type: Type;
    category: Category;
    subcategory: Subcategory;
}
