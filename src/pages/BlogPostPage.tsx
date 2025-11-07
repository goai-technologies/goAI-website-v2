import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Eye, ArrowLeft, Tag } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { SEO } from '../components/SEO';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  featured_image: string;
  views: number;
  created_at: string;
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchPost(slug);
    }
  }, [slug]);

  async function fetchPost(postSlug: string) {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', postSlug)
        .eq('published', true)
        .maybeSingle();

      if (error) throw error;
      if (data) {
        setPost(data);
        await supabase
          .from('blog_posts')
          .update({ views: data.views + 1 })
          .eq('id', data.id);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-slate-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.content.substring(0, 160)}
        keywords={post.tags.join(', ')}
        image={post.featured_image}
        url={`https://goai.dev/blog/${post.slug}`}
        type="article"
        author={post.author}
        publishedTime={post.created_at}
      />
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-semibold mb-6">
              {post.category}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-semibold">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(post.created_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                {post.views} views
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden mb-12 border border-slate-700">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <div
              className="text-slate-300 leading-relaxed space-y-6"
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75'
              }}
            >
              {post.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1 key={idx} className="text-4xl font-bold mb-6 mt-12 text-white">
                      {paragraph.replace('# ', '')}
                    </h1>
                  );
                } else if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={idx} className="text-3xl font-bold mb-4 mt-10 text-white">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-2xl font-bold mb-3 mt-8 text-white">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                } else if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n');
                  return (
                    <ul key={idx} className="list-disc list-inside space-y-2 text-slate-300">
                      {items.map((item, i) => (
                        <li key={i}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                } else {
                  return (
                    <p key={idx} className="text-slate-300">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-3 flex-wrap pt-8 border-t border-slate-700">
              <Tag className="w-5 h-5 text-cyan-400" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-12 p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-4">Ready to ship fast?</h3>
            <p className="text-slate-300 mb-6">
              Let's build your MVP or crush your backlog together. Get started in 48 hours.
            </p>
            <Link
              to="/#clients"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              Get Started
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </div>
        </div>
      </article>
    </div>
    </>
  );
}
