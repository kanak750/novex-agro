import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  ogImage?: string;
}

export function SEO({ title, description, ogImage }: SEOProps) {
  useEffect(() => {
    document.title = title;
    if (description) {
      setMeta('description', description);
      setMeta('og:description', description, true);
      setMeta('twitter:description', description);
    }
    setMeta('og:title', title, true);
    setMeta('twitter:title', title);
    if (ogImage) {
      setMeta('og:image', ogImage, true);
      setMeta('twitter:image', ogImage);
    }
  }, [title, description, ogImage]);

  return null;
}

function setMeta(name: string, content: string, isOg = false) {
  const attr = isOg || name.startsWith('og:') ? 'property' : 'name';
  let tag = document.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}
