# Tushar Mangla - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS, showcasing my skills, projects, and professional experience.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Navigation**: Smooth scrolling navigation with fixed header
- **Project Showcases**: Detailed project descriptions with video demo support
- **Contact Integration**: Direct contact links and social media integration
- **Performance Optimized**: Built with Next.js 14 and optimized for speed

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React + React Icons
- **Animations**: Framer Motion
- **Deployment**: Ready for Vercel/Netlify

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── AboutSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── SkillsSection.tsx
│   └── ui/
│       └── [shadcn components]
└── lib/
    └── utils.ts
```

## 🎯 Sections

### 1. **Hero Section**
- Personal introduction
- Professional titles
- Social media links
- Call-to-action buttons

### 2. **About Section**
- Personal journey
- Core competencies
- Professional highlights

### 3. **Experience Section**
- IIT Delhi internship details
- Key achievements
- Technologies used

### 4. **Skills Section**
- Technical skills by category
- Programming languages
- Frameworks and tools
- Problem-solving achievements

### 5. **Projects Section**
- **Centralized Parent Application** (React Native, Firebase)
- **Spiritual Tracker** (React.js, Firebase) - Live application
- **Decentralized Voting Application** (React.js, Solidity)
- **Web Highlight Sync Tool** (React.js, Node.js, MongoDB)

### 6. **Education Section**
- Master of Computer Applications (2023-2025)
- Bachelor in Computer Applications (2020-2023)

### 7. **Achievements Section**
- Professional accomplishments
- Problem-solving statistics
- Team contributions

### 8. **Contact Section**
- Contact information
- Social media links
- Resume download (placeholder)

## 🎨 Design Features

- **Smooth Animations**: Framer Motion for professional transitions
- **Dark/Light Mode**: Automatic theme support
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG compliant
- **Modern UI**: Clean, minimal design with hover effects

## 📱 Video Integration

The portfolio includes video demo support for projects:
- Video placeholder dialogs for each project
- Expected video files in `/public/videos/` directory
- Responsive video containers

## 🔧 Getting Started

1. **Installation**
   ```bash
   npm install
   ```

2. **Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Start Production Server**
   ```bash
   npm start
   ```

## 📄 Customization

### Adding Your Own Content

1. **Personal Information**: Update contact details in `ContactSection.tsx`
2. **Projects**: Modify the projects array in `ProjectsSection.tsx`
3. **Experience**: Update experience data in `ExperienceSection.tsx`
4. **Skills**: Customize skills in `SkillsSection.tsx`
5. **Education**: Update education details in `EducationSection.tsx`

### Adding Videos

1. Place video files in `/public/videos/` directory
2. Update `videoUrl` in project objects
3. Replace placeholder video containers with actual video elements

### Styling

- Global styles in `src/app/globals.css`
- Component-specific styles using Tailwind classes
- Custom animations and effects included

## 🌐 Deployment

The portfolio is ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

## 📊 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js App Router

## 🔗 Links

- **Portfolio**: [Your Domain]
- **LinkedIn**: [https://linkedin.com/in/tushar-mangla](https://linkedin.com/in/tushar-mangla)
- **GitHub**: [https://github.com/tusharmangla19](https://github.com/tusharmangla19)
- **Email**: [tusharmangla.dev@gmail.com](mailto:tusharmangla.dev@gmail.com)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio. If you have suggestions for improvements, please open an issue or submit a pull request.

---

**Built with ❤️ by Tushar Mangla**
