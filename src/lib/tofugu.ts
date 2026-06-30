// Tofugu's grammar articles use romaji slugs that aren't derivable from a
// Japanese title, and the site has no URL-based search. So we link to a
// Tofugu-scoped web search for the grammar point, which reliably lands on the
// relevant article (tofugu.com/japanese-grammar/...). Works for every point
// with no per-point URL map to maintain.
export function tofuguSearchUrl(title: string): string {
  // Drop the leading ～/~ and any English/Japanese parenthetical note so the
  // query is just the grammar form, e.g. "～そう (appearance)" -> "そう".
  const term = title
    .replace(/[～~「」]/g, '')
    .split(/[（(]/)[0]
    .trim()
  const q = `site:tofugu.com/japanese-grammar ${term}`
  return `https://www.google.com/search?q=${encodeURIComponent(q)}`
}
