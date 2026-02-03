//import { blogService } from '@/services/blog.service';
import { MetadataRoute } from 'next';

/**
 * Sitemap.xml Generation
 * Automatically includes all published blogs
 * Next.js will serve this at /sitemap.xml
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic blog pages
//   const blogs = await blogService.getPublishedBlogs();
//   const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
//     url: `${baseUrl}/blogs/${blog.slug}`,
//     lastModified: blog.updatedAt,
//     changeFrequency: 'weekly',
//     priority: 0.7,
//   }));

  //return [...staticPages, ...blogPages];
    return [...staticPages];
}

