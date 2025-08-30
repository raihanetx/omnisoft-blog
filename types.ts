
export enum BlogCategory {
    FRONTEND = 'Frontend',
    BACKEND = 'Backend'
}

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
  category: BlogCategory;
}
