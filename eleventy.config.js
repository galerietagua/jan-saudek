export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/style.css");

  // "+420 602 292 351" -> "+420602292351"
  eleventyConfig.addFilter("tel", (s) => String(s).replace(/[^\d+]/g, ""));
  // "img/foo.jpg" -> "/img/foo.jpg", URL nechá být
  eleventyConfig.addFilter("src", (s) => (/^(https?:)?\//.test(s) ? s : "/" + s));

  return {
    dir: { input: "src", output: "_site" },
  };
}
