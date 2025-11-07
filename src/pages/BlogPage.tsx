import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Eye, ArrowRight, Tag } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SEO } from '../components/SEO';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  featured_image: string;
  views: number;
  created_at: string;
}

export function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const heroSection = useScrollAnimation();
  const postsSection = useScrollAnimation();

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  }

  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category)))];
  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(p => p.category === selectedCategory);

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <>
      <SEO
        title="Engineering Blog - Rapid Development Insights"
        description="Deep dives into rapid development, AI, MVP building, and shipping at lightning speed. Learn from engineering ninjas who build fast."
        keywords="engineering blog, rapid development, MVP development, AI development, software engineering"
        url="https://goai.dev/blog"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-32 pb-20 px-6" ref={heroSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
              <Tag className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">INSIGHTS & ARTICLES</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="gradient-text from-cyan-400 to-blue-400">Engineering Blog</span>
            </h1>
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
              Deep dives into rapid development, AI, and building at lightning speed
            </p>
          </div>

          {featuredPost && (
            <Link
              to={`/blog/${featuredPost.slug}`}
              className={`block group ${heroSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={featuredPost.featured_image}
                      alt={featuredPost.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent"></div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-semibold mb-4 w-fit">
                      FEATURED POST
                    </div>
                    <h2 className="text-4xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-slate-400 text-sm mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.created_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        {featuredPost.views}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all">
                      Read Full Article
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/50" ref={postsSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className={`group block ${postsSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-400/90 text-slate-900 rounded-full text-xs font-bold">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-400 mb-4 leading-relaxed line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!loading && filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-slate-400">No posts found in this category</p>
            </div>
          )}
        </div>
      </section>
    </div>
    </>
  );
}
