/*
  # Create Blog and Contact Management Schema

  ## Overview
  This migration creates the database structure for:
  - Blog posts with categories and tags
  - Contact form submissions
  - Team member profiles

  ## New Tables

  ### `blog_posts`
  - `id` (uuid, primary key) - Unique identifier for each post
  - `title` (text) - Post title
  - `slug` (text, unique) - URL-friendly version of title
  - `excerpt` (text) - Short description/preview
  - `content` (text) - Full post content (markdown)
  - `author` (text) - Author name
  - `category` (text) - Post category
  - `tags` (text[]) - Array of tags
  - `featured_image` (text) - Image URL
  - `published` (boolean, default false) - Publication status
  - `views` (integer, default 0) - View count
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `contact_submissions`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Contact name
  - `email` (text) - Contact email
  - `company` (text) - Company name (optional)
  - `message` (text) - Message content
  - `phone` (text) - Phone number (optional)
  - `source` (text) - Where they heard about us
  - `created_at` (timestamptz) - Submission timestamp

  ### `team_members`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Team member name
  - `role` (text) - Job title/role
  - `bio` (text) - Biography
  - `avatar_url` (text) - Profile image URL
  - `linkedin_url` (text) - LinkedIn profile (optional)
  - `twitter_url` (text) - Twitter profile (optional)
  - `github_url` (text) - GitHub profile (optional)
  - `sort_order` (integer, default 0) - Display order
  - `active` (boolean, default true) - Active status
  - `created_at` (timestamptz) - Creation timestamp

  ## Security
  - RLS enabled on all tables
  - Public read access for published blog posts and active team members
  - Authenticated access required for creating/updating content
  - Contact submissions are write-only for public, read-only for authenticated users

  ## Notes
  - Blog posts support markdown content
  - Tags stored as array for flexible categorization
  - Contact form captures source for analytics
*/

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL DEFAULT 'goAI Team',
  category text NOT NULL DEFAULT 'Engineering',
  tags text[] DEFAULT ARRAY[]::text[],
  featured_image text,
  published boolean DEFAULT false,
  views integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  phone text,
  source text,
  created_at timestamptz DEFAULT now()
);

-- Create team_members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  bio text NOT NULL,
  avatar_url text,
  linkedin_url text,
  twitter_url text,
  github_url text,
  sort_order integer DEFAULT 0,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Blog posts policies
CREATE POLICY "Public can view published blog posts"
  ON blog_posts FOR SELECT
  TO public
  USING (published = true);

CREATE POLICY "Authenticated users can manage blog posts"
  ON blog_posts FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Contact submissions policies
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

-- Team members policies
CREATE POLICY "Public can view active team members"
  ON team_members FOR SELECT
  TO public
  USING (active = true);

CREATE POLICY "Authenticated users can manage team members"
  ON team_members FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_team_members_sort_order ON team_members(sort_order);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, author, category, tags, featured_image, published, views) VALUES
(
  'How We Ship MVPs in 2-4 Weeks',
  'how-we-ship-mvps-in-2-4-weeks',
  'Our proven framework for delivering production-ready MVPs at lightning speed without sacrificing quality.',
  E'# How We Ship MVPs in 2-4 Weeks\n\nSpeed is everything in startup land. The difference between launching in 2 weeks versus 6 months can make or break your business. Here''s our battle-tested framework.\n\n## Week 1: Sprint Zero\nWe don''t waste time. Day 1 starts with a focused kickoff call where we ruthlessly prioritize features. Only the core value proposition makes it in.\n\n## Week 2-3: Build Sprint\nParallel development across frontend, backend, and infrastructure. Daily deploys mean you see progress in real-time.\n\n## Week 4: Polish & Launch\nBug fixes, performance optimization, and production deployment. Your MVP is live and ready for users.\n\n## The Secret Sauce\nThe key is saying NO to 90% of requested features. An MVP isn''t your final product—it''s your learning tool.',
  'Alex Chen',
  'Product Development',
  ARRAY['MVP', 'Startup', 'Development'],
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
  true,
  245
),
(
  'The Hidden Cost of Technical Debt',
  'hidden-cost-of-technical-debt',
  'Why rushing to ship features without proper architecture will cost you 10x more later.',
  E'# The Hidden Cost of Technical Debt\n\nEvery shortcut you take today becomes interest you pay tomorrow. We''ve seen it hundreds of times.\n\n## The Trap\nYou''re moving fast, shipping features weekly. Everything feels great. Until it doesn''t.\n\n## The Breaking Point\nOne day, a simple feature takes 2 weeks instead of 2 days. Your codebase has become a minefield.\n\n## The Fix\nWe build for speed AND sustainability. Clean architecture from day one. Proper testing. Documentation that actually helps.\n\n## The Math\nPay a little extra upfront, save 10x later. It''s that simple.',
  'Sarah Martinez',
  'Engineering',
  ARRAY['Technical Debt', 'Best Practices', 'Architecture'],
  'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
  true,
  189
),
(
  'AI Agents: The Next Wave of Automation',
  'ai-agents-next-wave-automation',
  'How autonomous AI agents are transforming business operations and what you need to know.',
  E'# AI Agents: The Next Wave of Automation\n\nWe''re in the middle of a paradigm shift. AI agents aren''t just chatbots—they''re autonomous workers.\n\n## What Makes Agents Different\nTraditional automation: if-this-then-that\nAI agents: goal-oriented reasoning\n\n## Real Use Cases\n- Customer support that actually understands context\n- Sales outreach that adapts to responses\n- Data analysis that asks the right questions\n\n## Building Your First Agent\nStart simple. One task, one agent. Measure results. Iterate fast.\n\n## The Future\nIn 2 years, every company will have AI agents. The question is: will you be early or late?',
  'Marcus Lee',
  'AI & Innovation',
  ARRAY['AI', 'Automation', 'Future'],
  'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
  true,
  312
);

-- Insert sample team members
INSERT INTO team_members (name, role, bio, avatar_url, linkedin_url, github_url, sort_order, active) VALUES
(
  'Alex Chen',
  'Co-Founder & CEO',
  'Former engineering lead at Facebook. Built 0-to-1 products for 10M+ users. Obsessed with velocity.',
  'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
  'https://linkedin.com/in/alexchen',
  'https://github.com/alexchen',
  1,
  true
),
(
  'Sarah Martinez',
  'Co-Founder & CTO',
  'Ex-Google Staff Engineer. 15 years shipping production systems at scale. Speed is her superpower.',
  'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
  'https://linkedin.com/in/sarahmartinez',
  'https://github.com/sarahmartinez',
  2,
  true
),
(
  'Marcus Lee',
  'Head of AI',
  'PhD in ML from Stanford. Previously built AI systems at OpenAI. Bleeding-edge is his comfort zone.',
  'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
  'https://linkedin.com/in/marcuslee',
  'https://github.com/marcuslee',
  3,
  true
),
(
  'Emma Rodriguez',
  'Lead Product Designer',
  '10+ years designing products people love. Figma wizard. Believes great UX is invisible.',
  'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg',
  'https://linkedin.com/in/emmarodriguez',
  null,
  4,
  true
);