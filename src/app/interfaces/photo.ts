import { Links } from "./links"
import { Tag } from "./tag"
import { TopicSubmissions } from "./topic-submissions"
import { Urls } from "./urls"
import { User } from "./user"

export interface Photo {
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
        tags: Tag[]
      }
