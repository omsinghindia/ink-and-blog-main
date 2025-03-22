
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Search, Filter, X, Download, ExternalLink } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Research projects data
const researchProjects = [
  {
    id: 1,
    title: "Urban Development Patterns",
    description: "Analysis of urban growth patterns in metropolitan areas using satellite imagery.",
    category: "Urban Planning",
    year: 2023,
    image: "urban-development"
  },
  {
    id: 2,
    title: "Sustainable Architecture",
    description: "Research into eco-friendly building materials and design methodologies.",
    category: "Architecture",
    year: 2022,
    image: "sustainable-arch"
  },
  {
    id: 3,
    title: "Public Space Utilization",
    description: "Study of how people interact with and utilize public spaces in different cultural contexts.",
    category: "Public Space",
    year: 2023,
    image: "public-space"
  },
  {
    id: 4,
    title: "Minimalist Design Impact",
    description: "Measuring the psychological impact of minimalist design principles in living spaces.",
    category: "Design Theory",
    year: 2021,
    image: "minimalist"
  },
];

// Sample visual research data (for the original research tab)
const visualResearchItems = Array(16).fill(0).map((_, index) => ({
  id: index + 1,
  title: `Research Image ${index + 1}`,
  category: ["Architecture", "Product", "Nature", "Abstract"][index % 4],
  date: new Date(2023, index % 12, (index % 28) + 1).toISOString(),
  format: ["JPG", "PNG", "SVG", "TIFF"][index % 4],
  size: ["1920x1080", "3840x2160", "800x600", "1200x800"][index % 4],
}));

// Sample photography data
const photographyItems = [
  { id: 1, title: "Urban Geometry", category: "Architecture" },
  { id: 2, title: "Street Life", category: "Documentary" },
  { id: 3, title: "Seasonal Landscapes", category: "Nature" },
  { id: 4, title: "Portrait Series", category: "People" },
  { id: 5, title: "Night Photography", category: "Urban" },
  { id: 6, title: "Macro Details", category: "Nature" },
  { id: 7, title: "Abstract Compositions", category: "Abstract" },
  { id: 8, title: "Travel Documentary", category: "Documentary" },
];

