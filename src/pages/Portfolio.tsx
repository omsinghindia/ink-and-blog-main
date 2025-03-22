
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { ArrowRight, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Define portfolio item types
const categories = ["All", "Digital", "Print", "Branding", "UI/UX"];

// Sample portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Minimal E-commerce Website",
    category: "Digital",
    description: "A clean, minimalist e-commerce platform focusing on user experience and conversion optimization.",
    year: 2023,
  },
  {
    id: 2,
    title: "Brand Identity System",
    category: "Branding",
    description: "Complete identity system for a modern tech startup, including logo, guidelines, and applications.",
    year: 2023,
  },
  {
    id: 3,
    title: "Editorial Magazine Layout",
    category: "Print",
    description: "Contemporary magazine design with a focus on typography hierarchy and elegant photo layouts.",
    year: 2022,
  },
  {
    id: 4,
    title: "Mobile Banking App",
    category: "UI/UX",
    description: "User-centered design for a banking application focusing on accessibility and ease of use.",
    year: 2022,
  },
  {
    id: 5,
    title: "Product Catalog Design",
    category: "Print",
    description: "Minimalist product catalog with a focus on white space and product photography.",
    year: 2021,
  },
  {
    id: 6,
    title: "Design System Creation",
    category: "UI/UX",
    description: "Comprehensive design system for a large-scale web application, ensuring consistency across products.",
    year: 2021,
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A curated selection of projects showcasing minimal design principles and thoughtful execution.
          </p>
        </div>
        
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group"
            >
              <div className="aspect-[4/3] mb-4 bg-secondary rounded-lg overflow-hidden flex items-center justify-center transition-colors duration-300 group-hover:bg-secondary/80">
                <span className="text-lg font-mono text-muted-foreground">Project {project.id}</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.category} • {project.year}</p>
                </div>
                <Button asChild variant="link" className="px-0 mt-1 font-medium">
                  <Link to={`/portfolio/${project.id}`} className="group hover-underline">
                    View
                    <ArrowRight className="ml-1 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <p className="text-muted-foreground mt-2">{project.description}</p>
            </div>
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="border-t border-border pt-16 pb-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Interested in working together?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Button asChild size="lg" className="rounded-md">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
