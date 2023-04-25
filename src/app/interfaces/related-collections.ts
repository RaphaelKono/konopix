import { Result } from "./result";

export interface RelatedCollections {
    total: number
    type: string
    results: Result[];
}
