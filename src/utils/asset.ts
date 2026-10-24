/**
 * Helper to ensure assets (images, pdfs, icons) are correctly resolved
 * when deployed with a basePath (e.g. GitHub Pages at /my-profile/)
 * as well as on custom domains and localhost.
 */
export const getAssetPath = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // If already prefixed with basePath, return as is
  if (basePath && cleanPath.startsWith(basePath)) {
    return cleanPath;
  }

  return `${basePath}${cleanPath}`;
};
