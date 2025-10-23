// Utilitario centralizado para obtención y filtrado de posts de blog
import { getCollection, type CollectionEntry } from 'astro:content';

export interface BlogPost extends CollectionEntry<'blog'> {
  // Puedes extender aquí si necesitas más campos
}

export async function getSortedBlogPosts(
  locale: 'es' | 'en',
  options?: { featuredOnly?: boolean; limit?: number }
): Promise<BlogPost[]> {
  // Obtener todos los posts publicados
  const allPosts = await getCollection(
    'blog',
    (entry) => entry.data.status === 'published'
  );

  // Filtrar por idioma si el campo title es objeto
  const filteredPosts = allPosts.filter((post) => {
    if (typeof post.data.title === 'object') {
      return post.data.title[locale as 'es' | 'en'] !== undefined;
    }
    return true;
  });

  let posts = filteredPosts;

  // Filtrar destacados si se solicita
  if (options?.featuredOnly) {
    posts = posts.filter((p) => p.data.featured);
  }

  // Ordenar: primero por prioridad si es destacado, luego por fecha
  posts = posts.sort((a, b) => {
    if (a.data.featured && b.data.featured) {
      return (b.data.priority ?? 0) - (a.data.priority ?? 0);
    }
    return (
      new Date(b.data.createdAt).getTime() -
      new Date(a.data.createdAt).getTime()
    );
  });

  // Limitar cantidad si se solicita
  if (options?.limit) {
    posts = posts.slice(0, options.limit);
  }

  return posts;
}
