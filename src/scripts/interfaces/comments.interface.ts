import { Comment } from './comment.interface';

//sposoby zapisu listy róznych elementów
export interface Comments extends Array<Comment> {
}

export interface Comments2 {
    [key: number]: Comment
}

export type Comments3 = Array<Comment>;
