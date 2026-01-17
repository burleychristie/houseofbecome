#!/bin/bash

# House of Become - GitHub Deployment Script
# This script will help you deploy your website to GitHub

echo "🏛️  House of Become - Deployment Script"
echo "========================================"
echo ""

# Configuration
REPO_URL="https://github.com/burleychristie/houseofbecome.git"
BRANCH="main"

echo "📦 Step 1: Initializing Git repository..."
git init

echo ""
echo "📝 Step 2: Adding all files..."
git add .

echo ""
echo "💬 Step 3: Creating initial commit..."
git commit -m "Initial commit: House of Become website

- Elegant jewelry brand website
- Responsive design with smooth animations
- Complete brand story and philosophy
- The Threshold Pendant showcase
- Contact form integration ready
- Inspired by luxury minimalist aesthetic"

echo ""
echo "🔗 Step 4: Setting up remote repository..."
git remote remove origin 2>/dev/null  # Remove if exists
git remote add origin $REPO_URL

echo ""
echo "🌿 Step 5: Setting main branch..."
git branch -M $BRANCH

echo ""
echo "🚀 Step 6: Pushing to GitHub..."
echo "Note: You may be prompted for your GitHub credentials"
git push -u origin $BRANCH --force

echo ""
echo "✅ Deployment Complete!"
echo ""
echo "🌐 Your website files have been pushed to:"
echo "   $REPO_URL"
echo ""
echo "🎯 Next Steps:"
echo "   1. Go to your GitHub repository"
echo "   2. Navigate to Settings > Pages"
echo "   3. Select '$BRANCH' branch as source"
echo "   4. Your site will be live at:"
echo "      https://burleychristie.github.io/houseofbecome/"
echo ""
echo "💎 House of Become - Jewelry for women in transition"
