/**
 * Utility helper to handle reliable PDF downloading across all deployment environments:
 * - Localhost (e.g. http://localhost:3000)
 * - Custom domain (e.g. https://akhilaravind.dev)
 * - GitHub Pages root (e.g. https://akhilaravind.github.io)
 * - GitHub Pages project repository subpath (e.g. https://akhilaravind.github.io/portfolio/)
 */

export const getPdfDownloadUrl = (): string => {
  if (typeof window === 'undefined') {
    return '/Akhil%20Aravind.pdf';
  }

  const isGitHubPages = window.location.hostname.endsWith('github.io');
  const pathSegments = window.location.pathname.split('/').filter(Boolean);
  const knownAppRoutes = ['services', 'education', 'experience', 'portfolio', 'contact'];

  // If on a github.io subpath (e.g. /<repo>/...)
  if (isGitHubPages && pathSegments.length > 0 && !knownAppRoutes.includes(pathSegments[0])) {
    return `/${pathSegments[0]}/Akhil%20Aravind.pdf`;
  }

  return '/Akhil%20Aravind.pdf';
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
