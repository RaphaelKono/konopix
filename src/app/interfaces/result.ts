import { CoverPhoto } from "./cover-photo"
import { Links2 } from "./links2"
import { PreviewPhoto } from "./preview-photo"
import { Tag } from "./tag"
import { User } from "./user"

export interface Result {
    id: string
    title: string
    description: any
    published_at: string
    last_collected_at: string
    updated_at: string
    curated: boolean
    featured: boolean
    total_photos: number
    private: boolean
    share_key: string
    tags: Tag[]
    links: Links2;
    user: User;
    cover_photo: CoverPhoto;
    preview_photos: PreviewPhoto[];
}
