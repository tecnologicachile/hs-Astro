import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');

  // Sort posts by date (newest first)
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Blog Hosting Sistemas Chile',
    description: 'Tutoriales, guías y noticias sobre hosting e-commerce, Softland ERP y tecnología empresarial en Chile.',
    site: context.site ?? 'https://hostingsistemas.cl',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      categories: [post.data.category, ...post.data.tags],
      author: post.data.author,
    })),
    customData: `<language>es-CL</language>
<copyright>© ${new Date().getFullYear()} Hosting Sistemas Chile. Todos los derechos reservados.</copyright>
<managingEditor>contacto@hostingsistemas.cl (Hosting Sistemas)</managingEditor>
<webMaster>contacto@hostingsistemas.cl (Hosting Sistemas)</webMaster>
<ttl>60</ttl>
<image>
  <url>https://hostingsistemas.cl/logo.png</url>
  <title>Blog Hosting Sistemas Chile</title>
  <link>https://hostingsistemas.cl/blog</link>
</image>`,
  });
}
