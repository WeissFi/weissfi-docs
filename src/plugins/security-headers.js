/**
 * Docusaurus plugin to add security meta tags
 * Note: This adds meta tags but HTTP headers are more effective for clickjacking protection
 */
module.exports = function securityHeadersPlugin(context, options) {
  return {
    name: 'docusaurus-plugin-security-headers',

    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'meta',
            attributes: {
              'http-equiv': 'Content-Security-Policy',
              content: "frame-ancestors 'none'",
            },
          },
          {
            tagName: 'meta',
            attributes: {
              'http-equiv': 'X-Content-Type-Options',
              content: 'nosniff',
            },
          },
        ],
      };
    },
  };
};
