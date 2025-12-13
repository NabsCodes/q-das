import { client } from "@/lib/sanity/client";
import type { NewsArticle } from "@/lib/data/news";
import type { TeamMember } from "@/lib/data/team";
import type { Testimonial } from "@/lib/types/testimonial";

// Only fetch published documents (excludes drafts)
// Draft documents in Sanity have _id starting with "drafts."
const publishedFilter = `!(_id in path("drafts.**"))`;

export async function getNewsArticles(): Promise<NewsArticle[]> {
  const query = `*[_type == "post" && ${publishedFilter}] | order(publishedAt desc) {
    _id,
    "id": _id,
    "slug": slug.current,
    title,
    excerpt,
    mainImage,
    "image": mainImage.asset->url,
    category,
    featured,
    "author": author->name,
    "date": publishedAt,
    "content": body
  }`;

  return client.fetch(query);
}

export async function getNewsArticle(
  slug: string,
): Promise<NewsArticle | null> {
  const query = `*[_type == "post" && slug.current == $slug && ${publishedFilter}][0] {
    _id,
    "id": _id,
    "slug": slug.current,
    title,
    excerpt,
    mainImage,
    "image": mainImage.asset->url,
    category,
    featured,
    "author": author->name,
    "date": publishedAt,
    "content": body
  }`;

  return client.fetch(query, { slug });
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const query = `*[_type == "teamMember" && ${publishedFilter}] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    role,
    "image": image.asset->url,
    shortBio
  }`;

  return client.fetch(query);
}

export async function getTeamMember(slug: string): Promise<TeamMember | null> {
  const query = `*[_type == "teamMember" && slug.current == $slug && ${publishedFilter}][0] {
    _id,
    name,
    "slug": slug.current,
    role,
    "image": image.asset->url,
    shortBio,
    bio,
    socialLinks[] {
      platform,
      url
    }
  }`;

  return client.fetch(query, { slug });
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const query = `*[_type == "testimonial" && ${publishedFilter}] {
    _id,
    name,
    role,
    company,
    content,
    "avatar": avatar.asset->url
  }`;
  return client.fetch(query);
}

// FAQ types and fetch function
export interface SanityFAQ {
  _id: string;
  question: string;
  answer: string;
  order?: number;
}

export async function getFAQs(): Promise<SanityFAQ[]> {
  const query = `*[_type == "faq" && ${publishedFilter}] | order(order asc) {
    _id,
    question,
    answer,
    order
  }`;
  return client.fetch(query);
}

// Partner types and fetch function
export interface SanityPartner {
  _id: string;
  name: string;
  logo: string;
  website?: string;
  order?: number;
}

export async function getPartners(): Promise<SanityPartner[]> {
  const query = `*[_type == "partner" && ${publishedFilter}] | order(order asc) {
    _id,
    name,
    "logo": logo.asset->url,
    website,
    order
  }`;
  return client.fetch(query);
}
