import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'});
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getAuthorFromHtml = (html: string) => {
  const authorsMatch = html.match(/<p>Authors:\s*([^<]*)<\/p>/);

  if (authorsMatch && authorsMatch[1])
    return authorsMatch[1].trim();
  return ''
}
