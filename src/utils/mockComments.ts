import { Comment } from "../components/Post/types";

export default [
  {
    id: 100,
    postId: 10,
    content: {
      author: {
        avatarUrl: "https://i.pravatar.cc/150?img=6",
        name: "Lee Patrick",
      },
      text: "Show!",
    },
    publishedAt: new Date("2022-09-04 12:45:16"),
  },
  {
    id: 101,
    postId: 10,
    content: {
      author: {
        avatarUrl: "https://i.pravatar.cc/150?img=9",
        name: "Lina Lins",
      },
      text: "Parabéns, John.",
    },
    publishedAt: new Date("2022-09-22 17:06:06"),
  },
  {
    id: 10,
    postId: 20,
    content: {
      author: {
        avatarUrl: "https://i.pravatar.cc/150?img=35",
        name: "Bia Lee",
      },
      text: "Adorei o projeto...",
    },
    publishedAt: new Date("2022-09-22 17:06:06"),
  },
] as Comment[];
