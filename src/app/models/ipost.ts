import { ITopic } from "./itopic";

export interface IPost {
    postId: number,
    postTitle: string,
    postContent: string,
    postLikes: number,
    postImage?: string,
    postTimestamp: string,
    topicId: [ITopic["topicId"]],
    likedByUser: boolean
}
