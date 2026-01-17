# House of Become

A sophisticated jewelry brand website for women in transition — moments of becoming, not arrival.

## About the Brand

House of Become creates fine jewelry that marks internal change, not external status. Each piece represents the moments we quietly choose ourselves.

### Brand Philosophy

- **Not Milestones**: Jewelry for crossings, not beginnings or endings
- **Woman as Curator**: Celebrating women as curators of their own lives
- **Internal Change**: Markers of personal transformation
- **Quiet Power**: Pieces that honor the wearer's knowing

## Website Features

- **Elegant Minimalist Design**: Inspired by luxury jewelry aesthetics
- **Smooth Animations**: Subtle parallax and scroll-based reveals
- **Responsive Layout**: Beautiful on all devices
- **Brand Storytelling**: Comprehensive narrative about the collection
- **Contact Form**: For customer inquiries

## Design Elements

### Color Palette
- **Velvet Crimson** (#6A0F1A): Primary brand color
- **Gilded Gold** (#D4AF37): Accent and luxury touches
- **Blush Stone** (#F2EDE7): Background and softness
- **Obsidian Ink** (#1E1B1B): Text and depth
- **Becoming Blush** (#E3C8BB): Secondary accents
- **Warm Taupe** (#B6A99E): Supporting tones

### Typography
- **Primary Serif**: Playfair Display (for headings and elegance)
- **Secondary Sans**: Inter (for body text and clarity)

## Project Structure

```
houseofbecome/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/burleychristie/houseofbecome.git
cd houseofbecome
```

2. Open `index.html` in your web browser
   - Simply double-click the file, or
   - Use a local server (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. Visit `http://localhost:8000` in your browser

### Deployment

#### GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages" section
3. Select the main branch as the source
4. Your site will be live at `https://burleychristie.github.io/houseofbecome/`

#### Netlify
1. Connect your GitHub repository to Netlify
2. Deploy automatically on each push
3. Custom domain setup available

#### Vercel
1. Import your GitHub repository
2. Automatic deployments on push
3. Zero configuration needed

## Customization

### Adding Products
Edit the `index.html` file in the collection section to add more jewelry pieces. Follow the existing structure:

```html
<div class="product-feature">
    <!-- Product images and details -->
</div>
```

### Changing Colors
Update the CSS variables in `styles.css`:

```css
:root {
    --velvet-crimson: #6A0F1A;
    --gilded-gold: #D4AF37;
    /* etc... */
}
```

### Form Integration
The contact form currently logs to console. To integrate with a backend:

1. **Formspree**: Add `action="https://formspree.io/f/YOUR_FORM_ID"` to the form
2. **Netlify Forms**: Add `netlify` attribute to the form element
3. **Custom Backend**: Update the form submission handler in `script.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images (recommended: WebP format)
- Minimal JavaScript dependencies
- CSS animations for smooth performance
- Lazy loading for images

## Future Enhancements

- [ ] E-commerce integration (Shopify/WooCommerce)
- [ ] Product detail pages
- [ ] Shopping cart functionality
- [ ] Email newsletter signup
- [ ] Blog/Journal section
- [ ] Customer testimonials
- [ ] Mobile navigation menu
- [ ] Image gallery with lightbox
- [ ] Multiple product variants
- [ ] Size guide
- [ ] Care instructions page

## Credits

**Design & Development**: House of Become Website Project
**Fonts**: Google Fonts (Playfair Display, Inter)
**Brand Assets**: House of Become

## License

© 2025 House of Become. All rights reserved.

---

**Contact**: For inquiries about House of Become jewelry, please use the contact form on the website.
