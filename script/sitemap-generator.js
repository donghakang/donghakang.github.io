const fs = require("fs");
const globby = require("globby");
require("dotenv").config({ path: ".env" });

function addPage(page) {
  const path = page
    .replace("pages", "")
    .replace(".tsx", "")
    .replace("/index", "");

  return `  <url>
    <loc>${`${process.env.WEBSITE_URL}${path}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

function addBlogPage(page) {
  const path = page.replace(".mdx", "");

  return `  <url>
    <loc>${`${process.env.WEBSITE_URL}/${path}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

async function generateSitemap() {
  // excludes Nextjs files and API routes.
  const pages = await globby([
    "pages/*.tsx",
    "pages/*/*.tsx",
    "!pages/_*.tsx",
    "!pages/404.tsx",
    "!pages/blog/[slug].tsx",
    "!pages/project/[project_slug].tsx",
  ]);

  const blog = await globby(["blog/*.mdx", "project/*.mdx"]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(addPage).join("\n")}`;

  const blogSitemap = `${blog.map(addBlogPage).join("\n")}</urlset>`;

  console.log("build sitemap..");
  fs.writeFileSync("public/sitemap.xml", sitemap + blogSitemap);
}

generateSitemap();
