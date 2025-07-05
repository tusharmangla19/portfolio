"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Building2, Code, Target, FolderOpen, GraduationCap, FileText } from "lucide-react";
import { smoothScrollToSection } from "@/lib/utils";

export function HeroSection() {
  const socialLinks = [
    {
      href: "https://github.com/tusharmangla19",
      icon: <FaGithub className="h-5 w-5" />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/tushar-mangla",
      icon: <FaLinkedin className="h-5 w-5" />,
      label: "LinkedIn",
    },
    {
      href: "mailto:tusharmangla.dev@gmail.com",
      icon: <FaEnvelope className="h-5 w-5" />,
      label: "Email",
    },
    {
      href: "tel:+919205608639",
      icon: <FaPhone className="h-5 w-5" />,
      label: "Phone",
    },
  ];

  const highlights = [
    {
      icon: <Building2 className="h-5 w-5 text-blue-500" />,
      value: "8 Months",
      label: "at IIT Delhi",
      gradient: "gradient-text-blue",
    },
    {
      icon: <Code className="h-5 w-5 text-purple-500" />,
      value: "Full Stack",
      label: "Developer",
      gradient: "gradient-text-purple",
    },
    {
      icon: <Target className="h-5 w-5 text-cyan-500" />,
      value: "200+",
      label: "DSA Problems",
      gradient: "gradient-text-cyan",
    },
    {
      icon: <FolderOpen className="h-5 w-5 text-orange-500" />,
      value: "7",
      label: "Projects",
      gradient: "gradient-text-warm",
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-green-500" />,
      value: "MCA",
      label: "Graduate",
      gradient: "gradient-text-blue",
    },
  ];

  const scrollToSection = (href: string) => {
    smoothScrollToSection(href);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-bg-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <Avatar className="h-32 w-32 relative z-10 hover-lift">
                <AvatarImage src="/images/image.jpg" alt="Tushar Mangla" className="object-cover" />
                <AvatarFallback className="text-3xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">TM</AvatarFallback>
              </Avatar>
            </motion.div>
          </div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold gradient-text animate-gradient"
            >
              Tushar Mangla
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2"
            >
              <Badge variant="secondary" className="gradient-card hover-lift">
                Full Stack Developer
              </Badge>
              <Badge variant="secondary" className="gradient-card hover-lift">
                React Native Developer
              </Badge>
              <Badge variant="secondary" className="gradient-card hover-lift">
                Blockchain Developer
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center gap-2 text-muted-foreground"
            >
              <FaMapMarkerAlt className="h-4 w-4 text-blue-500" />
              <span>Faridabad, Haryana</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              A passionate developer with experience in building scalable web applications,
              mobile apps, and blockchain solutions. Currently pursuing MCA with hands-on
              experience in React, React Native, and modern web technologies.
            </motion.p>
          </div>

          {/* Highlights Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
              >
                <Card className="gradient-card hover-lift hover-glow transition-all duration-300 p-4 text-center">
                  <div className="space-y-2">
                    <div className="flex justify-center">
                      {highlight.icon}
                    </div>
                    <div className={`text-xl font-bold ${highlight.gradient}`}>
                      {highlight.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {highlight.label}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                asChild
                className="hover-lift hover-glow gradient-border transition-all duration-300"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  {link.icon}
                  {link.label}
                </a>
              </Button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="gradient-bg hover-lift hover-glow transition-all duration-300 text-white font-semibold"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold hover-lift hover-glow transition-all duration-300 shadow-lg"
            >
              <a
                href="https://your-resume-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                View Resume
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="hover-lift gradient-border transition-all duration-300"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 