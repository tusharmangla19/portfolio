import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Smooth scroll utility with offset for fixed navigation
export function smoothScrollToSection(href: string, offset: number = 80) {
  const element = document.querySelector(href) as HTMLElement;
  if (element) {
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

// Smooth scroll to top
export function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
