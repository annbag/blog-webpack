import { Comments } from "./comments.interface";

export interface Post {
    id: number;
    date: number;
    body: string;
    comments: Comments;
}
