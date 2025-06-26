# Blog Management Guide

This guide explains how to manage the static blog for Choice Insurance Agency.

## Current Blog Structure

```
/src/app/blog/
├── page.tsx                    # Blog listing page
└── posts/
    ├── [slug]/page.tsx        # Dynamic routing handler
    ├── march-2025-medicare-advantage-vs-supplement.tsx
    ├── april-2025-understanding-life-insurance.tsx
    └── may-2025-health-insurance-changes.tsx
```

## How to Add a New Blog Post

### Step 1: Create the Blog Post File
1. Copy `/src/templates/blog-post-template.tsx`
2. Rename it to your blog post slug (e.g., `june-2025-auto-insurance-tips.tsx`)
3. Place it in `/src/app/blog/posts/`

### Step 2: Update the Template
1. Update the `metadata` object with your post details
2. Replace the content with your blog post
3. Add your blog post image to `/public/images/blog/`
4. Update the image src and alt text

### Step 3: Add to Blog Listing
1. Open `/src/lib/blog-utils.ts`
2. Add your post metadata to the `blogPostsMetadata` array
3. Open `/src/app/blog/page.tsx`
4. Add a new blog card section for your post (copy existing pattern)

### Step 4: Update Dynamic Router
1. Open `/src/app/blog/posts/[slug]/page.tsx`
2. Add your post data to the `blogPosts` object

## Blog Post Guidelines

### SEO Best Practices
- Use descriptive titles (50-60 characters)
- Write compelling meta descriptions (150-160 characters)
- Include relevant keywords naturally
- Use proper heading hierarchy (H1, H2, H3)

### Content Structure
- Start with an engaging introduction
- Use clear section headings
- Include bullet points and lists for readability
- End with a call-to-action
- Add the insurance help callout box

### Image Guidelines
- Use high-quality images (800x600 minimum)
- Optimize images for web (compress before uploading)
- Use descriptive alt text for accessibility
- Store images in `/public/images/blog/`

## Current Blog Posts

1. **March 2025**: Medicare Advantage vs. Medicare Supplement
2. **April 2025**: Understanding Life Insurance Options
3. **May 2025**: Key Health Insurance Changes

## Performance Notes

- Static blog posts load fast
- Images are optimized with Next.js Image component
- SEO metadata is properly configured
- Mobile-responsive design

## Future Enhancements (Optional)

If you want to add more features later:
- Blog categories/tags
- Search functionality
- Newsletter signup integration
- Related posts section
- Author profiles
- Comments system

## Maintenance

- Review and update blog posts quarterly
- Check for broken links
- Update insurance information as regulations change
- Monitor blog performance in Google Analytics# Blog Management Guide

This guide explains how to manage the static blog for Choice Insurance Agency.

## Current Blog Structure

```
/src/app/blog/
├── page.tsx                    # Blog listing page
└── posts/
    ├── [slug]/page.tsx        # Dynamic routing handler
    ├── march-2025-medicare-advantage-vs-supplement.tsx
    ├── april-2025-understanding-life-insurance.tsx
    └── may-2025-health-insurance-changes.tsx
```

## How to Add a New Blog Post

### Step 1: Create the Blog Post File
1. Copy `/src/templates/blog-post-template.tsx`
2. Rename it to your blog post slug (e.g., `june-2025-auto-insurance-tips.tsx`)
3. Place it in `/src/app/blog/posts/`

### Step 2: Update the Template
1. Update the `metadata` object with your post details
2. Replace the content with your blog post
3. Add your blog post image to `/public/images/blog/`
4. Update the image src and alt text

### Step 3: Add to Blog Listing
1. Open `/src/lib/blog-utils.ts`
2. Add your post metadata to the `blogPostsMetadata` array
3. Open `/src/app/blog/page.tsx`
4. Add a new blog card section for your post (copy existing pattern)

### Step 4: Update Dynamic Router
1. Open `/src/app/blog/posts/[slug]/page.tsx`
2. Add your post data to the `blogPosts` object

