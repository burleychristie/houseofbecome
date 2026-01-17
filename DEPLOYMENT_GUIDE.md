# House of Become - Deployment Guide

## Quick Start: Deploy to GitHub

You have two options to deploy your website to GitHub:

---

## Option 1: Automated Deployment (Recommended)

### Using Terminal/Command Prompt:

1. **Open Terminal** (Mac/Linux) or **Command Prompt** (Windows)

2. **Navigate to your project folder:**
   ```bash
   cd path/to/your/houseofbecome/folder
   ```

3. **Run the deployment script:**
   
   **Mac/Linux:**
   ```bash
   bash deploy.sh
   ```
   
   **Windows:**
   ```bash
   sh deploy.sh
   ```
   
   Or simply:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: House of Become website"
   git remote add origin https://github.com/burleychristie/houseofbecome.git
   git branch -M main
   git push -u origin main --force
   ```

4. **Enter your GitHub credentials** when prompted

---

## Option 2: Manual Deployment via GitHub Web Interface

### Step-by-Step:

1. **Go to GitHub.com** and log in to your account

2. **Navigate to your repository:**
   https://github.com/burleychristie/houseofbecome

3. **Upload files:**
   - Click "Add file" → "Upload files"
   - Drag and drop all your website files:
     - index.html
     - styles.css
     - script.js
     - README.md
     - .gitignore

4. **Commit the changes:**
   - Scroll down to "Commit changes"
   - Write: "Initial commit: House of Become website"
   - Click "Commit changes"

---

## Enabling GitHub Pages

After your files are on GitHub:

1. **Go to Repository Settings:**
   - Click on "Settings" tab in your repository

2. **Navigate to Pages:**
   - In the left sidebar, click "Pages"

3. **Configure Source:**
   - Under "Source", select "main" branch
   - Keep folder as "/ (root)"
   - Click "Save"

4. **Wait for deployment:**
   - GitHub will take 1-2 minutes to build your site
   - You'll see a green checkmark when ready

5. **Visit your live site:**
   - Your website will be live at:
   - **https://burleychristie.github.io/houseofbecome/**

---

## Verifying Your Deployment

### ✅ Checklist:

- [ ] Files uploaded to GitHub repository
- [ ] GitHub Pages enabled in settings
- [ ] Website accessible at the GitHub Pages URL
- [ ] All pages and sections working correctly
- [ ] Images loading properly
- [ ] Contact form displaying correctly
- [ ] Mobile responsive design working

---

## Making Updates

### To update your website in the future:

**Option A: Via GitHub Web Interface**
1. Go to your repository
2. Click on the file you want to edit
3. Click the pencil icon (Edit)
4. Make your changes
5. Scroll down and click "Commit changes"

**Option B: Via Git Commands**
```bash
# Make your changes to files locally
git add .
git commit -m "Description of your changes"
git push origin main
```

Your site will automatically update within 1-2 minutes!

---

## Custom Domain Setup (Optional)

If you want to use your own domain (e.g., houseofbecome.com):

1. **Purchase a domain** from a registrar (GoDaddy, Namecheap, Google Domains)

2. **In GitHub Pages settings:**
   - Enter your custom domain in the "Custom domain" field
   - Click "Save"

3. **Configure DNS with your registrar:**
   - Add these DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: burleychristie.github.io
   ```

4. **Wait for DNS propagation** (can take 24-48 hours)

5. **Enable HTTPS** in GitHub Pages settings

---

## Alternative Hosting Options

### Netlify (Free, Very Easy)

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Click "Deploy site"
6. Done! Your site is live with HTTPS automatically

### Vercel (Free, Great Performance)

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"
6. Your site is live!

---

## Troubleshooting

### Issue: "Permission denied" error
**Solution:** Make sure you're logged into GitHub and have write access to the repository.

### Issue: "Repository not found"
**Solution:** Check that the repository URL is correct and the repository exists.

### Issue: GitHub Pages not building
**Solution:** 
- Check that your main file is named `index.html`
- Ensure GitHub Pages is enabled in settings
- Check the "Actions" tab for build errors

### Issue: Website looks broken
**Solution:**
- Clear your browser cache
- Check that all file paths are relative (no absolute paths)
- Verify all CSS and JS files are linked correctly

---

## Need Help?

- **GitHub Pages Documentation:** https://docs.github.com/en/pages
- **GitHub Support:** https://support.github.com

---

## 🎉 Congratulations!

Your House of Become website is now live! Share your beautiful jewelry brand with the world.

**Live URL:** https://burleychristie.github.io/houseofbecome/

---

*House of Become - Jewelry for women in transition*
