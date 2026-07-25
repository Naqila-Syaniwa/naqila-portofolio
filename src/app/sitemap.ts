import type { MetadataRoute } from 'next';
import { projects } from '@/lib/content';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = ['', '/about', '/skills', '/projects', '/experiences', '/contact'].map((path) => ({
        url: `${siteConfig.url}${path}`,
        lastModified: new Date(),
    }));

    const projectRoutes = projects.map((project) => ({
        url: `${siteConfig.url}/projects/${project.slug}`,
        lastModified: new Date(),
    }));

    return [...staticRoutes, ...projectRoutes];
}