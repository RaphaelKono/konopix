import { Ancestry } from "./ancestry"
import { CoverPhoto } from "./cover-photo"

export interface Source {
    ancestry: Ancestry;
    title: string;
    subtitle: string;
    description: string;
    meta_title: string;
    meta_description: string;
    cover_photo: CoverPhoto;
  }
