"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Trophy, Code, Users, Award, BookOpen } from "lucide-react";

export function AchievementsSection() {
  const achievements = [
    {
      title: "Alumni Portal Development",
      description: "Contributed to the development of the college's alumni portal as part of the Web Development Team",
      icon: <Users className="h-6 w-6" />,
      category: "Team Contribution",
      highlights: [
        "Collaborated with cross-functional team",
        "Developed responsive web interface",
        "Integrated database systems",
        "Implemented user authentication",
      ],
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "Data Structures & Algorithms",
      description: "Solved over 250+ data structures and algorithms questions on various coding platforms",
      icon: <Code className="h-6 w-6" />,
      category: "Problem Solving",
      highlights: [
        "250+ DSA problems solved",
        "Multiple coding platforms",
        "Advanced algorithm implementation",
        "Competitive programming experience",
      ],
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      title: "IIT Delhi Internship",
      description: "Successfully completed full-stack development internship at prestigious IIT Delhi",
      icon: <Award className="h-6 w-6" />,
      category: "Professional Achievement",
      highlights: [
        "9-month internship duration",
        "Centralized application development",
        "React Native and Firebase expertise",
        "Cross-functional team collaboration",
      ],
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ];

  const stats = [
    {
      number: "8+",
      label: "Projects Completed",
      icon: <Trophy className="h-5 w-5" />,
    },
    {
      number: "250+",
      label: "DSA Problems Solved",
      icon: <Code className="h-5 w-5" />,
    },
    {
      number: "9",
      label: "Months at IIT Delhi",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      number: "10+",
      label: "Technologies Mastered",
      icon: <Award className="h-5 w-5" />,
    },
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Achievements & Recognition
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milestones and accomplishments that reflect my dedication to excellence in software development.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <div className="flex justify-center text-primary">
                  {stat.icon}
                </div>
                <div className="space-y-1">
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardHeader className={`${achievement.bgColor} border-b`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-white ${achievement.color}`}>
                      {achievement.icon}
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {achievement.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs text-gray-900 border-gray-900">
                        {achievement.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6 space-y-4">
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {achievement.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <div className="space-y-4">
              <Trophy className="h-12 w-12 mx-auto text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                Continuous Growth
              </h3>
              <p className="text-muted-foreground max-w-md">
                Always striving for excellence and looking for new challenges to 
                expand my skills and make meaningful contributions.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
} 