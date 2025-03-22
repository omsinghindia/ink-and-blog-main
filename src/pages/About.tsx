
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Mail } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">About</h1>
          <p className="text-lg text-muted-foreground">
            Designer, thinker, and minimalist passionate about creating thoughtful digital experiences.
          </p>
        </div>
        
        <section className="mb-16">
          <div className="aspect-[3/2] rounded-lg bg-secondary mb-8 flex items-center justify-center">
            <span className="text-lg font-mono text-muted-foreground">Profile Image</span>
          </div>
          
          <h2 className="text-2xl font-medium font-serif mb-4">Hello, I'm [Your Name]</h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              I'm a designer and creative thinker specializing in minimal, human-centered design. For over 8 years, I've worked with clients and companies to create thoughtful digital experiences that balance form and function.
            </p>
            
            <p>
              My approach is guided by the belief that great design solves real problems through simplicity and clarity. I'm particularly inspired by the design principles of Dieter Rams and the philosophy that less is more.
            </p>
            
            <p>
              When I'm not designing, you'll find me exploring photography, reading about design theory, and contemplating the intersection of technology and human experience.
            </p>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-medium font-serif mb-6">Expertise</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="text-lg font-medium mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Creating intuitive, accessible interfaces and thoughtful user experiences for digital products.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Visual Design</h3>
              <p className="text-muted-foreground">
                Developing elegant visual systems with a focus on typography, hierarchy, and white space.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Brand Identity</h3>
              <p className="text-muted-foreground">
                Crafting cohesive brand systems that communicate values through minimal design principles.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Design Strategy</h3>
              <p className="text-muted-foreground">
                Aligning design decisions with business goals and user needs for meaningful outcomes.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-medium font-serif mb-6">Experience</h2>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium">Senior Designer</h3>
                <span className="text-sm text-muted-foreground">2020—Present</span>
              </div>
              <p className="text-muted-foreground mb-1">Design Studio</p>
              <p className="text-muted-foreground">
                Leading the design team in creating cohesive digital experiences for clients across various industries.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium">UI/UX Designer</h3>
                <span className="text-sm text-muted-foreground">2018—2020</span>
              </div>
              <p className="text-muted-foreground mb-1">Tech Company</p>
              <p className="text-muted-foreground">
                Designed user interfaces and experiences for a suite of enterprise software products.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium">Visual Designer</h3>
                <span className="text-sm text-muted-foreground">2016—2018</span>
              </div>
              <p className="text-muted-foreground mb-1">Creative Agency</p>
              <p className="text-muted-foreground">
                Created visual design solutions across digital and print media for a diverse client base.
              </p>
            </div>
          </div>
        </section>
        
        <section className="border-t border-border pt-12">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-medium mb-4">Let's work together</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Interested in collaborating or have a project in mind? I'm currently available for select freelance opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="gap-2">
                <Link to="/contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href="#" className="group">
                  <FileText className="h-4 w-4" />
                  Download CV
                  <ArrowRight className="ml-1 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
