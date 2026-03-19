# JOSSUD Images

This folder contains images for the JOSSUD website. Place your images in the appropriate subdirectories:

## Directory Structure

- **hero/** - Hero section images for home and other pages
- **impact-stories/** - Photos for impact stories and testimonials
- **programs/** - Images for programs section
- **blog/** - Blog post feature images
- **team/** - Team member photos (optional)

## Image Guidelines

### Size & Optimization
- Recommended dimensions: 1200x800px (landscape), 600x800px (portrait)
- File size: Keep under 500KB per image
- Formats: JPG for photos, PNG for graphics with transparency

### Naming Convention
- Use descriptive names: `grace-nakibuule-story.jpg`
- Use hyphens to separate words
- Include context when helpful: `vsla-group-meeting.jpg`

### Quality
- Use high-quality images that reflect warmth and inclusion
- Show real people (with permission) rather than stock photos
- Ensure images represent disability diversity

## Adding Images

1. Prepare your image
2. Save to the appropriate subfolder
3. Update references in the code using the path: `/images/subfolder/filename.jpg`

## Example Usage in Code

```tsx
<img src="/images/impact-stories/grace-story.jpg" alt="Grace's story" />

// Or with Next.js Image component:
<Image
  src="/images/impact-stories/grace-story.jpg"
  alt="Grace's story"
  width={600}
  height={400}
/>
```

## Current Placeholders

The website uses placeholder text for images. Replace these with actual images:
- Home page hero
- Programs section images
- Impact stories photos
- Blog post images
- Testimonial photos

Contact info@jossud.org if you need help optimizing images for the web.
