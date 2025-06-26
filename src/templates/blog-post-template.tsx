// Template for creating new blog posts
// Copy this file and rename it to your new blog post slug

import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Blog Post Title | Choice Insurance Agency',
  description: 'Your blog post description here...',
  keywords: 'insurance, your, keywords, here',
};

export default function YourBlogPost() {
  return (
    <article className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Blog Post Title</h1>
      <p className="text-gray-600 mb-6">Published: Month Day, Year</p>
      
      <div className="relative w-full h-[400px] mb-8">
        <img 
          src="/images/blog/your-image.jpg" 
          alt="Your blog post image description" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      <div className="prose prose-lg max-w-none">
        <p className="mb-6">
          Your introduction paragraph here...
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Your First Section</h2>
        
        <p className="mb-6">
          Your content here...
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Your bullet point 1</li>
          <li>Your bullet point 2</li>
          <li>Your bullet point 3</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Your Second Section</h2>
        
        <p className="mb-6">
          More content here...
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
        
        <p className="mb-6">
          Your conclusion here...
        </p>

        <div className="bg-brand-warm-beige-coral/10 border-l-4 border-brand-warm-beige-coral p-6 my-8">
          <p className="text-brand-warm-beige-coral font-semibold mb-2">Need Help with Insurance?</p>
          <p className="text-gray-700">
            Contact Choice Insurance Agency today for personalized insurance guidance and quotes.
          </p>
        </div>
      </div>
    </article>
  );
}

/*
INSTRUCTIONS FOR CREATING A NEW BLOG POST:

1. Copy this template file
2. Rename it to your blog post slug (e.g., "june-2025-auto-insurance-tips.tsx")
3. Update the metadata (title, description, keywords)
4. Replace the content with your blog post content
5. Add your blog post image to /public/images/blog/
6. Update the image src and alt text
7. Add the post metadata to /src/lib/blog-utils.ts
8. Add the post link to /src/app/blog/page.tsx

That's it! Your new blog post will be live.
*/