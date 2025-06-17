import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isElementOutOfView(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  // Check if the element is completely above the viewport
  if (rect.bottom < 0) {
    return true;
  }

  // Check if the element is completely below the viewport
  if (rect.top >= viewportHeight) {
    return true;
  }

  // Check if the element is completely to the left of the viewport
  if (rect.right < 0) {
    return true;
  }

  // Check if the element is completely to the right of the viewport
  if (rect.left >= viewportWidth) {
    return true;
  }

  // If none of the above are true, the element is at least partially in view
  return false;
}
