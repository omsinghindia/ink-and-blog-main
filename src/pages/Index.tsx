
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Globe, MapPin, User } from 'lucide-react';

const Index = () => {
  // Sample travel locations
  const travelLocations = [
    { name: "Tokyo, Japan", type: "image" },
    { name: "Venice, Italy", type: "video" },
    { name: "Santorini, Greece", type: "image" },
    { name: "New York City, USA", type: "image" },
    { name: "Kyoto, Japan", type: "video" },
    { name: "Barcelona, Spain", type: "image" },
  ];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        {/* Enhanced Hero Section with Animation */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border border-muted-foreground/10 animate-[spin_30s_linear_infinite]" />
          <div className="absolute right-40 top-40 w-32 h-32 rounded-full border border-muted-foreground/20 animate-[spin_20s_linear_infinite_reverse]" />
          
          <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-tight tracking-tighter mb-6 animate-fade-in">
            Travel <span className="text-muted-foreground">Collection</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 animate-slide-in-up">
            Capturing moments and memories from around the world. A personal collection of travel photography and videography.
          </p>
          
          {/* Featured Travel Content with Improved Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {travelLocations.map((location, index) => (
              <div 
                key={index}
                className={`aspect-[3/4] rounded-lg overflow-hidden bg-secondary relative group shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  {location.type === "video" ? (
                    <div className="w-12 h-12 rounded-full bg-background/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-current ml-1"></div>
                    </div>
                  ) : null}
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center mb-1 text-white">
                    <MapPin size={16} className="mr-1" />
                    <h3 className="font-medium">{location.name}</h3>
                  </div>
                  <div className="flex items-center text-white/80 text-sm">
                    {location.type === "video" ? (
                      <>
                        <Globe size={14} className="mr-1" />
                        <span>Video Journal</span>
                      </>
                    ) : (
                      <>
                        <Camera size={14} className="mr-1" />
                        <span>Photograph</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Enhanced About Me Section */}
        <section className="py-12 border-t border-border">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-2/5">
              <div className="relative">
                <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center shadow-lg relative z-10 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 group-hover:to-black/20 transition-all duration-300" />
                  <span className="text-lg font-mono text-muted-foreground">Profile Photo</span>
                  <User className="absolute h-48 w-48 text-muted-foreground/10" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-lg border border-muted-foreground/20 -z-10" />
              </div>
            </div>
            
            <div className="w-full md:w-3/5">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 relative inline-block">
                About Me
                <span className="absolute -bottom-2 left-0 w-1/3 h-0.5 bg-muted-foreground/30"></span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  I'm a designer and creative thinker specializing in minimal, human-centered design. For over 8 years, I've worked with clients and companies to create thoughtful digital experiences that balance form and function.
                </p>
                <p className="leading-relaxed">
                  My approach is guided by the belief that great design solves real problems through simplicity and clarity. I'm particularly inspired by the design principles of Dieter Rams and the philosophy that less is more.
                </p>
                <div className="pt-6">
                  <Button asChild variant="outline" className="group rounded-full px-6 border-muted-foreground/30 hover:border-muted-foreground/60">
                    <Link to="/about">
                      Learn more about me
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
