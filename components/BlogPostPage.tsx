
import React from 'react';
import { BlogPost, BlogCategory } from '../types';
import CodeBlock from './CodeBlock';

const BLOG_CONTENT: Record<number, React.ReactNode> = {
    1: (
        <>
            <p>React has revolutionized the way we think about front-end development. Its component-based architecture allows developers to build encapsulated components that manage their own state, then compose them to make complex UIs. This guide will walk you through the absolute basics of getting a React application up and running.</p>
            <h3>What is JSX?</h3>
            <p>JSX stands for JavaScript XML. It is a syntax extension to JavaScript and comes with the full power of JavaScript. JSX produces React “elements”. You'll see it in action below. While it's not mandatory to use JSX with React, it's highly recommended as it makes your code more readable and easier to write.</p>
            <CodeBlock>
{`import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));`}
            </CodeBlock>
            <h3>Understanding State</h3>
            <p>State is what allows you to create components that are dynamic and interactive. The <code>useState</code> hook is the most basic way to add state to a functional component. It returns a pair: the current state value and a function that lets you update it.</p>
            <p>Here's a simple counter component that demonstrates the use of state:</p>
            <CodeBlock>
{`import React, { useState } from 'react';

function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}
            </CodeBlock>
            <p>By breaking down complex UIs into simple, stateful components, React makes managing large applications significantly more straightforward. This is just the tip of the iceberg, but it's a solid foundation for your journey into the React ecosystem.</p>
        </>
    ),
    2: (
        <>
            <p>TypeScript, a superset of JavaScript, adds static types to the language, enabling developers to catch errors early and build more robust applications. As you get comfortable with the basics, you'll discover a powerful set of advanced patterns that can make your code even more flexible and type-safe. Let's explore a couple of them.</p>
            <h3>Conditional Types</h3>
            <p>Conditional types allow you to choose types based on a condition. They take a form that looks a lot like conditional expressions (<code>condition ? trueExpression : falseExpression</code>) in JavaScript.</p>
            <CodeBlock>
{`interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

// A conditional type that checks if T extends Animal
type Example1 = Dog extends Animal ? number : string; // type is number
type Example2 = RegExp extends Animal ? number : string; // type is string`}
            </CodeBlock>
            <h3>Mapped Types</h3>
            <p>Mapped types are a powerful feature that lets you take an existing type and transform each of its properties. This is incredibly useful for creating variations of a type, such as making all its properties optional or read-only.</p>
            <p>Here’s how you could create a type that makes all properties of another type <code>readonly</code>:</p>
            <CodeBlock>
{`type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

interface User {
    name: string;
    age: number;
}

const user: Readonly<User> = {
    name: "John Doe",
    age: 30,
};

// This will cause a compile-time error
// user.age = 31;`}
            </CodeBlock>
            <p>Mastering these advanced patterns will unlock a new level of productivity and safety in your TypeScript projects, allowing you to build complex type definitions that are both expressive and maintainable.</p>
        </>
    ),
    3: (
        <>
            <p>Tailwind CSS has taken the front-end world by storm by offering a utility-first approach to styling. Instead of writing custom CSS classes, you build designs directly in your HTML by applying pre-existing utility classes. This approach can dramatically speed up development and help maintain consistency across your project.</p>
            <h3>Building with Utilities</h3>
            <p>Let's see how simple it is to style a button. Instead of a custom class like <code>.btn-primary</code>, you compose utilities for background color, padding, text style, and hover states.</p>
            <CodeBlock>
{`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>`}
            </CodeBlock>
            <h3>Responsive Design</h3>
            <p>Tailwind makes responsive design intuitive. You can apply utility classes conditionally at different screen sizes by prefixing them with breakpoint names like <code>sm:</code>, <code>md:</code>, <code>lg:</code>, and <code>xl:</code>. This makes it easy to build complex responsive layouts without ever leaving your HTML.</p>
            <p>Here’s an example of a responsive card layout:</p>
            <CodeBlock>
{`<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>`}
            </CodeBlock>
            <p>By embracing a utility-first workflow, you can build custom designs without writing a single line of custom CSS, leading to a faster and more maintainable development process.</p>
        </>
    ),
    5: (
        <>
            <p>Node.js, with its event-driven, non-blocking I/O model, is perfectly suited for building fast and scalable network applications. When combined with the minimalist and flexible Express.js framework, creating robust REST APIs becomes a straightforward and enjoyable process. This article will guide you through setting up a basic Express server.</p>
            <h3>Setting Up Your First Server</h3>
            <p>Getting a server running with Express requires just a few lines of code. You'll need to import the express module, create an app instance, define a route, and tell your app to listen on a specific port.</p>
            <CodeBlock>
{`const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Example app listening at http://localhost:\${port}\`);
});`}
            </CodeBlock>
            <h3>Defining Routes</h3>
            <p>Routes determine how your application responds to a client request to a particular endpoint. Each route can have one or more handler functions, which are executed when the route is matched. For a REST API, you'll typically define routes for GET, POST, PUT, and DELETE HTTP methods.</p>
            <p>This simple foundation is all you need to start building powerful APIs that can serve a wide range of clients, from web browsers to mobile applications.</p>
        </>
    ),
    6: (
        <>
            <p>As applications grow in complexity, the monolithic architecture can become a bottleneck, slowing down development and deployment cycles. Microservices offer a solution by breaking down a large application into a collection of smaller, independently deployable services. Each service is built around a specific business capability and can be developed, deployed, and scaled independently.</p>
            <h3>Key Benefits of Microservices</h3>
            <p>Adopting a microservices architecture can provide several advantages:</p>
            <ul>
                <li><strong>Improved Scalability:</strong> Services can be scaled independently, allowing you to allocate resources more efficiently to the parts of your application that need them most.</li>
                <li><strong>Increased Resilience:</strong> If one service fails, the rest of the application can continue to function, improving overall fault tolerance.</li>
                <li><strong>Technology Flexibility:</strong> Each service can be built with the technology stack that is best suited for its specific job, enabling teams to use the right tool for the task.</li>
                <li><strong>Faster Development Cycles:</strong> Smaller, focused teams can work on different services in parallel, leading to faster development and deployment.</li>
            </ul>
            <blockquote>The core idea is to create a system where components are independently replaceable and upgradeable, which is crucial for building and maintaining large, complex applications over time.</blockquote>
            <p>While microservices introduce their own set of challenges, such as increased operational complexity, the benefits in terms of scalability and development speed are often a compelling reason for adoption in large-scale systems.</p>
        </>
    ),
    7: (
        <>
            <p>NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It uses modern JavaScript, is built with and fully supports TypeScript, and combines elements of Object-Oriented Programming, Functional Programming, and Functional Reactive Programming. One of its most powerful features is its first-class support for GraphQL.</p>
            <h3>Building a GraphQL Resolver</h3>
            <p>In GraphQL, a "resolver" is a function that's responsible for fetching the data for a single field in your schema. NestJS makes creating resolvers elegant and declarative using decorators. Below is an example of a simple resolver that queries for a list of authors.</p>
            <CodeBlock>
{`import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Author')
export class AuthorResolver {
  
  @Query(() => [String]) // The return type of the query
  async authors() {
    return ['John Doe', 'Jane Smith'];
  }
}`}
            </CodeBlock>
            <h3>Why NestJS for GraphQL?</h3>
            <p>NestJS provides a robust structure for your GraphQL API. It handles much of the boilerplate for you, allowing you to focus on your business logic. Its module system helps you organize your code into cohesive, reusable blocks. When you combine the power of NestJS with the flexibility of GraphQL, you get a powerful stack for building modern, type-safe APIs.</p>
        </>
    )
};

interface BlogPostPageProps {
    post: BlogPost;
    onGoBack: () => void;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onGoBack }) => {
    const content = BLOG_CONTENT[post.id] || <p>Content not found.</p>;

    const getAuthorRole = (category: BlogCategory) => {
        switch (category) {
            case BlogCategory.FRONTEND:
                return 'Frontend Specialist';
            case BlogCategory.BACKEND:
                return 'Backend Architect';
            default:
                return 'Software Engineer';
        }
    };

    return (
        <article className="container mx-auto px-6 py-12 max-w-4xl animate-fade-in">
            <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">{post.title}</h1>
                <div className="text-sm text-gray-400 flex items-center gap-4 flex-wrap">
                    <span><i className="far fa-user mr-1"></i> {post.author}</span>
                    <span><i className="far fa-calendar-alt mr-1"></i> {post.date}</span>
                </div>
            </header>

            <img src={post.image} alt={post.title} className="rounded-xl mb-8 w-full aspect-video object-cover" />
            
            <div className="prose prose-lg lg:prose-xl max-w-none prose-invert">
                {content}
            </div>

            <footer className="mt-12 pt-8 border-t border-gray-700">
                 <div className="flex items-center gap-4">
                    <img 
                        className="w-16 h-16 rounded-full object-cover" 
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop&fit=facearea&facepad=2" 
                        alt="Author profile picture" 
                    />
                    <div>
                        <p className="text-gray-400">Written By</p>
                        <h3 className="text-xl font-bold mt-1">{post.author}</h3>
                        <p className="text-button-secondary font-medium mt-1">{getAuthorRole(post.category)}</p>
                    </div>
                </div>
            </footer>
        </article>
    );
};

export default BlogPostPage;
