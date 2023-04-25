import { Links3 } from "./links3"
import { TopicSubmissions2 } from "./topic-submissions2"
import { Urls2 } from "./urls2"
import { User } from "./user"

export interface CoverPhoto {
    id: string
    created_at: string
    updated_at: string
    promoted_at: string
    width: number
    height: number
    color: string
    blur_hash: string
    description?: string
    alt_description: string
    urls: Urls2;
    links: Links3;
    likes: number
    liked_by_user: boolean
    current_user_collections: any[]
    sponsorship: any
    topic_submissions: TopicSubmissions2;
    premium: boolean
    plus: boolean
    user: User
}
