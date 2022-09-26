export type Author = {
  avatarUrl: string;
  name: string;
  role: string;
};

export type Content = {
  type: string;
  content: string;
  url?: string;
};

export type Comment = {
  id: number;
  postId: number;
  content: {
    author: Omit<Author, "role">;
    text: string;
  };
  publishedAt: Date;
};

export type PostProps = {
  author: Author;
  content: Content[];
  hashtags: string[];
  publishedAt: Date;
  postId: number;
};
