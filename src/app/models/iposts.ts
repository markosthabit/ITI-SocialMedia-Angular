export interface IPosts {
    postId: number,
    postTitle: string,
    postContent: string,
    postLikes: number,
    postImage?: string,
    topicId: [number],
    likedByUser: boolean
}
