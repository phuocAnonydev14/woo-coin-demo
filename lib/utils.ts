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

export const getDataMatchFromHtml = (html: string, sourceRegex: RegExp) => {
  const dataMatch = html.match(sourceRegex);

  if (dataMatch && dataMatch[1])
    return dataMatch[1].trim();
  return ''
}

export const getAuthorFromHtml = (html: string) => {
  return getDataMatchFromHtml(html, /<p>Authors:\s*([^<]*)<\/p>/)
}

export const getSourceFromHtml = (html: string) => {
  return getDataMatchFromHtml(html,/<p>Source:\s*([^<]*)<\/p>/)
}

export const getIconFromHtml = (html: string) => {
  return getDataMatchFromHtml(html, /<p>Falvicon:\s*([^<]*)<\/p>/)
}

export const getTweetStatusFromHtml = (html: string) => {
  return getDataMatchFromHtml(html, /<p>Tweet Status:\s*([^<]*)<\/p>/)
}

export const getTypeFromHtml = (html: string) => {
  return getDataMatchFromHtml(html, /<p>Type:\s*([^<]*)<\/p>/)
}

export const getMediaLinkFromHtml = (html: string) => {
  return getDataMatchFromHtml(html, /<p>Media link:\s*([^<]*)<\/p>/).split(";").filter(item => item)
}

export const getProfileImageFromHtml = (html: string) => {
  return getDataMatchFromHtml(html, /<p>Profile Image:\s*([^<]*)<\/p>/)
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
    }if (p?.textContent?.includes('Favicon:')) {
      p.remove(); // Remove the paragraph if it contains "Falvicon:"
    }if (p?.textContent?.includes('Source:')) {
      p.remove(); // Remove the paragraph if it contains "Source:"
    }if (p?.textContent?.includes('Type:')) {
      p.remove(); // Remove the paragraph if it contains "Source:"
    }if (p?.textContent?.includes('Media link:')) {
      p.remove(); // Remove the paragraph if it contains "Source:"
    }if (p?.textContent?.includes('Tweet Status:')) {
      p.remove(); // Remove the paragraph if it contains "Source:"
    }if (p?.textContent?.includes('Screen Name:')) {
      p.remove(); // Remove the paragraph if it contains "Source:"
    }if (p?.textContent?.includes('Profile Image:')) {
      p.remove(); // Remove the paragraph if it contains "Source:"
    }
  });

// Get the updated HTML as string
  return doc.body.innerHTML;

}
