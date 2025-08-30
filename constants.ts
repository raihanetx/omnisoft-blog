
import { BlogPost, BlogCategory } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started With React',
    author: 'Publisher Name',
    date: 'August 10, 2025',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['React', 'Typescript', 'Tailwind'],
    category: BlogCategory.FRONTEND,
  },
  {
    id: 2,
    title: 'Advanced TypeScript Patterns',
    author: 'Publisher Name',
    date: 'August 13, 2025',
    image: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['TypeScript', 'Next.js', 'JavaScript'],
    category: BlogCategory.FRONTEND,
  },
  {
    id: 3,
    title: 'UI Design With Tailwind CSS',
    author: 'Publisher Name',
    date: 'August 17, 2025',
    image: 'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['Tailwind', 'React'],
    category: BlogCategory.FRONTEND,
  },
  {
    id: 5,
    title: 'Building REST APIs with Node.js',
    author: 'Publisher Name',
    date: 'August 10, 2025',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['Node.js', 'Express.js'],
    category: BlogCategory.BACKEND,
  },
  {
    id: 6,
    title: 'Scaling Applications with Microservices',
    author: 'Publisher Name',
    date: 'August 13, 2025',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['Express.js', 'Docker', 'Kubernetes'],
    category: BlogCategory.BACKEND,
  },
  {
    id: 7,
    title: 'Building GraphQL APIs with NestJS',
    author: 'Publisher Name',
    date: 'August 17, 2025',
    image: 'https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
    tags: ['NestJS', 'Database', 'GraphQL'],
    category: BlogCategory.BACKEND,
  },
];

export const CATEGORIES = ['All', ...Object.values(BlogCategory)];