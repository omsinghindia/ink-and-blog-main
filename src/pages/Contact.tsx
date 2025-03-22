
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">Contact</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Let's discuss your project or just say hello. I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-serif font-medium mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email address" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is this regarding?" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Your message..." 
                  className="min-h-[150px] resize-none"
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="lg:pl-8 lg:border-l border-border">
            <h2 className="text-2xl font-serif font-medium mb-6">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground mb-1">For general inquiries:</p>
                  <a href="mailto:hello@example.com" className="hover-underline">hello@example.com</a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-muted-foreground mb-1">Monday to Friday, 9am-5pm:</p>
                  <a href="tel:+1234567890" className="hover-underline">+1 (234) 567-890</a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground mb-1">Based in:</p>
                  <p>New York, NY</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="font-medium mb-3">Availability</h3>
              <p className="text-muted-foreground">
                I'm currently available for freelance projects, collaborations, and consulting opportunities. Get in touch to discuss how we can work together.
              </p>
            </div>
            
            <div className="mt-12">
              <h3 className="font-medium mb-3">Response Time</h3>
              <p className="text-muted-foreground">
                I typically respond to all inquiries within 1-2 business days. For urgent matters, please indicate in your message subject.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
