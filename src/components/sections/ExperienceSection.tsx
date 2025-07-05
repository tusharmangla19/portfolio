"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { MapPin, Calendar, Building2, Users, Code, Target } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey in the tech industry, building impactful solutions and gaining valuable experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="gradient-card hover-lift hover-glow transition-all duration-300">
            <CardHeader className="pb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-2">
                  <CardTitle className="text-2xl gradient-text-blue">
                    Full Stack Developer Intern
                  </CardTitle>
                  <div className="flex items-center gap-2 text-lg font-semibold gradient-text-purple">
                    <Building2 className="h-5 w-5" />
                    IIT Delhi
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>March 2024 - November 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Delhi, India</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  Project: Centralized Parent Application for CSC Bal Vidyalaya Program
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Developed a comprehensive mobile application that serves as a unified platform for 
                  multiple child-focused educational apps under the CSC Bal Vidyalaya Program. 
                  The application provides a centralized experience for users to access various educational resources 
                  and services seamlessly.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Key Achievements & Responsibilities:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Implemented a secure authentication system with Single Sign-On (SSO), 
                      OTP verification, and Google OAuth integration 
                      to ensure user security and seamless access across multiple applications
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Utilized React Native for cross-platform development, 
                      ensuring consistent performance across iOS and Android devices 
                      while maintaining a single codebase
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Designed and implemented a user-friendly interface with 
                      intuitive navigation that allows seamless transition between 
                      multiple child applications within the platform
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Integrated Firebase for real-time data synchronization, 
                      secure user management, and cloud storage solutions 
                      to ensure data reliability and accessibility
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Collaborated with a team of 3 developers and worked closely with 
                      project stakeholders to ensure timely delivery and 
                      adherence to project requirements and quality standards
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="hover-lift">React Native</Badge>
                  <Badge variant="secondary" className="hover-lift">Firebase</Badge>
                  <Badge variant="secondary" className="hover-lift">JavaScript</Badge>
                  <Badge variant="secondary" className="hover-lift">OAuth</Badge>
                  <Badge variant="secondary" className="hover-lift">Google Authentication</Badge>
                  <Badge variant="secondary" className="hover-lift">Mobile Development</Badge>
                  <Badge variant="secondary" className="hover-lift">Cross-platform Development</Badge>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Team of 3 developers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Project completed successfully</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
} 