const setMetaTag = (attrName, attrValue, content) => {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const setLinkTag = (rel, href) => {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

/**
 * Update page SEO dynamically
 * @param {Object} param0
 * title: string
 * description: string
 * keywords: string
 * image: string (OG image)
 * canonical: string
 */
const updatePageSEO = ({ title, description, keywords, image, canonical }) => {
  if (title) document.title = title;
  if (description) setMetaTag("name", "description", description);
  if (keywords) setMetaTag("name", "keywords", keywords);
  if (image) setMetaTag("property", "og:image", image);
  if (title) setMetaTag("property", "og:title", title);
  if (description) setMetaTag("property", "og:description", description);
  if (canonical) setLinkTag("canonical", canonical);
};

export default updatePageSEO;
