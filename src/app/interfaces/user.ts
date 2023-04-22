import { Links2 } from "./links2"
import { ProfileImage } from "./profile-image"
import { Social } from "./social"

export interface User {
    id: string
    updated_at: string
    username: string
    name: string
    first_name: string
    last_name: string
    twitter_username: any
    portfolio_url: string
    bio: string
    location: string
    links: Links2
    profile_image: ProfileImage
    instagram_username: string
    total_collections: number
    total_likes: number
    total_photos: number
    accepted_tos: boolean
    for_hire: boolean
    social: Social
  }