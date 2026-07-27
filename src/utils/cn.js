/**
 * Tiny classnames helper — merges truthy class strings.
 * Keeps components free of external dependency for simple conditional classes.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
