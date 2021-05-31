
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("E:\\mercury_towers\\.cache\\dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("E:\\mercury_towers\\src\\pages\\404.js")),
  "component---src-templates-archive-js": preferDefault(require("E:\\mercury_towers\\src\\templates\\archive.js")),
  "component---src-templates-types-page-js": preferDefault(require("E:\\mercury_towers\\src\\templates\\types\\page.js")),
  "component---src-templates-types-post-js": preferDefault(require("E:\\mercury_towers\\src\\templates\\types\\post.js"))
}

