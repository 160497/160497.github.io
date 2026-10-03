/* Public profile links, in one place.
   Values come from .env when present; the fallbacks are what ships on GitHub
   Pages, since .env is gitignored and the CI build never sees it. */

export const GITHUB_USER = import.meta.env.VITE_GITHUB_USER || "160497";
export const GITHUB_URL = `https://github.com/${GITHUB_USER}`;

export const LINKEDIN_URL =
  import.meta.env.VITE_LINKEDIN_URL ||
  "https://www.linkedin.com/in/fanuel-negasi-welehariat-06827b375/";

/* Instagram profile URLs have no "@" in the path — strip it if present. */
export const INSTAGRAM_URL = (
  import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/fanubreak_man/"
).replace("instagram.com/@", "instagram.com/");
export const INSTAGRAM_HANDLE =
  "@" + INSTAGRAM_URL.replace(/\/+$/, "").split("/").pop();
