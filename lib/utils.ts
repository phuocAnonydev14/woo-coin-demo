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

export const getSourceFromHtml = (html: string) => {
  const sourceMatch = html.match(/<p>Source:\s*([^<]*)<\/p>/);
  if(sourceMatch && sourceMatch[1])
    return sourceMatch[1].trim();
  return ''
}

export const getIconFromHtml = (html: string) => {
  const iconMatch = html.match(/<p>Falvicon:\s*([^<]*)<\/p>/);
  if(iconMatch && iconMatch[1])
    return iconMatch[1].trim();
  return ''
}

export const filterHtmlString = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

// Find all <p> elements
  const paragraphs = doc.querySelectorAll('p');

// Loop through all <p> elements and check their text content
  paragraphs.forEach((p) => {
    if (p?.textContent?.includes('Authors:')) {
      p.remove(); // Remove the paragraph if it contains "Authors:"
    }if (p?.textContent?.includes('Falvicon:')) {
      p.remove(); // Remove the paragraph if it contains "Falvicon:"
    }if (p?.textContent?.includes('Source:')) {
      p.remove(); // Remove the paragraph if it contains "Source:"
    }
  });

// Get the updated HTML as string
  return doc.body.innerHTML;

}
