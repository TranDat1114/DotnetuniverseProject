type User = {
    name: string;
    followers: number;
    blogs: number
}
type Topic = {
    name: string;
    description: string;
}
type Blog = {
    title: string;
    topic: Topic;
    content: string;
    upVote: number;
    comment: number;
    author: User;
    readTime: number;
}
