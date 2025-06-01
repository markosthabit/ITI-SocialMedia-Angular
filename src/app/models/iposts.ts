import { ITopics } from "./itopics";

export interface IPosts {
    postId: number,
    postTitle: string,
    postContent: string,
    postLikes: number,
    postImage?: string,
    topicId: [ITopics["topicId"]],
    likedByUser: boolean
}
