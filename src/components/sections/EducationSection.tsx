"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export function EducationSection() {
  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "Vivekananda Institute of Professional Studies",
      location: "Delhi",
      duration: "2023-2025",
      status: "Pursuing",
      description: "Advanced study in computer applications with focus on software development, database management, and emerging technologies.",
      highlights: [
        "Specialized in Advanced Software Development",
        "Database Management Systems",
        "Cloud Computing and Modern Technologies",
        "Project Management and Team Leadership",
      ],
    },
    {
      degree: "Bachelor in Computer Applications",
      institution: "J.C Bose University of Science and Technology, YMCA",
      location: "Faridabad, Haryana",
      duration: "2020-2023",
      status: "Completed",
      description: "Comprehensive undergraduate program covering fundamental concepts in computer science and applications.",
      highlights: [
        "Strong foundation in Programming Languages",
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Web Development Technologies",
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pursuing":
        return "bg-blue-500";
      case "Completed":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and the foundation that shaped my technical expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-muted/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                        <GraduationCap className="h-6 w-6 text-primary" />
                        {edu.degree}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Award className="h-4 w-4" />
                          <span className="font-semibold">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`${getStatusColor(edu.status)} text-white`}
                    >
                      {edu.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6 space-y-6">
                  <p className="text-muted-foreground text-lg">
                    {edu.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Key Areas of Study:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="inline-block p-8 bg-primary/5 border-primary/20">
            <div className="space-y-4">
              <GraduationCap className="h-12 w-12 mx-auto text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                Academic Excellence
              </h3>
              <p className="text-muted-foreground max-w-md">
                Committed to continuous learning and staying updated with the latest 
                technologies and industry best practices.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
} 