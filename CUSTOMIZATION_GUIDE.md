# 🎨 Quick Customization Checklist

Follow this checklist to quickly personalize your portfolio!

## ✅ Step 1: Basic Information (5 minutes)

### Update Your Name & Title
**File:** `src/components/Navbar.jsx` (line ~42)
```jsx
<span className="logo-text">Your Name Here</span>
```

**File:** `src/components/HeroSection.jsx` (lines ~54-62)
```jsx
<h1 className="hero-title">Your Name Here</h1>
<h2 className="hero-tagline">
  Designing <span className="gradient-text">Your Style</span> Digital Experiences
</h2>
<p className="hero-description">
  Your custom tagline here...
</p>
```

### Update Document Title
**File:** `index.html` (line 7)
```html
<title>Your Name - UI/UX Designer</title>
```

## ✅ Step 2: About Section (10 minutes)

**File:** `src/components/AboutSection.jsx` (lines ~50-65)

1. Replace the bio text with your own story
2. Update the skills array:
```jsx
const skills = ['Your Skill 1', 'Your Skill 2', 'Your Skill 3'];
```

3. Add your profile image:
```jsx
// Import at top
import profileImage from '../assets/images/your-photo.jpg';

// Replace the placeholder (line ~31)
<img src={profileImage} alt="Your Name" />
```

## ✅ Step 3: Projects (20 minutes)

**File:** `src/assets/data/projects.js`

Replace the dummy data with your real projects:

```javascript
{
  id: 'unique-project-id',        // Used in URL
  category: 'YOUR CATEGORY',       // e.g., "WEB DESIGN · MOBILE"
  title: 'Your Project Name',
  description: 'Brief description (1-2 sentences)',
  tags: ['Tag1', 'Tag2'],
  client: 'Client Name',
  duration: 'Time taken',
  role: 'Your role',
  year: '2024',
  overview: 'Detailed project overview...',
  challenge: 'What was the problem?...',
  solution: 'How did you solve it?...',
  results: [
    { metric: '85%', label: 'Result Title', description: 'Details' }
  ]
}
```

Add 3-6 projects for best results!

## ✅ Step 4: Contact Information (5 minutes)

**File:** `src/components/ContactSection.jsx` (lines ~42-56)

```javascript
const contactInfo = [
  {
    label: 'Email',
    value: 'your.email@example.com'  // ← Change this
  },
  {
    label: 'Phone',
    value: '+1 (XXX) XXX-XXXX'       // ← Change this
  },
  {
    label: 'Location',
    value: 'Your City, State'         // ← Change this
  }
];
```

### Update Social Links (lines ~58-63)
```javascript
const socialLinks = [
  { name: 'Dribbble', url: 'https://dribbble.com/yourprofile' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
  { name: 'GitHub', url: 'https://github.com/yourusername' },
  { name: 'Email', url: 'mailto:your@email.com' }
];
```

## ✅ Step 5: Footer (2 minutes)

**File:** `src/components/Footer.jsx` (lines ~9-11)

```jsx
<p>Currently accepting new projects for Q1 2025...</p>
```
Change the year/quarter as needed

```jsx
<p>© 2025 Your Name. Your custom text.</p>
```

## ✅ Step 6: Skills (10 minutes)

**File:** `src/components/SkillsSection.jsx` (lines ~8-53)

Update the skills and proficiency levels:

```javascript
{
  title: 'Your Category',
  color: '#5b8def',  // Choose your color
  skills: [
    { name: 'Skill Name', level: 95 },  // 0-100
    { name: 'Skill Name', level: 90 },
    // Add more...
  ]
}
```

## ✅ Step 7: Add Your Images

### Where to put images:
Create folder: `src/assets/images/`

### Common images needed:
1. **Profile photo** - for About section
2. **Project thumbnails** - 3-6 images
3. **Project details** - Screenshots/mockups
4. **Process images** - Optional

### How to add images:

1. **For Profile Image:**
```jsx
// In AboutSection.jsx
import profilePic from '../assets/images/profile.jpg';

// Replace placeholder
<img src={profilePic} alt="Your Name" />
```

2. **For Project Cards:**
```jsx
// In ProjectsSection.jsx
import project1 from '../assets/images/project1.jpg';

// Replace placeholder
<img src={project1} alt="Project name" />
```

## ✅ Step 8: Custom Colors (Optional)

**File:** `src/styles/global.css` (lines 6-16)

```css
:root {
  --color-accent-blue: #5b8def;     /* Change to your brand color */
  --color-accent-purple: #8b7df5;
  --color-accent-teal: #3ba9a3;
  /* Add more custom colors */
}
```

## 🚀 Test Your Changes

After each change:

1. Save the file
2. Check browser (should auto-reload)
3. Test on mobile (Chrome DevTools: F12 → Device toolbar)

## 📝 Common Issues & Fixes

**Issue:** Changes not showing
- **Fix:** Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Issue:** Build errors
- **Fix:** Check console for typos, missing commas, or unclosed brackets

**Issue:** Images not loading
- **Fix:** Check file path, file exists, and import statement

## 🎯 Priority Order

Do these in order for fastest results:

1. ✅ Name & title (Navbar, Hero) - 5 min
2. ✅ Contact info - 5 min
3. ✅ About section text - 10 min
4. ✅ Add 2-3 projects - 20 min
5. ✅ Add images - 15 min
6. ✅ Test & deploy - 10 min

**Total time:** ~1 hour for basic customization!

## 🎨 Design Tips

1. **Keep it simple** - Don't over-customize
2. **Stay consistent** - Use the same color palette
3. **Quality over quantity** - 3 great projects > 10 mediocre ones
4. **Test responsiveness** - Always check on mobile

## 📤 Ready to Deploy?

Once you're happy with your changes:

```bash
# Save and commit changes
git add .
git commit -m "Customized portfolio"
git push

# Deploy (if using GitHub Pages)
npm run deploy
```

That's it! Your portfolio is ready to impress! 🎉
