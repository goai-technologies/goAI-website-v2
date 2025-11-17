import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function SEO({
  title = 'goAI - Ship in Weeks, Not Months | Rapid Development Agency',
  description = 'Engineering ninjas delivering MVPs, crushing backlogs, and shipping at lightning speed. From zero to production in 2-4 weeks. Get started in 48 hours.',
  keywords = 'rapid development, MVP development, fast development agency, backlog clearing, sprint augmentation, AI development, startup development, engineering team augmentation, fast coding, quick product launch',
  image = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
  url = 'https://goai.dev',
  type = 'website',
  author = 'goAI Team',
  publishedTime,
  modifiedTime
}: SEOProps) {
  const fullTitle = title.includes('goAI') ? title : `${title} | goAI`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="goAI" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@goai_dev" />

      {/* Article Meta Tags (for blog posts) */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "goAI",
          "description": description,
          "url": url,
          "logo": image,
          "sameAs": [
            "https://www.linkedin.com/company/goai-technologies",
            "https://github.com/goai-technologies"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-786-530-1555",
            "contactType": "Sales",
            "email": "info@goai.solutions",
            "areaServed": "US",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "addressCountry": "US"
          }
        })}
      </script>

      {type === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "image": image,
            "author": {
              "@type": "Person",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": "goAI",
              "logo": {
                "@type": "ImageObject",
                "url": image
              }
            },
            "datePublished": publishedTime,
            "dateModified": modifiedTime || publishedTime
          })}
        </script>
      )}
    </Helmet>
  );
}
