"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ExternalLink, Github, Play, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const featuredProjects = [
    {
      title: "Mindly",
      titleGradient: "gradient-text-blue",
      description: "A journaling application with AI features including AI-powered writing suggestions, image to text conversion, mood analytics, and daily reflection prompts.",
      longDescription: "Mindly is an intelligent journaling platform that leverages AI to enhance your writing experience. It combines the traditional practice of journaling with modern AI capabilities to provide personalized suggestions, extract text from images, analyze emotions, and inspire daily reflection.",
      technologies: ["React.js", "Node.js", "Gemini AI", "MongoDB", "Express.js", "Machine Learning"],
      features: [
        "AI-Powered Writing Suggestions: Get context-aware, personalized suggestions from Gemini AI to keep your journaling flowing",
        "Image to Text Conversion: Upload a photo of handwritten or printed text and let Gemini AI extract it directly into your journal entry",
        "Mood & Sentiment Analytics: Track your emotional journey with mood detection, sentiment analysis, and beautiful visualizations of your progress",
        "Daily Reflection Prompts: Get inspired every day with unique, thought-provoking prompts to spark deeper self-reflection"
      ],
      status: "Live",
      team: "Solo Project",
      videoUrl: "/videos/mindly-demo.mp4",
      demoUrl: "https://mindly-t.vercel.app",
      githubUrl: "https://github.com/tusharmangla19/Mindly",
      image: "/images/mindly-preview.jpg",
    },
    {
      title: "chessMaster",
      titleGradient: "gradient-text-purple",
      description: "A multiplayer chess playing platform with video calling feature, allowing players to connect face-to-face while playing chess online.",
      longDescription: "chessMaster is a comprehensive chess platform that combines the classic game of chess with modern video communication technology. Players can enjoy real-time chess matches while seeing and talking to their opponents through integrated video calls.",
      technologies: ["React.js", "Node.js", "Socket.io", "WebRTC", "MongoDB", "Express.js", "Chess.js"],
      features: [
        "Real-Time Video Calls: Play chess face-to-face with smooth video streaming and full audio and camera controls",
        "Create & Join Rooms: Create private rooms with custom codes to play with friends, or join existing rooms",
        "Quick Multiplayer Games: Start multiplayer games instantly by finding available opponents or connecting with other players",
        "AI Opponents - 3 Difficulty Levels: Practice against intelligent computer opponents with Easy, Medium, and Hard difficulty levels",
        "Secure & Reliable: Your games are automatically saved and protected with robust system that handles connection issues gracefully",
        "Instant Move Updates: Experience smooth, real-time gameplay with instant move synchronization"
      ],
      status: "Live",
      team: "Solo Project",
      videoUrl: "/videos/chess-master-demo.mp4",
      demoUrl: "https://chessmaster-production-4d6b.up.railway.app/",
      githubUrl: "https://github.com/tusharmangla19/chessMaster",
      image: "/images/chess-master-preview.jpg",
    },
    {
      title: "VidCraft",
      titleGradient: "gradient-text-cyan",
      description: "A comprehensive video editing tool that allows users to trim and download YouTube videos, merge videos, extract audio, and change video speed.",
      longDescription: "VidCraft is a powerful video processing platform that provides essential video editing capabilities. From downloading and trimming YouTube videos to merging multiple clips and extracting audio, VidCraft makes video editing accessible and efficient.",
      technologies: ["React.js", "Node.js", "FFmpeg", "YouTube API", "Express.js", "Multer"],
      features: [
        "YouTube Video Trimming & Download: Download YouTube videos and trim them to specific time ranges",
        "Video Merging: Combine multiple video files into a single seamless video",
        "Audio Extraction: Extract high-quality audio tracks from video files in various formats",
        "Speed Control: Adjust video playback speed from 0.5x to 3x for slow motion or fast-forward effects",
        "Format Support: Support for multiple video and audio formats (MP4, AVI, MOV, MP3, WAV, etc.)",
        "Batch Processing: Process multiple videos simultaneously for efficient workflow"
      ],
      status: "In Development",
      team: "Solo Project",
      videoUrl: "/videos/vidcraft-demo.mp4",
      demoUrl: null,
      githubUrl: null,
      image: "/images/vidcraft-preview.jpg",
    },
  ];

  const otherProjects = [
    {
      title: "Centralized Parent Application",
      titleGradient: "gradient-text-warm",
      description: "Developed a mobile application that unified multiple child-focused educational apps under the CSC Bal Vidyalaya Program, providing a centralized platform for users.",
      longDescription: "A comprehensive mobile application that serves as a central hub for all educational applications under the CSC Bal Vidyalaya Program. The app provides secure authentication, seamless navigation between child applications, and a unified user experience.",
      technologies: ["React Native", "Firebase", "OAuth", "JavaScript", "Mobile Development"],
      features: [
        "Implemented a secure authentication system with Single Sign-On (SSO), OTP verification, and Google OAuth integration",
        "Utilized React Native for cross-platform development, ensuring consistent performance across iOS and Android",
        "Designed user-friendly interface with seamless navigation between multiple child applications",
        "Integrated Firebase for real-time data synchronization and secure user management",
      ],
      status: "Completed",
      team: "Team of 3 developers",
      videoUrl: "/videos/centralized-parent-app.mp4",
      demoUrl: null,
      githubUrl: null,
      image: "/images/centralized-app-preview.jpg",
    },
    {
      title: "Spiritual Tracker",
      titleGradient: "gradient-text-blue",
      description: "Developed a web application for ISKCON devotees to log daily spiritual practices, track progress, and motivate each other in a shared platform. Currently has 20+ active users.",
      longDescription: "A comprehensive spiritual tracking application designed for ISKCON devotees to monitor their daily spiritual practices. The platform includes personal tracking, community features, and detailed analytics to help users maintain and improve their spiritual journey.",
      technologies: ["React.js", "Firebase", "JavaScript", "CSS3", "Responsive Design"],
      features: [
        "Implemented personalized and group tracking features to foster accountability and community engagement",
        "Incorporated automated analytics (weekly and monthly averages) to help devotees analyze their spiritual practices",
        "Built responsive design ensuring seamless experience across all devices",
        "Created community features allowing devotees to motivate and support each other",
      ],
      status: "Live",
      team: "Solo Project",
      videoUrl: "/videos/spiritual-tracker.mp4",
      demoUrl: "https://iyf-sadhana.netlify.app/",
      githubUrl: null,
      image: "/images/spiritual-tracker-preview.jpg",
    },
    {
      title: "Decentralized Voting Application",
      titleGradient: "gradient-text-purple",
      description: "Developed a blockchain-based voting system using Ethereum smart contracts, ensuring secure, transparent, and tamper-proof elections with real-time interaction between the React.js frontend and Ethereum via Web3.js.",
      longDescription: "A revolutionary voting system built on blockchain technology that ensures complete transparency, security, and immutability of votes. The application demonstrates the practical implementation of blockchain in democratic processes.",
      technologies: ["React.js", "Solidity", "Web3.js", "Ethereum", "Smart Contracts", "Ganache"],
      features: [
        "Developed secure smart contracts for transparent and tamper-proof voting mechanism",
        "Implemented real-time interaction between React.js frontend and Ethereum blockchain",
        "Utilized Ganache for local testing and development environment",
        "Created secure voter authentication system with blockchain-based identity verification",
      ],
      status: "Completed",
      team: "Solo Project",
      videoUrl: "/videos/decentralized-voting.mp4",
      demoUrl: null,
      githubUrl: "https://github.com/tusharmangla19/Decentralized-Voting-App/tree/main/Voting%20Dapp",
      image: "/images/voting-app-preview.jpg",
    },
    {
      title: "Web Highlight Sync Tool",
      titleGradient: "gradient-text-cyan",
      description: "Developing a Chrome extension that enables text highlighting and synchronization with a React app, ensuring seamless management via a RESTful backend.",
      longDescription: "An innovative productivity tool that bridges web browsing and knowledge management. The extension allows users to highlight text on any webpage and sync it to a centralized React application for better organization and retrieval.",
      technologies: ["React.js", "Node.js", "MongoDB", "Chrome Extension API", "RESTful APIs"],
      features: [
        "Developing Chrome extension with text highlighting capabilities across all websites",
        "Building RESTful API backend for seamless data synchronization and management",
        "Designing React app for organized viewing, categorization, and searching of highlights",
        "Implementing real-time sync between browser extension and web application",
      ],
      status: "In Progress",
      team: "Solo Project",
      videoUrl: "/videos/highlight-sync-tool.mp4",
      demoUrl: null,
      githubUrl: null,
      image: "/images/highlight-tool-preview.jpg",
    },
  ];

  const displayedProjects = showAllProjects ? [...featuredProjects, ...otherProjects] : featuredProjects;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-500";
      case "Completed":
        return "bg-blue-500";
      case "In Progress":
      case "In Development":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section id="projects" className="py-20 section-bg-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest technical projects, from <span className="gradient-text-purple font-semibold">AI-powered applications</span> to <span className="gradient-text-cyan font-semibold">real-time multiplayer platforms</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full gradient-card hover-lift hover-glow transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <CardTitle className={`text-xl font-bold ${project.titleGradient}`}>
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant="secondary" 
                          className={`${getStatusColor(project.status)} text-white hover-lift`}
                        >
                          {project.status}
                        </Badge>

                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs hover-lift">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs hover-lift">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {project.team}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {/* Video Dialog */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="flex items-center gap-2 hover-lift">
                          <Play className="h-4 w-4" />
                          Demo
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle className={project.titleGradient}>{project.title} - Demo</DialogTitle>
                        </DialogHeader>
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center gradient-card">
                          <div className="text-center space-y-4">
                            <Play className="h-16 w-16 mx-auto text-muted-foreground" />
                            <p className="text-muted-foreground">
                              Video demo will be available soon
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Expected video: {project.videoUrl}
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* Live Demo Button */}
                    {project.demoUrl && (
                      <Button variant="outline" size="sm" asChild className="hover-lift">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live
                        </a>
                      </Button>
                    )}

                    {/* GitHub Button */}
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild className="hover-lift">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}

                    {/* View Details Dialog */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="default" size="sm" className="gradient-bg hover-lift text-white">
                          Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className={`text-2xl ${project.titleGradient}`}>{project.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <p className="text-muted-foreground">{project.longDescription}</p>
                          
                          <div className="space-y-4">
                            <h4 className="font-semibold text-foreground">Key Features:</h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-muted-foreground text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-4">
                            <h4 className="font-semibold text-foreground">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="secondary" className="hover-lift">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-4 pt-4">
                            {project.demoUrl && (
                              <Button asChild className="gradient-bg hover-lift text-white">
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Live Demo
                                </a>
                              </Button>
                            )}
                            {project.githubUrl && (
                              <Button variant="outline" asChild className="hover-lift">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                  <Github className="h-4 w-4 mr-2" />
                                  View Code
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Show All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="hover-lift gradient-border transition-all duration-300"
          >
            {showAllProjects ? (
              <>
                <ChevronUp className="h-4 w-4 mr-2" />
                Show Featured Projects
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-2" />
                Show All Projects ({featuredProjects.length + otherProjects.length})
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 