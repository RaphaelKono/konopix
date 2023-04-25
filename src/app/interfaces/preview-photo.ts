import { Urls } from "./urls";

export interface PreviewPhoto {
    id: string
    created_at: string
    updated_at: string
    blur_hash: string
    urls: Urls;
}
