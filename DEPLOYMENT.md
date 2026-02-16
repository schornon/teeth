# Teeth - Dental Journal Landing Page

## Overview
This repository contains the landing page for the **Teeth - Dental Journal** iOS app, based on the template structure from schornon/the-surf-hero.

## Live Site
Once deployed, the site will be available at: **https://schornon.github.io/teeth/**

## Structure

```
teeth/
├── index.html          # Main landing page
├── faq.html            # Frequently Asked Questions
├── support.html        # Support/Contact page
├── styles.css          # Dark theme stylesheet
├── .nojekyll           # GitHub Pages configuration
├── robots.txt          # SEO crawler instructions
├── sitemap.xml         # SEO sitemap
└── assets/             # Image assets directory
    └── README.md       # Asset requirements
```

## Pages

### Home (index.html)
- Hero section with app icon and tagline
- Three feature sections with screenshots
- Call-to-action with App Store link
- Responsive navigation and footer

### FAQ (faq.html)
- 10 frequently asked questions about the app
- Topics: features, pricing, privacy, compatibility

### Support (support.html)
- Contact form (Google Form embedded)
- Support information

## Features

✓ **Dark Theme**: Modern dark color scheme  
✓ **Responsive Design**: Works on desktop, tablet, and mobile  
✓ **SEO Optimized**: Meta tags, structured data, sitemap  
✓ **App Store Integration**: Direct download links  
✓ **Fast Loading**: Minimal dependencies, optimized CSS  

## Required Assets

To complete the landing page, add these image files to the `assets/` directory:

1. **app-icon.webp** - App icon (1024x1024px recommended)
2. **app-store-button.webp** - App Store download badge
3. **screenshot-1.webp** - Dental records overview screenshot
4. **screenshot-2.webp** - Tooth tracking feature screenshot
5. **screenshot-3.webp** - Appointment reminders screenshot

All images should be in WebP format for optimal performance.

## Deployment

### GitHub Pages Setup
1. Go to repository Settings
2. Navigate to Pages section
3. Select branch as source (main or copilot/create-landing-page-teeth-app)
4. Save and wait for deployment

### Custom Domain (Optional)
To use a custom domain:
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Update canonical URLs in HTML files

## Customization

### Update Google Form
The support page includes a placeholder Google Form URL. To add your own form:
1. Create a Google Form
2. Get the embed URL
3. Replace the iframe src in `support.html`

### Update Content
- **Taglines/Descriptions**: Edit text in HTML files
- **Colors**: Modify CSS variables in `styles.css` under `:root`
- **SEO**: Update meta tags in each HTML file's `<head>`

## App Information

- **App Name**: Teeth - Dental Journal
- **App Store**: https://apps.apple.com/us/app/teeth-dental-journal/id6753301026
- **Category**: Health Application
- **Platform**: iOS 15.0+

## Copyright

© 2026 Serhii Chornonoh. All rights reserved.

## Support

For issues or questions about the landing page, create an issue in this repository.
