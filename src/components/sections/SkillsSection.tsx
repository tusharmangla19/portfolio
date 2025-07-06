"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Shield, 
  Brain, 
  Layers,
  Target,
  Trophy
} from "lucide-react";
import { 
  SiJavascript, 
  SiTypescript, 
  SiCplusplus, 
  SiReact, 
  SiNextdotjs, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiFirebase, 
  SiPostgresql, 
  SiSolidity, 
  SiEthereum, 
  SiOpenai,
  SiSocketdotio,
  SiWebrtc,
  SiGeeksforgeeks,
  SiLeetcode
} from "react-icons/si";

export function SkillsSection() {
  const skillsWithIcons: Record<string, React.ReactElement> = {
    // Languages
    "JavaScript": <SiJavascript className="h-4 w-4 text-yellow-500 flex-shrink-0" />,
    "TypeScript": <SiTypescript className="h-4 w-4 text-blue-500 flex-shrink-0" />,
    "C++": <SiCplusplus className="h-4 w-4 text-blue-600 flex-shrink-0" />,
    
    // Frontend
    "React.js": <SiReact className="h-4 w-4 text-cyan-500 flex-shrink-0" />,
    "Next.js": <SiNextdotjs className="h-4 w-4 text-black dark:text-white flex-shrink-0" />,
    "React Native": <SiReact className="h-4 w-4 text-cyan-500 flex-shrink-0" />,
    "HTML5": <SiHtml5 className="h-4 w-4 text-orange-500 flex-shrink-0" />,
    "CSS3": <SiCss3 className="h-4 w-4 text-blue-500 flex-shrink-0" />,
    "Tailwind": <SiTailwindcss className="h-4 w-4 text-cyan-500 flex-shrink-0" />,
    
    // Backend
    "Node.js": <SiNodedotjs className="h-4 w-4 text-green-500 flex-shrink-0" />,
    "Express.js": <SiExpress className="h-4 w-4 text-gray-600 dark:text-gray-300 flex-shrink-0" />,
    "WebSocket": <SiSocketdotio className="h-4 w-4 text-purple-500 flex-shrink-0" />,
    "WebRTC": <SiWebrtc className="h-4 w-4 text-blue-500 flex-shrink-0" />,
    
    // Databases
    "MongoDB": <SiMongodb className="h-4 w-4 text-green-500 flex-shrink-0" />,
    "Firebase": <SiFirebase className="h-4 w-4 text-yellow-500 flex-shrink-0" />,
    "PostgreSQL": <SiPostgresql className="h-4 w-4 text-blue-500 flex-shrink-0" />,
    
    // Blockchain
    "Solidity": <SiSolidity className="h-4 w-4 text-gray-600 dark:text-gray-300 flex-shrink-0" />,
    "Web3.js": <SiEthereum className="h-4 w-4 text-blue-500 flex-shrink-0" />,
    "Ethers.js": <SiEthereum className="h-4 w-4 text-purple-500 flex-shrink-0" />,
    "Smart Contracts": <SiEthereum className="h-4 w-4 text-gray-600 dark:text-gray-300 flex-shrink-0" />,
    
    // Mobile
    "Cross-platform Development": <Smartphone className="h-4 w-4 text-purple-500 flex-shrink-0" />,
    
    // AI & Core CS
    "AI Integration": <SiOpenai className="h-4 w-4 text-green-500 flex-shrink-0" />,
    "Data Structures and Algorithms": <Code className="h-4 w-4 text-blue-500 flex-shrink-0" />,
    "Operating Systems": <Layers className="h-4 w-4 text-gray-600 dark:text-gray-300 flex-shrink-0" />,
    "Database Management Systems": <Database className="h-4 w-4 text-orange-500 flex-shrink-0" />,
    "Object-Oriented Programming": <Brain className="h-4 w-4 text-purple-500 flex-shrink-0" />,
    
    // Problem Solving
    "DSA": <Target className="h-4 w-4 text-red-500 flex-shrink-0" />,
    "Problem Solving": <Brain className="h-4 w-4 text-blue-500 flex-shrink-0" />,
    "Competitive Programming": <Trophy className="h-4 w-4 text-yellow-500 flex-shrink-0" />,
  };

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["JavaScript", "TypeScript", "C++"],
      color: "text-blue-500",
      gradient: "gradient-text-blue",
    },
    {
      title: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      skills: ["React.js", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind"],
      color: "text-green-500",
      gradient: "gradient-text-purple",
    },
    {
      title: "Backend",
      icon: <Layers className="h-5 w-5" />,
      skills: ["Node.js", "Express.js", "WebSocket", "WebRTC"],
      color: "text-purple-500",
      gradient: "gradient-text-cyan",
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: ["PostgreSQL","MongoDB", "Firebase"],
      color: "text-orange-500",
      gradient: "gradient-text-warm",
    },
    {
      title: "Blockchain",
      icon: <Shield className="h-5 w-5" />,
      skills: ["Solidity", "Web3.js", "Ethers.js", "Smart Contracts"],
      color: "text-yellow-500",
      gradient: "gradient-text-purple",
    },
    {
      title: "AI & Core CS",
      icon: <Brain className="h-5 w-5" />,
      skills: ["AI Integration", "Data Structures and Algorithms", "Operating Systems", "Database Management Systems", "Object-Oriented Programming"],
      color: "text-red-500",
      gradient: "gradient-text-warm",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my <span className="gradient-text-purple font-semibold">technical expertise</span> and the tools I use to build <span className="gradient-text-cyan font-semibold">amazing applications</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="w-full"
            >
              <Card className="h-full gradient-card hover-lift hover-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <div className={category.color}>
                      {category.icon}
                    </div>
                    <span className={category.gradient}>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="text-sm font-medium px-3 py-2 hover-lift transition-all duration-200 bg-background/80 hover:bg-background text-foreground border border-border/50 hover:border-border flex items-center gap-2 min-w-0 max-w-full"
                      >
                        {skillsWithIcons[skill]}
                        <span className="truncate flex-1 min-w-0">{skill}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Card className="inline-block p-8 gradient-card hover-lift transition-all duration-300">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold gradient-text-purple">
                Problem Solving
              </h3>
              <p className="text-muted-foreground">
                Solved over <span className="font-bold gradient-text-cyan">250+</span> data structures and algorithms questions across multiple platforms
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" size="sm" asChild className="hover-lift">
                  <a
                    href="https://leetcode.com/u/tusharmangla001/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <SiLeetcode className="h-4 w-4 text-orange-500" />
                    LeetCode
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="hover-lift">
                  <a
                    href="https://www.geeksforgeeks.org/user/tusharmangla001/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <SiGeeksforgeeks className="h-4 w-4 text-green-600" />
                    GeeksforGeeks
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
} 