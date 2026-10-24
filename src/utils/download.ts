import { getAssetPath } from './asset';

/**
 * Utility helper to handle reliable PDF downloading across all deployment environments:
 * - Localhost (e.g. http://localhost:3000)
 * - Custom domain (e.g. https://akhilaravind.dev)
 * - GitHub Pages root (e.g. https://akhilaravind.github.io)
 * - GitHub Pages project repository subpath (e.g. https://akhilaravind.github.io/my-profile/)
 */

export const getPdfDownloadUrl = (): string => {
  return getAssetPath('/Akhil%20Aravind.pdf');
};

export const triggerPdfDownload = (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
  }

  if (typeof window === 'undefined') return;

  const url = getPdfDownloadUrl();
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Akhil Aravind.pdf';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
