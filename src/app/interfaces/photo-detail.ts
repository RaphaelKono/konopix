import { Exif } from "./exif"
import { Links } from "./links"
import { Meta } from "./meta"
import { RelatedCollections } from "./related-collections"
import { Tag } from "./tag"
import { TagsPreview } from "./tags-preview"
import { Topic } from "./topic"
import { TopicSubmissions } from "./topic-submissions"
import { Urls } from "./urls"
import { User } from "./user"

export interface PhotoDetail {

    id: string
    created_at: string
    updated_at: string
    promoted_at: string
    width: number
    height: number
    color: string
    blur_hash: string
    description: string
    alt_description: string
    urls: Urls
    links: Links
    likes: number
    liked_by_user: boolean
    current_user_collections: any[]
    sponsorship: any
    topic_submissions: TopicSubmissions
    user: User
    exif: Exif
    location: Location
    meta: Meta
    public_domain: boolean
    tags: Tag[]
    tags_preview: TagsPreview[];
    views: number
    downloads: number
    topics: Topic[];
    related_collections: RelatedCollections;

}