## Blog Post Guidelines

### SEO Best Practices
- Use descriptive titles (50-60 characters)
- Write compelling meta descriptions (150-160 characters)
- Include relevant keywords naturally
- Use proper heading hierarchy (H1, H2, H3)

### Content Structure
- Start with an engaging introduction
- Use clear section headings
- Include bullet points and lists for readability
- End with a call-to-action
- Add the insurance help callout box

### Image Guidelines
- Use high-quality images (800x600 minimum)
- Optimize images for web (compress before uploading)
- Use descriptive alt text for accessibility
- Store images in `/public/images/blog/`

## Current Blog Posts

1. **March 2025**: Medicare Advantage vs. Medicare Supplement
2. **April 2025**: Understanding Life Insurance Options
3. **May 2025**: Key Health Insurance Changes

## Performance Notes

- Static blog posts load fast
- Images are optimized with Next.js Image component
- SEO metadata is properly configured
- Mobile-responsive design

## Future Enhancements (Optional)

If you want to add more features later:
- Blog categories/tags
- Search functionality
- Newsletter signup integration
- Related posts section
- Author profiles
- Comments system

## Maintenance

- Review and update blog posts quarterly
- Check for broken links
- Update insurance information as regulations change
- Monitor blog performance in Google Analytics# Blog Management Guide

This guide explains how to manage the static blog for Choice Insurance Agency.

## Current Blog Structure

```
/src/app/blog/
├── page.tsx                    # Blog listing page
└── posts/
    ├── [slug]/page.tsx        # Dynamic routing handler
    ├── march-2025-medicare-advantage-vs-supplement.tsx
    ├── april-2025-understanding-life-insurance.tsx
    └── may-2025-health-insurance-changes.tsx
```

## How to Add a New Blog Post

### Step 1: Create the Blog Post File
1. Copy `/src/templates/blog-post-template.tsx`
2. Rename it to your blog post slug (e.g., `june-2025-auto-insurance-tips.tsx`)
3. Place it in `/src/app/blog/posts/`

### Step 2: Update the Template
1. Update the `metadata` object with your post details
2. Replace the content with your blog post
3. Add your blog post image to `/public/images/blog/`
4. Update the image src and alt text

### Step 3: Add to Blog Listing
1. Open `/src/lib/blog-utils.ts`
2. Add your post metadata to the `blogPostsMetadata` array
3. Open `/src/app/blog/page.tsx`
4. Add a new blog card section for your post (copy existing pattern)

### Step 4: Update Dynamic Router
1. Open `/src/app/blog/posts/[slug]/page.tsx`
2. Add your post data to the `blogPosts` object

## Blog Post Guidelines

### SEO Best Practices
- Use descriptive titles (50-60 characters)
- Write compelling meta descriptions (150-160 characters)
- Include relevant keywords naturally
- Use proper heading hierarchy (H1, H2, H3)

### Content Structure
- Start with an engaging introduction
- Use clear section headings
- Include bullet points and lists for readability
- End with a call-to-action
- Add the insurance help callout box

### Image Guidelines
- Use high-quality images (800x600 minimum)
- Optimize images for web (compress before uploading)
- Use descriptive alt text for accessibility
- Store images in `/public/images/blog/`

## Current Blog Posts

1. **March 2025**: Medicare Advantage vs. Medicare Supplement
2. **April 2025**: Understanding Life Insurance Options
3. **May 2025**: Key Health Insurance Changes

## Performance Notes

- Static blog posts load fast
- Images are optimized with Next.js Image component
- SEO metadata is properly configured
- Mobile-responsive design

## Future Enhancements (Optional)

If you want to add more features later:
- Blog categories/tags
- Search functionality
- Newsletter signup integration
- Related posts section
- Author profiles
- Comments system

## Maintenance

- Review and update blog posts quarterly
- Check for broken links
- Update insurance information as regulations change
- Monitor blog performance in Google Analytics