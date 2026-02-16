# Alex Morgan - UI/UX Designer Portfolio

A modern, responsive portfolio website built with React showcasing UI/UX design work and case studies.

## 🌟 Features

- **Modern Design**: Dark theme with smooth animations using Framer Motion
- **Responsive**: Fully responsive across all devices
- **Smooth Scrolling**: Seamless navigation between sections
- **Case Studies**: Detailed project pages with process breakdown
- **Contact Form**: Integrated contact form for inquiries
- **Fast Performance**: Built with Vite for optimal speed

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Git

### Local Development

1. **Clone or download this repository**

```bash
# If you haven't initialized git yet, navigate to the project folder
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

2. **Open your browser**
   - Visit `http://localhost:5173`
   - The site will hot-reload as you make changes

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
portfolio-website/
├── public/              # Static assets
├── src/
│   ├── assets/
│   │   ├── data/       # Project data
│   │   └── images/     # Your images (add here)
│   ├── components/     # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── WhyChooseMe.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── CoreCompetencies.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   └── ProjectDetail.jsx
│   ├── styles/         # Global styles
│   │   └── global.css
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization Guide

### 1. Update Personal Information

**Edit `src/components/Navbar.jsx`:**
```javascript
// Change logo and name
<span className="logo-text">Your Name</span>
```

**Edit `src/components/HeroSection.jsx`:**
```javascript
// Update hero content
<h1 className="hero-title">Your Name</h1>
<h2 className="hero-tagline">
  Your tagline here
</h2>
```

**Edit `src/components/AboutSection.jsx`:**
```javascript
// Update about text
<p>Your bio here...</p>
```

**Edit `src/components/ContactSection.jsx`:**
```javascript
// Update contact information
const contactInfo = [
  { label: 'Email', value: 'your@email.com' },
  { label: 'Phone', value: '+1 (555) 123-4567' },
  { label: 'Location', value: 'Your City, State' }
];
```

### 2. Add Your Projects

Edit `src/assets/data/projects.js`:

```javascript
export const projectsData = [
  {
    id: 'your-project-slug',
    category: 'CATEGORY · TYPE',
    title: 'Project Title',
    description: 'Short description',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    client: 'Client Name',
    duration: 'X months',
    role: 'Your Role',
    year: '2024',
    overview: 'Full overview text...',
    challenge: 'Challenge description...',
    solution: 'Solution description...',
    results: [
      { metric: '85%', label: 'Metric Name', description: 'Description' }
    ]
  }
];
```

### 3. Add Your Images

Place your images in `src/assets/images/` and import them:

```javascript
// In your component
import profileImage from '../assets/images/profile.jpg';
import projectImage from '../assets/images/project1.jpg';

// Use in JSX
<img src={profileImage} alt="Profile" />
```

**For AboutSection profile image:**
Replace the placeholder in `AboutSection.jsx`:
```jsx
<div className="about-image">
  <img src={profileImage} alt="Your Name" />
</div>
```

### 4. Update Social Links

Edit `src/components/ContactSection.jsx`:

```javascript
const socialLinks = [
  { name: 'Dribbble', url: 'https://dribbble.com/yourprofile' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
  { name: 'GitHub', url: 'https://github.com/yourusername' },
  { name: 'Email', url: 'mailto:your@email.com' }
];
```

### 5. Customize Colors

Edit `src/styles/global.css`:

```css
:root {
  --color-accent-blue: #your-color;
  --color-accent-purple: #your-color;
  /* Add more custom colors */
}
```

## 🌐 GitHub Setup & Deployment

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the "+" icon (top right) → "New repository"
3. Repository name: `portfolio-website` (or your preferred name)
4. Make it Public (or Private if you prefer)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 2: Initialize Git & Push to GitHub

In your terminal (in the project folder):

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Portfolio website"

# Add GitHub remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to GitHub Pages

**Option A: Using GitHub Pages (Free)**

1. Go to your repository on GitHub
2. Click "Settings" → "Pages" (left sidebar)
3. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: Select `main` and `/root`, then Save

4. Add this to your `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/'  // Replace with your repo name
})
```

5. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

6. Add to `package.json` scripts:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

7. Deploy:
```bash
npm run deploy
```

Your site will be live at: `https://YOUR-USERNAME.github.io/portfolio-website/`

**Option B: Using Vercel (Recommended - Easier)**

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

Your site will be live at: `https://your-project.vercel.app`

**Option C: Using Netlify**

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

Your site will be live at: `https://your-project.netlify.app`

## 🔄 Making Updates

After making changes to your code:

```bash
# Stage changes
git add .

# Commit with a message
git commit -m "Description of changes"

# Push to GitHub
git push

# If using GitHub Pages, redeploy
npm run deploy

# Vercel/Netlify will auto-deploy from GitHub
```

## 📱 Testing Responsiveness

- Chrome DevTools: F12 → Toggle device toolbar
- Test on actual devices
- Common breakpoints: 768px (tablet), 1024px (desktop)

## ⚡ Performance Tips

1. **Optimize Images**:
   - Use WebP format when possible
   - Compress images before adding
   - Use tools like [TinyPNG](https://tinypng.com)

2. **Lazy Loading**:
   - Images load as needed
   - Reduces initial load time

3. **Code Splitting**:
   - Already configured with Vite
   - Components load on demand

## 🛠️ Tech Stack

- **React 18** - UI library
- **React Router** - Navigation
- **Framer Motion** - Animations
- **Vite** - Build tool
- **CSS3** - Styling

## 📄 License

This project is free to use for your personal portfolio. Feel free to customize it!

## 🤝 Support

If you need help:
1. Check the code comments
2. Review React and Vite documentation
3. Search for specific errors online

## 🎉 You're All Set!

Your portfolio is ready to go! Just:
1. ✅ Customize the content
2. ✅ Add your images
3. ✅ Update project data
4. ✅ Push to GitHub
5. ✅ Deploy online

Good luck with your portfolio! 🚀
