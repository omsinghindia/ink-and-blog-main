
import React from 'react';
import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Book, GraduationCap, School } from 'lucide-react';

const Education = () => {
  const educationHistory = [
    {
      institution: "Stanford University",
      degree: "Ph.D. in Computer Science",
      years: "2018 - 2022",
      description: "Focused on artificial intelligence and machine learning algorithms. Thesis on 'Neural Networks for Natural Language Processing'.",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      institution: "Massachusetts Institute of Technology",
      degree: "Master of Science in Computer Engineering",
      years: "2016 - 2018",
      description: "Specialized in computer architecture and systems design. Research on distributed computing systems.",
      icon: <School className="h-6 w-6" />
    },
    {
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Science",
      years: "2012 - 2016",
      description: "Core curriculum in computer science fundamentals, data structures, algorithms, and software engineering.",
      icon: <Book className="h-6 w-6" />
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">Education</h1>
          <p className="text-lg text-muted-foreground">
            My academic journey and qualifications that have shaped my expertise and approach to problem-solving.
          </p>
        </div>

        <div className="space-y-8">
          {educationHistory.map((edu, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden border border-border">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-muted rounded-full p-3">
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.institution}</h3>
                    <p className="text-muted-foreground">{edu.degree}</p>
                    <p className="text-sm font-medium text-muted-foreground mt-1">{edu.years}</p>
                  </div>
                </div>
                <div className="mt-4 pl-16">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="details" className="border-none">
                      <AccordionTrigger className="text-sm text-primary py-1 px-0">
                        View Details
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Additional Certifications</h2>
          <ul className="space-y-3">
            <li className="flex gap-2 items-center">
              <div className="bg-background rounded-full p-1.5">
                <GraduationCap className="h-4 w-4" />
              </div>
              <span>Advanced Machine Learning Specialization - Coursera</span>
            </li>
            <li className="flex gap-2 items-center">
              <div className="bg-background rounded-full p-1.5">
                <GraduationCap className="h-4 w-4" />
              </div>
              <span>Full Stack Web Development - Udemy</span>
            </li>
            <li className="flex gap-2 items-center">
              <div className="bg-background rounded-full p-1.5">
                <GraduationCap className="h-4 w-4" />
              </div>
              <span>Cloud Architecture and DevOps - AWS Certification</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Education;
