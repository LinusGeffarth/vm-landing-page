// eslint-disable-next-line wrap-regex
const isBot = () => /bot|googlebot|crawler|spider|robot|crawling|prerender/i.test(navigator.userAgent);

export default isBot;
