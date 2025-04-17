
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a date string to a localized format
 * @param dateString - ISO date string or Date object
 * @param locale - Locale string (default: 'pt-BR')
 * @returns Formatted date string
 */
export function formatDate(dateString: string | Date, locale: string = 'pt-BR'): string {
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Truncate a string to a maximum length
 * @param str - String to truncate
 * @param maxLength - Maximum length
 * @returns Truncated string with ellipsis
 */
export function truncateString(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

/**
 * Validate email format
 * @param email - Email to validate
 * @returns Boolean indicating if email is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Generate a unique ID
 * @returns Unique ID string
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}
