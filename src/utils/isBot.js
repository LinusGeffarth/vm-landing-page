import { getUA } from 'react-device-detect';
// eslint-disable-next-line wrap-regex
const isBot = () => /bot|googlebot|crawler|spider|robot|crawling|prerender/i.test(getUA);

export default isBot;
