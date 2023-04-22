import { Photo } from "./photo"

export interface PhotosResponseBody {
    total: number;
    total_pages: number;
    results: Photo[];
}
