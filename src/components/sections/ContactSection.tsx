"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Mail, MessageSquare, Download } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: <FaEnvelope className="h-5 w-5" />,
      label: "Email",
      value: "tusharmangla.dev@gmail.com",
      href: "mailto:tusharmangla.dev@gmail.com",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: <FaPhone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9205608639",
      href: "tel:+919205608639",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: <FaMapMarkerAlt className="h-5 w-5" />,
      label: "Location",
      value: "Faridabad, Haryana",
      href: "https://maps.google.com/?q=Faridabad,Haryana",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/tusharmangla19",
      icon: <FaGithub className="h-6 w-6" />,
      color: "hover:text-gray-900",
      bgColor: "hover:bg-gray-50",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/tushar-mangla",
      icon: <FaLinkedin className="h-6 w-6" />,
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50",
    },
    {
      name: "Email",
      url: "mailto:tusharmangla.dev@gmail.com",
      icon: <FaEnvelope className="h-6 w-6" />,
      color: "hover:text-red-600",
      bgColor: "hover:bg-red-50",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, collaborating on interesting projects, 
            or just having a chat about technology and development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Contact Information
                </h3>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors"
                      >
                        <div className={`p-3 rounded-lg ${contact.bgColor} ${contact.color}`}>
                          {contact.icon}
                        </div>
                        <div className="space-y-1">
                          <div className="font-semibold text-foreground">
                            {contact.label}
                          </div>
                          <div className="text-muted-foreground">
                            {contact.value}
                          </div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Quick Actions
                </h3>
                <p className="text-muted-foreground">
                  Connect with me on social media or download my resume for a detailed overview of my experience.
                </p>
              </div>

              <Card className="p-6 space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Social Media</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        asChild
                        className={`transition-all ${social.color} ${social.bgColor}`}
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          {social.icon}
                          {social.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Resume</h4>
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      // This would trigger a download of the resume
                      // For now, it's a placeholder
                      alert("Resume download will be implemented soon!");
                    }}
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <div className="space-y-6">
                <MessageSquare className="h-12 w-12 mx-auto text-primary" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    Let&apos;s Work Together
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    I&apos;m currently open to new opportunities and exciting projects. 
                    Whether you&apos;re looking for a developer or want to collaborate, I&apos;d love to hear from you.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    asChild
                    className="transition-all hover:scale-105"
                  >
                    <a href="mailto:tusharmangla.dev@gmail.com">
                      <Mail className="h-5 w-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="transition-all hover:scale-105"
                  >
                    <a href="https://linkedin.com/in/tushar-mangla" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="h-5 w-5 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 pt-8 border-t border-border"
      >
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>© 2024 Tushar Mangla. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Built with Next.js, React, and Tailwind CSS
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
} 