const ResearchItem = ({ item }: { item: typeof visualResearchItems[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="aspect-square rounded-lg bg-secondary relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full flex items-center justify-center">
        <span className="font-mono text-sm text-muted-foreground">{item.title}</span>
      </div>
      
      {/* Hover overlay */}
      <div 
        className={`absolute inset-0 bg-background/90 flex flex-col justify-between p-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div>
          <h3 className="font-medium mb-1">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.category}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs font-mono text-muted-foreground">
            {item.format} • {item.size}
          </span>
          <div className="flex gap-2">
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Download className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResearchProjectCard = ({ project }: { project: typeof researchProjects[0] }) => {
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <div className="aspect-video bg-secondary flex items-center justify-center">
        <span className="font-mono text-sm text-muted-foreground">{project.image}</span>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <span className="text-xs bg-secondary px-2 py-1 rounded">{project.category}</span>
            <span className="text-xs bg-secondary px-2 py-1 rounded">{project.year}</span>
          </div>
          <Button size="sm" variant="outline">
            View Project
          </Button>
        </div>
      </div>
    </div>
  );
};

const PhotographyItem = ({ item }: { item: typeof photographyItems[0] }) => {
  return (
    <div className="aspect-square bg-secondary rounded-lg overflow-hidden relative group">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-sm text-muted-foreground">{item.title}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-background/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="font-medium">{item.title}</h3>
        <p className="text-xs text-muted-foreground">{item.category}</p>
      </div>
    </div>
  );
};

const Research = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState("visual-research");
  const [filters, setFilters] = useState({
    category: "",
    format: "",
    dateRange: "",
  });
  const [filteredItems, setFilteredItems] = useState(visualResearchItems);
  
  // Filter items based on search and filters
  useEffect(() => {
    let results = visualResearchItems;
    
    // Apply search filter
    if (searchTerm) {
      results = results.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (filters.category) {
      results = results.filter(item => item.category === filters.category);
    }
    
    // Apply format filter
    if (filters.format) {
      results = results.filter(item => item.format === filters.format);
    }
    
    // Apply date filter
    if (filters.dateRange) {
      const now = new Date();
      let cutoffDate = new Date();
      
      switch(filters.dateRange) {
        case 'last-week':
          cutoffDate.setDate(now.getDate() - 7);
          break;
        case 'last-month':
          cutoffDate.setMonth(now.getMonth() - 1);
          break;
        case 'last-year':
          cutoffDate.setFullYear(now.getFullYear() - 1);
          break;
        default:
          cutoffDate = new Date(0); // Beginning of time
      }
      
      results = results.filter(item => new Date(item.date) >= cutoffDate);
    }
    
    setFilteredItems(results);
  }, [searchTerm, filters]);
  
  return (
    <Layout>
      <div>
        <div className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">Research</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore research projects, visual resources, and photography collections.
          </p>
        </div>
        
        <Tabs defaultValue="research-projects" onValueChange={setSelectedTab} className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="research-projects">Research Projects</TabsTrigger>
            <TabsTrigger value="visual-research">Visual Research</TabsTrigger>
            <TabsTrigger value="photography">Photography</TabsTrigger>
          </TabsList>
          
          <TabsContent value="research-projects" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchProjects.map((project) => (
                <ResearchProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="visual-research" className="mt-4">
            {/* Search and filter controls */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search visual research..."
                  className="pl-10 bg-background"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[320px] sm:w-[400px]">
                  <SheetHeader className="mb-6">
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>
                      Refine your research results
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Category</label>
                      <Select 
                        value={filters.category} 
                        onValueChange={(value) => setFilters(prev => ({...prev, category: value}))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All Categories</SelectItem>
                          <SelectItem value="Architecture">Architecture</SelectItem>
                          <SelectItem value="Product">Product</SelectItem>
                          <SelectItem value="Nature">Nature</SelectItem>
                          <SelectItem value="Abstract">Abstract</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Format</label>
                      <Select 
                        value={filters.format} 
                        onValueChange={(value) => setFilters(prev => ({...prev, format: value}))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All Formats</SelectItem>
                          <SelectItem value="JPG">JPG</SelectItem>
                          <SelectItem value="PNG">PNG</SelectItem>
                          <SelectItem value="SVG">SVG</SelectItem>
                          <SelectItem value="TIFF">TIFF</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Date Added</label>
                      <Select 
                        value={filters.dateRange} 
                        onValueChange={(value) => setFilters(prev => ({...prev, dateRange: value}))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select date range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All Time</SelectItem>
                          <SelectItem value="last-week">Last Week</SelectItem>
                          <SelectItem value="last-month">Last Month</SelectItem>
                          <SelectItem value="last-year">Last Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex gap-3">
                    <Button 
                      onClick={() => setFilters({category: "", format: "", dateRange: ""})} 
                      variant="outline" 
                      className="flex-1"
                    >
                      Reset
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            
            {/* Active filters */}
            {(filters.category || filters.format || filters.dateRange) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {filters.category && (
                  <div className="inline-flex items-center gap-1 bg-secondary px-3 py-1 rounded-full text-sm">
                    Category: {filters.category}
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-5 w-5" 
                      onClick={() => setFilters(prev => ({...prev, category: ""}))}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                )}
                
                {filters.format && (
                  <div className="inline-flex items-center gap-1 bg-secondary px-3 py-1 rounded-full text-sm">
                    Format: {filters.format}
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-5 w-5" 
                      onClick={() => setFilters(prev => ({...prev, format: ""}))}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                )}
                
                {filters.dateRange && (
                  <div className="inline-flex items-center gap-1 bg-secondary px-3 py-1 rounded-full text-sm">
                    Date: {filters.dateRange.replace('-', ' ')}
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-5 w-5" 
                      onClick={() => setFilters(prev => ({...prev, dateRange: ""}))}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                )}
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-sm h-7" 
                  onClick={() => setFilters({category: "", format: "", dateRange: ""})}
                >
                  Clear All
                </Button>
              </div>
            )}
            
            {/* Research items grid */}
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {filteredItems.map((item) => (
                  <ResearchItem key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No research items match your criteria.</p>
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setFilters({category: "", format: "", dateRange: ""});
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="photography" className="mt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {photographyItems.map((item) => (
                <PhotographyItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Research;
