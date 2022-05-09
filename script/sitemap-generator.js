/* eslint @typescript-eslint/no-var-requires: "off" */
const fs = require("fs")
const globby = require("globby")
require("dotenv").config({ path: ".env" })

const WEBSITE_URL = "https://donghakang.github.io"

function addPage(page) {
  const path = page
    .replace("pages", "")
    .replace(".tsx", "")
    .replace("/index", "")

  return `<url>
  <loc>${`${WEBSITE_URL}${path}`}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
</url>`
}

function addBlogPage(page) {
  const path = page.replace(".mdx", "")

  return `<url>
  <loc>${`${WEBSITE_URL}/${path}`}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
</url>`
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
  ])

  const blog = await globby(["blog/*.mdx", "project/*.mdx"])

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
>\n${pages.map(addPage).join("\n")}`

  const blogSitemap = `\n${blog.map(addBlogPage).join("\n")}\n</urlset>`

  console.log("build sitemap..")
  fs.writeFileSync("public/sitemap.xml", sitemap + blogSitemap)
}

generateSitemap()
