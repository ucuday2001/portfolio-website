# 📘 Complete GitHub Setup Guide

Step-by-step guide to get your portfolio on GitHub and deployed online.

## 📋 Prerequisites

Before starting, make sure you have:
- ✅ A GitHub account ([Sign up here](https://github.com/join))
- ✅ Git installed on your computer ([Download here](https://git-scm.com/downloads))
- ✅ Your portfolio customized and ready

## 🚀 Part 1: Create GitHub Repository

### Step 1: Create New Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **"+"** icon in the top right
3. Select **"New repository"**

### Step 2: Repository Settings

Fill in the following:

- **Repository name:** `portfolio-website` (or your preferred name)
- **Description:** "My UI/UX designer portfolio website"
- **Visibility:** 
  - ✅ **Public** (recommended - free hosting works with public repos)
  - OR Private (if you don't want others to see the code)
- **Initialize repository:**
  - ❌ **DO NOT** check "Add a README file"
  - ❌ **DO NOT** add .gitignore
  - ❌ **DO NOT** choose a license
  
  *(We already have these files in the project)*

### Step 3: Create Repository

Click **"Create repository"**

You'll see a page with setup instructions - keep this page open!

## 💻 Part 2: Connect Your Local Project to GitHub

### Step 1: Open Terminal/Command Prompt

**On Windows:**
- Press `Win + R`
- Type `cmd` and press Enter
- Navigate to your project: `cd path\to\portfolio-website`

**On Mac:**
- Press `Cmd + Space`
- Type `terminal` and press Enter
- Navigate to your project: `cd path/to/portfolio-website`

### Step 2: Verify You're in the Right Folder

```bash
# Check you're in the project folder
ls

# You should see files like:
# package.json, src/, index.html, etc.
```

### Step 3: Initialize Git Repository

```bash
# Initialize git
git init
```

You should see: `Initialized empty Git repository`

### Step 4: Add All Files

```bash
# Add all files to git
git add .

# Check what will be committed
git status
```

### Step 5: Create First Commit

```bash
# Create your first commit
git commit -m "Initial commit: Portfolio website"
```

### Step 6: Add GitHub Remote

**IMPORTANT:** Replace `YOUR-USERNAME` with your actual GitHub username!

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR-USERNAME/portfolio-website.git

# Verify it was added
git remote -v
```

### Step 7: Push to GitHub

```bash
# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**If prompted for credentials:**
- Username: Your GitHub username
- Password: Use a Personal Access Token (not your GitHub password)

### 🔑 Setting Up Personal Access Token (if needed)

If you get authentication errors:

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "Portfolio Upload"
4. Check the "repo" checkbox
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)
7. Use this token as your password when pushing

### ✅ Verify Upload

Go back to your GitHub repository page and refresh. You should see all your files!

## 🌐 Part 3: Deploy Online (Choose One Method)

### Method A: Vercel (Recommended - Easiest)

**Best for:** Quick deployment, automatic updates

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up"
   - Choose "Continue with GitHub"

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your `portfolio-website` repository
   - Click "Import"

3. **Configure**
   - Framework Preset: **Vite**
   - Root Directory: `./` (leave as is)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Leave everything else default

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes

5. **Done!**
   - Your site is live at: `https://your-portfolio.vercel.app`
   - Click "Visit" to see it
   - Share this URL with everyone!

**Bonus:** Every time you push to GitHub, Vercel automatically updates your site!

---

### Method B: GitHub Pages (Free, Good Option)

**Best for:** Free hosting on GitHub

1. **Update Vite Config**

Edit `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/'  // ← Add this line (use your repo name)
})
```

2. **Install gh-pages**

```bash
npm install --save-dev gh-pages
```

3. **Update package.json**

Add these scripts to `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. **Deploy**

```bash
npm run deploy
```

Wait 1-2 minutes, then visit:
`https://YOUR-USERNAME.github.io/portfolio-website/`

5. **Enable GitHub Pages (if needed)**
   - Go to your repo → Settings → Pages
   - Source: `gh-pages` branch
   - Click Save

**To update your site:**
```bash
npm run deploy
```

---

### Method C: Netlify (Another Good Option)

**Best for:** Easy deployment with custom domain support

1. **Sign up for Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Sign up"
   - Choose "GitHub"

2. **Import Project**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your `portfolio-website` repository

3. **Configure**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Done!**
   - Site is live at: `https://random-name.netlify.app`
   - You can change the subdomain in Site settings

---

## 🔄 Making Updates After Deployment

### Update Your Portfolio

1. Make changes to your files
2. Save everything

### Push to GitHub

```bash
# Stage all changes
git add .

# Commit with a descriptive message
git commit -m "Updated project images and bio"

# Push to GitHub
git push
```

### Auto-Deployment
- **Vercel/Netlify:** Changes automatically deploy in 1-2 minutes
- **GitHub Pages:** Run `npm run deploy` again

## 🎨 Custom Domain (Optional)

Want `yourname.com` instead of `.vercel.app`?

### Buy a Domain
- [Namecheap](https://www.namecheap.com) ($8-12/year)
- [Google Domains](https://domains.google)
- [GoDaddy](https://www.godaddy.com)

### Connect to Vercel
1. Vercel → Your project → Settings → Domains
2. Add your domain
3. Follow DNS instructions

### Connect to Netlify
1. Netlify → Domain settings → Add custom domain
2. Follow DNS instructions

### Connect to GitHub Pages
1. Add file `public/CNAME` with your domain
2. Update your domain's DNS:
   - Type: A
   - Host: @
   - Value: GitHub Pages IP (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))

## ❓ Troubleshooting

### Problem: "Permission denied" when pushing

**Solution:**
```bash
# Set up Personal Access Token
git remote set-url origin https://YOUR-TOKEN@github.com/YOUR-USERNAME/portfolio-website.git
```

### Problem: Build fails on Vercel/Netlify

**Solution:**
- Check that all dependencies are in `package.json`
- Make sure there are no console errors locally
- Check build logs for specific errors

### Problem: Site shows 404

**Solution:**
- Vercel/Netlify: Wait a few minutes
- GitHub Pages: Check Settings → Pages is enabled
- Clear browser cache

### Problem: Changes not showing

**Solution:**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear cache
- Wait 5 minutes for deployment

## 📞 Need Help?

1. Check the error message carefully
2. Search the error on Google
3. Check [Vercel docs](https://vercel.com/docs)
4. Check [GitHub Pages docs](https://docs.github.com/pages)

## ✅ Checklist

Before deploying, verify:

- [x] All personal information updated
- [x] Projects added with real content
- [x] Images optimized and working
- [x] Contact form tested
- [x] Links working (social media, etc.)
- [x] Responsive on mobile
- [x] No console errors
- [x] Committed and pushed to GitHub

## 🎉 You're Live!

Congratulations! Your portfolio is now online and accessible to everyone!

**Share your URL:**
- Add to resume
- Share on LinkedIn
- Include in email signature
- Tweet about it!

**Next Steps:**
- Monitor Google Analytics (optional)
- Get feedback from friends
- Keep adding projects
- Update regularly

Good luck! 🚀
