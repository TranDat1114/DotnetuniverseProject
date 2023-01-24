type User = {
    id: string;
    name: string;
    img: string;
    followers: number;
    blogs: number
}
type Topic = {
    id: string;
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

var tranphudat: User = {
    id: 'tranphudat',
    img: 'https://i.ibb.co/NW7CCfv/avatar.jpg',
    name: 'Trần Phú Đạt',
    blogs: 20,
    followers: 98,
}

const topics: Topic[] = [{
    id: "phattrienbanthan",
    name: "Phát triển bản thân",
    description: "Những bài viết giúp bạn có thêm nhiều vốn sống",
}, {
    id: "bannang",
    name: "Phát triển bản thân",
    description: "Những bài viết giúp bạn có thêm nhiều vốn sống",
}]

const blogData: Blog = {
    title: "Nhật ký của một lập trình ziên zà...",
    author: tranphudat,
    comment: 10,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, modi.",
    readTime: 10,
    topic: topics[0],
    upVote: 100
}