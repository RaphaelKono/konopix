import { Experimental } from "./experimental";
import { Nature } from "./nature";
import { Wallpapers } from "./wallpapers";

export interface TopicSubmissions2 {
    wallpapers: Wallpapers;
    nature?: Nature;
    experimental?: Experimental;
}
