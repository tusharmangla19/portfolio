"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Heart, Lightbulb, Rocket, Users, Zap } from "lucide-react";

export function AboutSection() {
  const stats = [
    { label: "Years of Experience", value: "3+", icon: Code },
    { label: "Live Projects", value: "3", icon: Rocket },
    { label: "Technologies Mastered", value: "15+", icon: Zap },
    { label: "GitHub Repositories", value: "10+", icon: Users },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "I believe in pushing boundaries and exploring cutting-edge technologies to create solutions that make a real impact."
    },
    {
      icon: Heart,
      title: "User-Centered Design",
      description: "Every line of code I write is focused on creating seamless, intuitive experiences for end users."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "I thrive in team environments, believing that the best solutions emerge from diverse perspectives and open collaboration."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate <span className="gradient-text-purple font-semibold">full-stack developer</span> and 
            <span className="gradient-text-cyan font-semibold"> creative problem solver</span> on a mission to build 
            technology that makes a difference.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center hover-lift glass-effect">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-2xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold gradient-text-blue">
                  My Story
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hey there! I&apos;m currently pursuing my <span className="gradient-text-purple font-semibold">Master of Computer Applications (MCA)</span> 
                    at Vivekananda Institute of Professional Studies, where I&apos;ve been diving deep into 
                    advanced software development concepts and emerging technologies.
                  </p>
                  <p>
                    My breakthrough came during my internship at <span className="gradient-text-cyan font-semibold">IIT Delhi</span>, 
                    where I developed a centralized parent application for the CSC Bal Vidyalaya Program using React Native and Firebase. 
                    This experience taught me the importance of scalable, user-focused solutions.
                  </p>
                  <p>
                    What drives me is the intersection of <span className="gradient-text-warm font-semibold">creativity and technology</span>. 
                    I love taking complex problems and breaking them down into elegant, user-friendly solutions. 
                    Whether it&apos;s building responsive web applications, developing mobile apps, or exploring 
                    modern web technologies, I approach each project with curiosity and a commitment to excellence.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="hover-lift">🎯 Problem Solver</Badge>
                <Badge variant="outline" className="hover-lift">🚀 Full-Stack Developer</Badge>
                <Badge variant="outline" className="hover-lift">🤝 Team Player</Badge>
                <Badge variant="outline" className="hover-lift">📚 Lifelong Learner</Badge>
                <Badge variant="outline" className="hover-lift">💡 Creative Thinker</Badge>
              </div>
            </motion.div>

            {/* Right Column - Values */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold gradient-text-purple">
                What Drives Me
              </h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="hover-lift glass-effect">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <value.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold gradient-text">
                              {value.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Personal Touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="max-w-4xl mx-auto glass-effect">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold gradient-text-cyan mb-4">
                  Beyond the Code
                </h3>
                <p className="text-muted-foreground mb-6">
                  When I&apos;m not coding, you&apos;ll find me exploring the latest tech trends, contributing to open-source projects, 
                  or brainstorming the next big idea. I believe that great software comes from understanding not just the 
                  technology, but the people who use it.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge variant="secondary" className="hover-lift">🌐 Web Development</Badge>
                  <Badge variant="secondary" className="hover-lift">📱 Mobile Apps</Badge>
                  <Badge variant="secondary" className="hover-lift">☁️ Cloud Technologies</Badge>
                  <Badge variant="secondary" className="hover-lift">🎨 UI/UX Design</Badge>
                  <Badge variant="secondary" className="hover-lift">📊 Data Solutions</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 