
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "The Principles of Minimal Design",
    excerpt: "Exploring how less becomes more in modern digital interfaces. This article breaks down the core principles that make minimal design effective.",
    date: "December 15, 2023",
    category: "Design Theory",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Form Follows Function: A Case Study",
    excerpt: "An in-depth analysis of how functional requirements shape aesthetic decisions in product design, with real-world examples.",
    date: "November 28, 2023",
    category: "Case Studies",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "White Space in Modern Interfaces",
    excerpt: "Why the absence of elements is just as important as their presence. A look at the psychological impact of negative space.",
    date: "November 10, 2023",
    category: "UI Design",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Typography Hierarchy in Digital Products",
    excerpt: "How to establish clear visual hierarchies through thoughtful typography choices, spacing, and contrast.",
    date: "October 22, 2023",
    category: "Typography",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "The Psychology of Black and White Design",
    excerpt: "Understanding the emotional and psychological impacts of monochromatic color schemes in user interfaces.",
    date: "October 8, 2023",
    category: "Color Theory",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "Responsive Design: Beyond Screen Sizes",
    excerpt: "A comprehensive look at what makes truly responsive experiences work across all devices and contexts.",
    date: "September 19, 2023",
    category: "Responsive Design",
    readTime: "9 min read"
  },
];

// Categories for filtering
const categories = [
  "All",
  "Design Theory",
  "Case Studies",
  "UI Design",
  "Typography",
  "Color Theory",
  "Responsive Design"
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Thoughts, insights, and perspectives on design, user experience, and creative processes.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10 bg-background border-border"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="border border-border rounded-lg p-6 hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm font-mono text-muted-foreground">{post.date}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-medium mb-3">{post.title}</h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  <Button asChild variant="link" className="px-0 font-medium">
                    <Link to={`/blog/${post.id}`} className="group hover-underline">
                      Read Article
                      <ArrowRight className="ml-1 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-muted-foreground mb-4">No articles found matching your criteria.</p>
              <Button onClick={() => {setSearchTerm(""); setActiveCategory("All");}}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
        
        {/* Newsletter Signup */}
        <div className="border border-border rounded-lg p-8 bg-secondary/30">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-serif text-2xl font-medium mb-3">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to get notified when new articles are published. No spam, just thoughtful content.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
