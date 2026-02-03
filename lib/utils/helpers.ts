import slugify from 'slugify';
import { clsx, type ClassValue } from 'clsx';

/**
 * Utility Functions
 * Reusable helpers for common operations
 */

// Class name merger (for Tailwind)
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Generate URL-safe slug
export function generateSlug(text: string): string {
  return slugify(text, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g,
  });
}

// Format date for display
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

// Truncate text
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

// Strip HTML tags
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

// Generate excerpt from content
export function generateExcerpt(content: string, length: number = 160): string {
  const text = stripHtml(content);
  return truncate(text, length);
}

// Validate environment variables
export function getEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

// Safe JSON parse
export function safeJsonParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}